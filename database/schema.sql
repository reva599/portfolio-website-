-- Portfolio Database Schema
-- This file contains the database structure for the portfolio website
-- Run this script to create the necessary tables for the admin panel

-- Create database (uncomment if needed)
-- CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE portfolio_db;

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    details TEXT,
    thumbnail VARCHAR(255),
    technologies JSON,
    demo_link VARCHAR(500),
    code_link VARCHAR(500),
    completion_date VARCHAR(50),
    status ENUM('completed', 'in_progress', 'planned') DEFAULT 'completed',
    display_order INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Timeline items table
CREATE TABLE IF NOT EXISTS timeline_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    details JSON,
    date_label VARCHAR(50) NOT NULL,
    status ENUM('completed', 'in_progress', 'planned') DEFAULT 'completed',
    icon VARCHAR(100) DEFAULT 'fas fa-circle',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image VARCHAR(255),
    status ENUM('published', 'draft', 'archived') DEFAULT 'draft',
    tags JSON,
    reading_time INT DEFAULT 0,
    views INT DEFAULT 0,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Admin users table (for admin panel)
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    role ENUM('admin', 'editor') DEFAULT 'editor',
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Site settings table
CREATE TABLE IF NOT EXISTS site_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type ENUM('text', 'textarea', 'json', 'boolean', 'number') DEFAULT 'text',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default projects data
INSERT INTO projects (title, description, details, technologies, demo_link, code_link, completion_date, status, display_order) VALUES
('Task 1: Setting Up Development Environment', 
 'Established a comprehensive development environment including IDE configuration, version control setup, and essential development tools.',
 'Configured development environment with proper tooling, version control, and best practices for efficient development workflow.',
 '["Git", "IDE Setup", "Development Tools", "Environment Configuration"]',
 'https://youtube.com/watch?v=your-task1-demo',
 'https://github.com/yourusername/task1-dev-environment',
 'Week 1',
 'completed',
 1),

('Task 2: Basic CRUD Application',
 'Developed a full-stack CRUD (Create, Read, Update, Delete) application with user interface and database integration.',
 'Built a complete CRUD application with responsive design, form validation, and database operations for managing user data.',
 '["HTML", "CSS", "JavaScript", "PHP", "MySQL"]',
 'https://youtube.com/watch?v=your-task2-demo',
 'https://github.com/yourusername/task2-crud-app',
 'Week 2-3',
 'completed',
 2),

('Task 3: Search and Pagination Features',
 'Enhanced the CRUD application with advanced search functionality and pagination system.',
 'Added dynamic search capabilities with real-time filtering and implemented pagination for handling large datasets efficiently.',
 '["JavaScript", "PHP", "MySQL", "AJAX", "Pagination"]',
 'https://youtube.com/watch?v=your-task3-demo',
 'https://github.com/yourusername/task3-search-pagination',
 'Week 4',
 'completed',
 3),

('Task 4: Security Enhancements',
 'Implemented comprehensive security measures including input validation, SQL injection prevention, XSS protection, and user authentication systems.',
 'Secured the application with proper input sanitization, prepared statements, session management, and authentication mechanisms.',
 '["PHP Security", "Input Validation", "Authentication", "SQL Injection Prevention"]',
 'https://youtube.com/watch?v=your-task4-demo',
 'https://github.com/yourusername/task4-security',
 'Week 5',
 'completed',
 4),

('Task 5: Final Integrated Project',
 'Culminated all previous tasks into a comprehensive, secure, and feature-rich web application.',
 'Final integrated project combining all learned concepts with additional features, performance optimizations, and comprehensive testing.',
 '["Full Stack", "Integration", "Optimization", "Testing", "Deployment"]',
 'https://youtube.com/watch?v=your-task5-demo',
 'https://github.com/yourusername/task5-final-project',
 'Week 6',
 'completed',
 5);

-- Insert default timeline data
INSERT INTO timeline_items (title, description, details, date_label, status, icon, display_order) VALUES
('Development Environment Setup',
 'Configured comprehensive development environment with IDE, version control, and essential tools.',
 '["IDE configuration and customization", "Git repository setup and version control", "Development tools installation", "Environment variables configuration", "Code formatting and linting setup"]',
 'Week 1',
 'completed',
 'fas fa-cog',
 1),

('Basic CRUD Application',
 'Built full-stack application with Create, Read, Update, Delete operations and database integration.',
 '["Database schema design and creation", "Frontend user interface development", "Backend API endpoints implementation", "Form validation and error handling", "Basic styling and responsive design"]',
 'Week 2-3',
 'completed',
 'fas fa-database',
 2),

('Search & Pagination Features',
 'Enhanced application with advanced search functionality and efficient pagination system.',
 '["Dynamic search implementation", "Real-time filtering capabilities", "Pagination logic and UI components", "Performance optimization for large datasets", "AJAX integration for seamless user experience"]',
 'Week 4',
 'completed',
 'fas fa-search',
 3),

('Security Enhancements',
 'Implemented comprehensive security measures to protect against common vulnerabilities.',
 '["Input validation and sanitization", "SQL injection prevention", "XSS protection implementation", "User authentication system", "Session management and security"]',
 'Week 5',
 'completed',
 'fas fa-shield-alt',
 4),

('Final Integrated Project',
 'Culminated all components into a comprehensive, secure, and feature-rich web application.',
 '["Integration of all previous components", "Additional feature development", "Performance optimization and testing", "Code review and documentation", "Deployment preparation and final presentation"]',
 'Week 6',
 'completed',
 'fas fa-rocket',
 5);

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, setting_type, description) VALUES
('site_title', 'Portfolio - ApexPlanet Internship Projects', 'text', 'Main site title'),
('site_description', 'Showcasing internship projects completed at ApexPlanet Software Pvt. Ltd.', 'textarea', 'Site description for SEO'),
('owner_name', 'Your Name', 'text', 'Portfolio owner name'),
('owner_email', 'your.email@example.com', 'text', 'Contact email address'),
('linkedin_url', 'https://linkedin.com/in/yourprofile', 'text', 'LinkedIn profile URL'),
('github_url', 'https://github.com/yourusername', 'text', 'GitHub profile URL'),
('company_name', 'ApexPlanet Software Pvt. Ltd.', 'text', 'Internship company name'),
('internship_duration', '6 Weeks', 'text', 'Duration of internship'),
('enable_blog', 'true', 'boolean', 'Enable/disable blog section'),
('enable_contact_form', 'true', 'boolean', 'Enable/disable contact form'),
('google_analytics_id', '', 'text', 'Google Analytics tracking ID'),
('theme_color', '#2563eb', 'text', 'Primary theme color');

-- Create indexes for better performance
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_order ON projects(display_order);
CREATE INDEX idx_timeline_status ON timeline_items(status);
CREATE INDEX idx_timeline_order ON timeline_items(display_order);
CREATE INDEX idx_blog_status ON blog_posts(status);
CREATE INDEX idx_blog_published ON blog_posts(published_at);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_created ON contact_submissions(created_at);

-- Create a default admin user (password: admin123 - CHANGE THIS!)
-- Password hash for 'admin123' using PHP password_hash()
INSERT INTO admin_users (username, email, password_hash, full_name, role) VALUES
('admin', 'admin@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrator', 'admin');

-- Note: Remember to change the default admin password after first login!
