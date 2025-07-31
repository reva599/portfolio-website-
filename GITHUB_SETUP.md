# 🚀 GitHub Repository Setup Guide

This guide will help you create a GitHub repository for your portfolio website and deploy it to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account**: Create one at [github.com](https://github.com) if you don't have one
2. **Git Installed**: Download from [git-scm.com](https://git-scm.com/)
3. **Your Portfolio Files**: All files should be in your project folder

## 🔧 Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Recommended for beginners)

1. **Go to GitHub**: Visit [github.com](https://github.com) and sign in
2. **Create New Repository**:
   - Click the "+" icon in the top right
   - Select "New repository"
3. **Repository Settings**:
   - **Repository name**: `portfolio-website` or `your-name-portfolio`
   - **Description**: "Personal portfolio showcasing ApexPlanet Software internship projects"
   - **Visibility**: Public (so it can be deployed to GitHub Pages)
   - **Initialize**: ✅ Add a README file
   - **Add .gitignore**: Choose "None" (we already have one)
   - **Choose a license**: MIT License
4. **Click "Create repository"**

### Option B: Using Git Command Line

```bash
# Navigate to your project folder
cd "C:\Users\jvrev\OneDrive\Desktop\portfilo"

# Initialize Git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Portfolio website with ApexPlanet internship projects"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📤 Step 2: Upload Your Files

### If you created repository on GitHub website:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Copy your portfolio files** into the cloned folder

3. **Add and commit files**:
   ```bash
   git add .
   git commit -m "Add portfolio website files"
   git push origin main
   ```

### If you used command line method:
Your files are already uploaded! ✅

## 🌐 Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll to "Pages"** in the left sidebar
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select "main" or "master"
6. **Folder**: Select "/ (root)"
7. **Click "Save"**

## 🎯 Step 4: Get Your Live Website URL

After enabling GitHub Pages:
1. **Wait 5-10 minutes** for deployment
2. **Your website URL** will be: `https://YOUR_USERNAME.github.io/portfolio-website`
3. **Check deployment status** in the "Actions" tab

## 🔄 Step 5: Update Repository Links

Update the placeholder links in your README.md:

```markdown
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://YOUR_USERNAME.github.io/portfolio-website)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/YOUR_USERNAME/portfolio-website)
```

## 📝 Step 6: Customize Repository

### Update Repository Description
1. Go to your repository main page
2. Click the ⚙️ gear icon next to "About"
3. Add description: "Personal portfolio showcasing ApexPlanet Software internship projects"
4. Add website URL: `https://YOUR_USERNAME.github.io/portfolio-website`
5. Add topics: `portfolio`, `internship`, `web-development`, `html`, `css`, `javascript`, `php`

### Add Repository Topics
Add these topics to help others find your project:
- `portfolio`
- `internship`
- `web-development`
- `html-css-javascript`
- `php`
- `mysql`
- `responsive-design`
- `apexplanet-software`

## 🔧 Step 7: Future Updates

To update your portfolio:

```bash
# Make changes to your files
# Then commit and push:

git add .
git commit -m "Update: Description of your changes"
git push origin main
```

Your website will automatically update within a few minutes!

## 📊 Repository Structure

Your GitHub repository will have this structure:

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment
├── assets/
│   ├── images/
│   └── videos/
├── css/
├── js/
├── php/
├── database/
├── .gitignore                  # Git ignore file
├── LICENSE                     # MIT License
├── README.md                   # Project documentation
├── SETUP_GUIDE.md             # Setup instructions
├── TESTING_CHECKLIST.md       # Testing guide
├── GITHUB_SETUP.md            # This file
└── index.html                 # Main website file
```

## 🎨 Suggested Repository Names

Choose a professional repository name:
- `portfolio-website`
- `jillella-portfolio`
- `revanth-portfolio`
- `apexplanet-internship-portfolio`
- `full-stack-portfolio`

## 🔒 Security Considerations

### For Public Repository:
- ✅ Static files (HTML, CSS, JS) are safe to share
- ⚠️ **Remove or modify** `php/config/database.php` with dummy credentials
- ⚠️ **Don't include** real database passwords
- ✅ The `.gitignore` file already excludes sensitive files

### For Private Repository:
- You can include all files
- GitHub Pages works with private repos (with GitHub Pro)

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
- ✅ Free hosting
- ✅ Custom domain support
- ✅ HTTPS included
- ❌ No PHP support (static files only)

### Option 2: Netlify (Free tier)
- ✅ Free hosting
- ✅ Form handling
- ✅ Custom domain
- ❌ No PHP support

### Option 3: Vercel (Free tier)
- ✅ Free hosting
- ✅ Fast deployment
- ✅ Custom domain
- ❌ No PHP support

### Option 4: Traditional Web Hosting
- ✅ Full PHP/MySQL support
- ✅ All features work
- ❌ Usually costs money

## 📞 Need Help?

If you encounter issues:

1. **Check GitHub Status**: [githubstatus.com](https://githubstatus.com)
2. **GitHub Docs**: [docs.github.com](https://docs.github.com)
3. **Git Documentation**: [git-scm.com/doc](https://git-scm.com/doc)

## ✅ Checklist

- [ ] GitHub account created
- [ ] Repository created
- [ ] Files uploaded
- [ ] GitHub Pages enabled
- [ ] Website is live
- [ ] Repository description updated
- [ ] Topics added
- [ ] README links updated
- [ ] License added

## 🎉 Congratulations!

Once completed, you'll have:
- ✅ **Professional GitHub repository**
- ✅ **Live portfolio website**
- ✅ **Automatic deployments**
- ✅ **Professional online presence**

Your portfolio will be accessible at:
**`https://YOUR_USERNAME.github.io/portfolio-website`**

Share this link with potential employers to showcase your ApexPlanet Software internship projects! 🚀
