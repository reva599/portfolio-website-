<?php
/**
 * Admin Panel - Dashboard
 * Simple admin interface for managing portfolio content
 */

session_start();

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: login.php');
    exit;
}

// Include database configuration
require_once '../config/database.php';

// Get dashboard statistics
try {
    $pdo = new PDO($dsn, $username, $password, $options);
    
    // Count projects
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM projects");
    $projectCount = $stmt->fetch()['count'];
    
    // Count blog posts
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM blog_posts");
    $blogCount = $stmt->fetch()['count'];
    
    // Count contact submissions
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'new'");
    $newContactCount = $stmt->fetch()['count'];
    
    // Get recent contact submissions
    $stmt = $pdo->query("SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 5");
    $recentContacts = $stmt->fetchAll();
    
} catch (PDOException $e) {
    $error = "Database error: " . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Portfolio</title>
    <link rel="stylesheet" href="../../css/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <!-- Sidebar -->
        <nav class="admin-sidebar">
            <div class="admin-logo">
                <h2><i class="fas fa-user-shield"></i> Admin Panel</h2>
            </div>
            <ul class="admin-nav">
                <li><a href="index.php" class="active"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
                <li><a href="projects.php"><i class="fas fa-project-diagram"></i> Projects</a></li>
                <li><a href="timeline.php"><i class="fas fa-timeline"></i> Timeline</a></li>
                <li><a href="blog.php"><i class="fas fa-blog"></i> Blog Posts</a></li>
                <li><a href="contacts.php"><i class="fas fa-envelope"></i> Contact Messages</a></li>
                <li><a href="settings.php"><i class="fas fa-cog"></i> Settings</a></li>
                <li><a href="../../index.html" target="_blank"><i class="fas fa-external-link-alt"></i> View Site</a></li>
                <li><a href="logout.php"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
        </nav>

        <!-- Main Content -->
        <main class="admin-main">
            <header class="admin-header">
                <h1>Dashboard</h1>
                <div class="admin-user">
                    Welcome, <?php echo htmlspecialchars($_SESSION['admin_username']); ?>
                </div>
            </header>

            <?php if (isset($error)): ?>
                <div class="alert alert-error">
                    <?php echo htmlspecialchars($error); ?>
                </div>
            <?php endif; ?>

            <!-- Statistics Cards -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="stat-content">
                        <h3><?php echo $projectCount ?? 0; ?></h3>
                        <p>Projects</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-blog"></i>
                    </div>
                    <div class="stat-content">
                        <h3><?php echo $blogCount ?? 0; ?></h3>
                        <p>Blog Posts</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="stat-content">
                        <h3><?php echo $newContactCount ?? 0; ?></h3>
                        <p>New Messages</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div class="stat-content">
                        <h3>0</h3>
                        <p>Site Views</p>
                    </div>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="admin-section">
                <h2>Recent Contact Messages</h2>
                <div class="table-container">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (!empty($recentContacts)): ?>
                                <?php foreach ($recentContacts as $contact): ?>
                                    <tr>
                                        <td><?php echo htmlspecialchars($contact['name']); ?></td>
                                        <td><?php echo htmlspecialchars($contact['email']); ?></td>
                                        <td><?php echo htmlspecialchars(substr($contact['subject'], 0, 50)); ?>...</td>
                                        <td><?php echo date('M j, Y', strtotime($contact['created_at'])); ?></td>
                                        <td>
                                            <span class="status-badge status-<?php echo $contact['status']; ?>">
                                                <?php echo ucfirst($contact['status']); ?>
                                            </span>
                                        </td>
                                        <td>
                                            <a href="contacts.php?view=<?php echo $contact['id']; ?>" class="btn btn-sm">View</a>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            <?php else: ?>
                                <tr>
                                    <td colspan="6" class="text-center">No contact messages yet</td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="admin-section">
                <h2>Quick Actions</h2>
                <div class="quick-actions">
                    <a href="projects.php?action=add" class="action-card">
                        <i class="fas fa-plus"></i>
                        <h3>Add Project</h3>
                        <p>Create a new project entry</p>
                    </a>
                    
                    <a href="blog.php?action=add" class="action-card">
                        <i class="fas fa-pen"></i>
                        <h3>Write Blog Post</h3>
                        <p>Create a new blog post</p>
                    </a>
                    
                    <a href="timeline.php?action=add" class="action-card">
                        <i class="fas fa-clock"></i>
                        <h3>Add Timeline Item</h3>
                        <p>Add a new timeline entry</p>
                    </a>
                    
                    <a href="settings.php" class="action-card">
                        <i class="fas fa-cog"></i>
                        <h3>Site Settings</h3>
                        <p>Update site configuration</p>
                    </a>
                </div>
            </div>
        </main>
    </div>

    <script src="../../js/admin.js"></script>
</body>
</html>
