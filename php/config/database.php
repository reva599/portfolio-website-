<?php
/**
 * Database Configuration
 * Configure your database connection settings here
 */

// Database configuration
$host = 'localhost';
$dbname = 'portfolio_db';
$username = 'root'; // Change this to your database username
$password = '';     // Change this to your database password
$charset = 'utf8mb4';

// DSN (Data Source Name)
$dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";

// PDO options
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

// Test database connection function
function testDatabaseConnection() {
    global $dsn, $username, $password, $options;
    
    try {
        $pdo = new PDO($dsn, $username, $password, $options);
        return ['success' => true, 'message' => 'Database connection successful'];
    } catch (PDOException $e) {
        return ['success' => false, 'message' => 'Database connection failed: ' . $e->getMessage()];
    }
}

// Get database connection
function getDatabaseConnection() {
    global $dsn, $username, $password, $options;
    
    try {
        return new PDO($dsn, $username, $password, $options);
    } catch (PDOException $e) {
        throw new Exception('Database connection failed: ' . $e->getMessage());
    }
}

// Initialize database tables if they don't exist
function initializeDatabase() {
    try {
        $pdo = getDatabaseConnection();
        
        // Read and execute schema file
        $schemaFile = __DIR__ . '/../../database/schema.sql';
        if (file_exists($schemaFile)) {
            $schema = file_get_contents($schemaFile);
            $pdo->exec($schema);
            return ['success' => true, 'message' => 'Database initialized successfully'];
        } else {
            return ['success' => false, 'message' => 'Schema file not found'];
        }
    } catch (Exception $e) {
        return ['success' => false, 'message' => 'Database initialization failed: ' . $e->getMessage()];
    }
}
?>
