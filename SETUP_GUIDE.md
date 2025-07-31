# Portfolio Website Setup Guide

This guide will help you set up and customize your personal portfolio website showcasing your ApexPlanet Software internship projects.

## 📋 Prerequisites

### Required Software
- **Web Server**: XAMPP, WAMP, LAMP, or similar (for PHP features)
- **Web Browser**: Chrome, Firefox, Safari, or Edge
- **Text Editor**: VS Code, Sublime Text, or any code editor

### Optional (for advanced features)
- **MySQL Database**: For admin panel and dynamic content
- **Git**: For version control
- **Image Editor**: For creating custom project thumbnails

## 🚀 Quick Start (Static Version)

If you just want to get the website running quickly without database features:

1. **Download/Clone the files** to your computer
2. **Open `create_placeholders.html`** in your browser
3. **Download the placeholder images** and save them in `assets/images/`
4. **Edit personal information** in `index.html`:
   - Update your name in the hero section
   - Change email addresses and social links
   - Update the profile photo path
5. **Open `index.html`** in your browser to view the website

## 🔧 Full Setup (With Database & Admin Panel)

### Step 1: Install Web Server

#### Option A: XAMPP (Recommended for beginners)
1. Download XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/)
2. Install XAMPP and start Apache and MySQL services
3. Place your portfolio files in `C:\xampp\htdocs\portfolio\` (Windows) or `/opt/lampp/htdocs/portfolio/` (Linux)

#### Option B: Other Web Servers
- **WAMP** (Windows): [http://www.wampserver.com/](http://www.wampserver.com/)
- **MAMP** (Mac): [https://www.mamp.info/](https://www.mamp.info/)
- **Local by Flywheel**: [https://localwp.com/](https://localwp.com/)

### Step 2: Database Setup

1. **Access phpMyAdmin**:
   - Open your browser and go to `http://localhost/phpmyadmin`
   - Login with username: `root`, password: (usually empty)

2. **Create Database**:
   - Click "New" to create a new database
   - Name it `portfolio_db`
   - Set collation to `utf8mb4_unicode_ci`

3. **Import Schema**:
   - Select your `portfolio_db` database
   - Click "Import" tab
   - Choose the file `database/schema.sql`
   - Click "Go" to import

### Step 3: Configure Database Connection

Edit `php/config/database.php` with your database settings:

```php
$host = 'localhost';
$dbname = 'portfolio_db';
$username = 'root';        // Your MySQL username
$password = '';            // Your MySQL password
```

### Step 4: Test the Setup

1. **Visit your website**: `http://localhost/portfolio/`
2. **Test contact form**: Fill out and submit the contact form
3. **Access admin panel**: `http://localhost/portfolio/php/admin/`
   - Username: `admin`
   - Password: `admin123`
   - **⚠️ Change these credentials immediately after first login!**

## 🎨 Customization Guide

### Personal Information

#### 1. Update Basic Info in `index.html`
```html
<!-- Hero Section -->
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>
<h2>Software Development Intern</h2>

<!-- Contact Section -->
<p>your.email@example.com</p>

<!-- Footer -->
<a href="mailto:your.email@example.com">
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
```

#### 2. Update Project Links in `js/projects.js`
```javascript
demoLink: "https://youtube.com/watch?v=your-actual-demo",
codeLink: "https://github.com/yourusername/your-actual-repo"
```

### Images and Media

#### 1. Profile Photo
- Add your photo as `assets/images/profile.jpg`
- Recommended size: 400x400 pixels
- Format: JPG, PNG, or WebP

#### 2. Project Thumbnails
Add project screenshots as:
- `assets/images/task1-thumb.jpg`
- `assets/images/task2-thumb.jpg`
- `assets/images/task3-thumb.jpg`
- `assets/images/task4-thumb.jpg`
- `assets/images/task5-thumb.jpg`

Recommended size: 350x200 pixels

#### 3. Demo Videos
- Upload demo videos to YouTube or Vimeo
- Update the `demoLink` URLs in `js/projects.js`
- Or place video files in `assets/videos/` and link directly

