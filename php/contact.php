<?php
/**
 * Contact Form Handler
 * Processes contact form submissions with validation and email sending
 */

// Enable error reporting for development (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set content type to JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Configuration
$config = [
    'to_email' => 'your.email@example.com', // Replace with your email
    'from_name' => 'Portfolio Contact Form',
    'subject_prefix' => '[Portfolio] ',
    'max_message_length' => 1000,
    'required_fields' => ['name', 'email', 'subject', 'message']
];

try {
    // Get and decode JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // If JSON decode fails, try form data
    if ($input === null) {
        $input = $_POST;
    }
    
    // Validate required fields
    $errors = validateInput($input, $config);
    
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['error' => 'Validation failed', 'details' => $errors]);
        exit;
    }
    
    // Sanitize input data
    $data = sanitizeInput($input);
    
    // Send email
    $emailSent = sendContactEmail($data, $config);
    
    if ($emailSent) {
        // Log successful submission (optional)
        logSubmission($data);
        
        echo json_encode([
            'success' => true,
            'message' => 'Message sent successfully!'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'error' => 'Internal server error',
        'message' => 'Failed to send message. Please try again later.'
    ]);
}

/**
 * Validate input data
 */
function validateInput($input, $config) {
    $errors = [];
    
    // Check required fields
    foreach ($config['required_fields'] as $field) {
        if (empty($input[$field]) || trim($input[$field]) === '') {
            $errors[$field] = ucfirst($field) . ' is required';
        }
    }
    
    // Validate email format
    if (!empty($input['email']) && !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email format';
    }
    
    // Validate name (only letters, spaces, hyphens, apostrophes)
    if (!empty($input['name']) && !preg_match("/^[a-zA-Z\s'-]+$/", $input['name'])) {
        $errors['name'] = 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    
    // Validate name length
    if (!empty($input['name']) && strlen(trim($input['name'])) < 2) {
        $errors['name'] = 'Name must be at least 2 characters long';
    }
    
    // Validate subject length
    if (!empty($input['subject']) && strlen(trim($input['subject'])) < 3) {
        $errors['subject'] = 'Subject must be at least 3 characters long';
    }
    
    // Validate message length
    if (!empty($input['message'])) {
        $messageLength = strlen(trim($input['message']));
        if ($messageLength < 10) {
            $errors['message'] = 'Message must be at least 10 characters long';
        } elseif ($messageLength > $config['max_message_length']) {
            $errors['message'] = 'Message must be less than ' . $config['max_message_length'] . ' characters';
        }
    }
    
    return $errors;
}

/**
 * Sanitize input data
 */
function sanitizeInput($input) {
    return [
        'name' => htmlspecialchars(trim($input['name']), ENT_QUOTES, 'UTF-8'),
        'email' => filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL),
        'subject' => htmlspecialchars(trim($input['subject']), ENT_QUOTES, 'UTF-8'),
        'message' => htmlspecialchars(trim($input['message']), ENT_QUOTES, 'UTF-8'),
        'timestamp' => date('Y-m-d H:i:s'),
        'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
    ];
}

/**
 * Send contact email
 */
function sendContactEmail($data, $config) {
    $to = $config['to_email'];
    $subject = $config['subject_prefix'] . $data['subject'];
    
    // Create email body
    $body = "New contact form submission:\n\n";
    $body .= "Name: " . $data['name'] . "\n";
    $body .= "Email: " . $data['email'] . "\n";
    $body .= "Subject: " . $data['subject'] . "\n";
    $body .= "Message:\n" . $data['message'] . "\n\n";
    $body .= "---\n";
    $body .= "Submitted: " . $data['timestamp'] . "\n";
    $body .= "IP Address: " . $data['ip_address'] . "\n";
    
    // Email headers
    $headers = [
        'From: ' . $config['from_name'] . ' <noreply@' . $_SERVER['HTTP_HOST'] . '>',
        'Reply-To: ' . $data['name'] . ' <' . $data['email'] . '>',
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/plain; charset=UTF-8'
    ];
    
    // Send email
    return mail($to, $subject, $body, implode("\r\n", $headers));
}

/**
 * Log submission to file (optional)
 */
function logSubmission($data) {
    $logFile = __DIR__ . '/../logs/contact_submissions.log';
    $logDir = dirname($logFile);
    
    // Create logs directory if it doesn't exist
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }
    
    $logEntry = [
        'timestamp' => $data['timestamp'],
        'name' => $data['name'],
        'email' => $data['email'],
        'subject' => $data['subject'],
        'ip_address' => $data['ip_address']
    ];
    
    file_put_contents($logFile, json_encode($logEntry) . "\n", FILE_APPEND | LOCK_EX);
}

/**
 * Rate limiting (optional - implement if needed)
 */
function checkRateLimit($ip) {
    $rateLimitFile = __DIR__ . '/../logs/rate_limit.json';
    $maxRequests = 5; // Max requests per hour
    $timeWindow = 3600; // 1 hour in seconds
    
    if (!file_exists($rateLimitFile)) {
        return true;
    }
    
    $rateLimitData = json_decode(file_get_contents($rateLimitFile), true) ?: [];
    $currentTime = time();
    
    // Clean old entries
    $rateLimitData = array_filter($rateLimitData, function($timestamp) use ($currentTime, $timeWindow) {
        return ($currentTime - $timestamp) < $timeWindow;
    });
    
    // Check if IP has exceeded rate limit
    $ipRequests = array_filter($rateLimitData, function($timestamp, $requestIp) use ($ip) {
        return $requestIp === $ip;
    }, ARRAY_FILTER_USE_BOTH);
    
    if (count($ipRequests) >= $maxRequests) {
        return false;
    }
    
    // Add current request
    $rateLimitData[$ip . '_' . $currentTime] = $currentTime;
    
    // Save updated data
    file_put_contents($rateLimitFile, json_encode($rateLimitData));
    
    return true;
}
?>