### Styling and Colors

#### 1. Change Theme Colors in `css/style.css`
```css
:root {
    --primary-color: #2563eb;    /* Main blue color */
    --accent-color: #f59e0b;     /* Orange accent */
    --secondary-color: #64748b;  /* Gray color */
}
```

#### 2. Custom Fonts
Update the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Content Updates

#### 1. Project Descriptions
Edit the `projectsData` array in `js/projects.js` to match your actual projects.

#### 2. Timeline Content
Update the `timelineData` array in `js/timeline.js` with your internship timeline.

#### 3. Blog Posts
Modify the `blogData` array in `js/blog.js` with your learning reflections.

## 🔒 Security Considerations

### 1. Change Default Admin Credentials
```sql
UPDATE admin_users 
SET password_hash = PASSWORD('your_new_password') 
WHERE username = 'admin';
```

### 2. Update Contact Form Email
Edit `php/contact.php`:
```php
$config = [
    'to_email' => 'your.actual.email@example.com',
    // ... other settings
];
```

### 3. Secure File Permissions
- Set folder permissions to 755
- Set file permissions to 644
- Restrict access to sensitive files

## 🌐 Deployment Options

### Option 1: Static Hosting (GitHub Pages, Netlify, Vercel)
1. Remove PHP files if not needed
2. Update any absolute URLs to relative URLs
3. Push to your Git repository
4. Enable GitHub Pages or deploy to Netlify/Vercel

### Option 2: Web Hosting with PHP Support
1. Choose a hosting provider (Hostinger, Bluehost, SiteGround, etc.)
2. Upload files via FTP or hosting panel
3. Create MySQL database on hosting panel
4. Import `database/schema.sql`
5. Update database credentials in `php/config/database.php`

### Option 3: VPS/Cloud Server
1. Set up LAMP/LEMP stack
2. Configure virtual host
3. Upload files and set permissions
4. Configure SSL certificate

## 🐛 Troubleshooting

### Common Issues

#### 1. "Database connection failed"
- Check MySQL service is running
- Verify database credentials in `php/config/database.php`
- Ensure database `portfolio_db` exists

#### 2. "Contact form not working"
- Check PHP is enabled on your server
- Verify email configuration in `php/contact.php`
- Check server error logs

#### 3. "Admin panel not accessible"
- Ensure database tables are created
- Check if admin user exists in database
- Verify session configuration

#### 4. "Images not loading"
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify file permissions

### Getting Help

1. **Check browser console** for JavaScript errors
2. **Check server error logs** for PHP errors
3. **Verify file permissions** and folder structure
4. **Test database connection** using `php/config/database.php`

## 📚 Additional Resources

### Learning Materials
- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript**: [JavaScript.info](https://javascript.info/)
- **PHP**: [PHP.net](https://www.php.net/manual/)
- **MySQL**: [MySQL Documentation](https://dev.mysql.com/doc/)

### Tools and Extensions
- **VS Code Extensions**: Live Server, PHP Intelephense, Auto Rename Tag
- **Browser Tools**: Chrome DevTools, Firefox Developer Tools
- **Image Optimization**: TinyPNG, ImageOptim
- **Code Formatting**: Prettier, PHP CS Fixer

## 🎯 Next Steps

1. **Customize the content** with your actual project information
2. **Add your real project demos** and code repositories
3. **Write your learning reflections** in the blog section
4. **Test thoroughly** across different devices and browsers
5. **Deploy to a live server** and share with potential employers
6. **Keep updating** as you complete more projects

## 📞 Support

If you encounter any issues during setup:

1. Check this guide first
2. Review the troubleshooting section
3. Check the project's README.md file
4. Look for solutions in online developer communities

---

**Good luck with your portfolio! 🚀**

Remember to keep your portfolio updated as you learn new skills and complete new projects. This website will serve as a great showcase of your development journey at ApexPlanet Software and beyond.
