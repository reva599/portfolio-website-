// Blog/Updates functionality
const blogData = [
    {
        id: 1,
        title: "Starting My Journey at ApexPlanet Software",
        excerpt: "Reflecting on my first week and the exciting challenges ahead in my internship journey.",
        content: `
            <p>Today marks the beginning of an incredible journey at ApexPlanet Software Pvt. Ltd. As I step into this internship, I'm filled with excitement and anticipation for the learning opportunities ahead.</p>
            
            <h3>First Impressions</h3>
            <p>The team at ApexPlanet has been incredibly welcoming. The company culture emphasizes learning, growth, and innovation - exactly what I was hoping for in an internship experience.</p>
            
            <h3>What's Ahead</h3>
            <p>I'll be working through 5 comprehensive tasks that will take me from basic development environment setup to building secure, full-stack applications. Each task builds upon the previous one, creating a structured learning path.</p>
            
            <h3>Goals and Expectations</h3>
            <ul>
                <li>Master full-stack development fundamentals</li>
                <li>Learn industry best practices for security and performance</li>
                <li>Build a portfolio of real-world projects</li>
                <li>Develop professional development skills</li>
            </ul>
            
            <p>I'm excited to document this journey and share my learnings along the way!</p>
        `,
        date: "2024-01-15",
        readTime: 3,
        tags: ["internship", "getting-started", "goals"],
        featured: true
    },
    {
        id: 2,
        title: "Mastering Development Environment Setup",
        excerpt: "Key learnings from setting up a professional development environment and the tools that make a difference.",
        content: `
            <p>Task 1 might seem simple on the surface - just setting up a development environment. But I quickly learned that a well-configured environment is the foundation of productive development.</p>
            
            <h3>Tools and Configuration</h3>
            <p>Setting up the right tools and configurations made a huge difference in my productivity:</p>
            <ul>
                <li><strong>IDE Setup:</strong> Customizing VS Code with essential extensions</li>
                <li><strong>Git Configuration:</strong> Learning proper version control workflows</li>
                <li><strong>Development Tools:</strong> Setting up debugging and testing tools</li>
                <li><strong>Environment Variables:</strong> Managing configuration securely</li>
            </ul>
            
            <h3>Key Takeaways</h3>
            <p>The time invested in proper setup pays dividends throughout the development process. Having consistent formatting, linting, and debugging tools creates a smooth development experience.</p>
            
            <h3>Best Practices Learned</h3>
            <ul>
                <li>Use consistent code formatting across the team</li>
                <li>Set up automated linting and error checking</li>
                <li>Configure proper Git hooks for quality control</li>
                <li>Document environment setup for team consistency</li>
            </ul>
        `,
        date: "2024-01-22",
        readTime: 4,
        tags: ["development", "tools", "best-practices"],
        featured: false
    },
    {
        id: 3,
        title: "Building My First CRUD Application",
        excerpt: "Diving deep into full-stack development with my first complete CRUD application and the challenges I overcame.",
        content: `
            <p>Task 2 was where things got really exciting - building my first complete CRUD application from scratch. This was my introduction to full-stack development, and it was both challenging and rewarding.</p>
            
            <h3>The Challenge</h3>
            <p>Creating a full CRUD (Create, Read, Update, Delete) application required understanding both frontend and backend development, plus database design and integration.</p>
            
            <h3>Technical Stack</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
                <li><strong>Backend:</strong> PHP</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>Styling:</strong> Custom CSS with responsive design</li>
            </ul>
            
            <h3>Key Learning Moments</h3>
            <p>Several breakthrough moments helped solidify my understanding:</p>
            <ul>
                <li>Understanding the request-response cycle</li>
                <li>Learning proper database normalization</li>
                <li>Implementing form validation on both client and server side</li>
                <li>Creating responsive layouts that work on all devices</li>
            </ul>
            
            <h3>Challenges Overcome</h3>
            <p>The biggest challenge was understanding how all the pieces fit together. Initially, I struggled with connecting the frontend to the backend, but with guidance from my mentors, I learned to think about the application as a cohesive system.</p>
        `,
        date: "2024-02-05",
        readTime: 5,
        tags: ["crud", "full-stack", "php", "mysql"],
        featured: true
    },
    {
        id: 4,
        title: "Advanced Features: Search and Pagination",
        excerpt: "Enhancing user experience with dynamic search functionality and efficient pagination systems.",
        content: `
            <p>Task 3 took my CRUD application to the next level by adding search and pagination features. This taught me about performance optimization and user experience design.</p>
            
            <h3>Search Implementation</h3>
            <p>Implementing dynamic search required understanding both frontend interactivity and backend query optimization:</p>
            <ul>
                <li>Real-time search with AJAX</li>
                <li>Efficient database queries with proper indexing</li>
                <li>Debouncing to prevent excessive API calls</li>
                <li>Search result highlighting</li>
            </ul>
            
            <h3>Pagination Strategy</h3>
            <p>Pagination was crucial for handling large datasets efficiently:</p>
            <ul>
                <li>Server-side pagination for performance</li>
                <li>User-friendly navigation controls</li>
                <li>Maintaining search state across pages</li>
                <li>Loading states and error handling</li>
            </ul>
            
            <h3>Performance Considerations</h3>
            <p>This task taught me to think about performance from the beginning. Loading thousands of records at once isn't practical, so pagination and search help create a smooth user experience.</p>
        `,
        date: "2024-02-12",
        readTime: 4,
        tags: ["search", "pagination", "performance", "ux"],
        featured: false
    },
    {
        id: 5,
        title: "Security First: Protecting Web Applications",
        excerpt: "Learning essential security practices and implementing comprehensive protection against common vulnerabilities.",
        content: `
            <p>Task 4 opened my eyes to the critical importance of web application security. This wasn't just about adding features - it was about protecting users and data.</p>
            
            <h3>Security Vulnerabilities Addressed</h3>
            <ul>
                <li><strong>SQL Injection:</strong> Using prepared statements and parameterized queries</li>
                <li><strong>XSS (Cross-Site Scripting):</strong> Input sanitization and output encoding</li>
                <li><strong>CSRF:</strong> Implementing token-based protection</li>
                <li><strong>Authentication:</strong> Secure login and session management</li>
            </ul>
            
            <h3>Implementation Strategies</h3>
            <p>Security isn't an afterthought - it needs to be built into every layer:</p>
            <ul>
                <li>Input validation on both client and server side</li>
                <li>Proper error handling that doesn't leak information</li>
                <li>Secure password hashing and storage</li>
                <li>Session security and timeout management</li>
            </ul>
            
            <h3>Mindset Shift</h3>
            <p>This task changed how I think about development. Every feature now gets evaluated through a security lens: "How could this be exploited?" and "How can we prevent that?"</p>
        `,
        date: "2024-02-19",
        readTime: 6,
        tags: ["security", "sql-injection", "xss", "authentication"],
        featured: true
    }
];

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});

// Load and display blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = '';

    // Show featured posts first, then others
    const sortedPosts = [...blogData].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.date) - new Date(a.date);
    });

    sortedPosts.forEach((post, index) => {
        const postCard = createBlogCard(post, index);
        blogGrid.appendChild(postCard);
    });
}

// Create individual blog card
function createBlogCard(post, index) {
    const card = document.createElement('article');
    card.className = 'blog-card animate-element';
    card.style.animationDelay = `${index * 0.1}s`;

    const formattedDate = formatDate(post.date);
    const tagsHtml = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');

    card.innerHTML = `
        <div class="blog-card-header">
            ${post.featured ? '<span class="featured-badge">Featured</span>' : ''}
            <div class="blog-meta">
                <span class="blog-date">
                    <i class="fas fa-calendar"></i> ${formattedDate}
                </span>
                <span class="blog-read-time">
                    <i class="fas fa-clock"></i> ${post.readTime} min read
                </span>
            </div>
        </div>
        <div class="blog-card-content">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-tags">
                ${tagsHtml}
            </div>
        </div>
        <div class="blog-card-footer">
            <button class="blog-read-more" onclick="openBlogPost(${post.id})">
                Read More <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;

    return card;
}

// Open blog post in modal
function openBlogPost(postId) {
    const post = blogData.find(p => p.id === postId);
    if (!post) return;

    // Create modal if it doesn't exist
    let modal = document.getElementById('blog-modal');
    if (!modal) {
        modal = createBlogModal();
        document.body.appendChild(modal);
    }

    // Populate modal with post content
    const modalContent = modal.querySelector('.blog-modal-content');
    const formattedDate = formatDate(post.date);
    const tagsHtml = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');

    modalContent.innerHTML = `
        <div class="blog-modal-header">
            <button class="modal-close" onclick="closeBlogModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="blog-modal-body">
            <div class="blog-post-meta">
                <span class="blog-date">
                    <i class="fas fa-calendar"></i> ${formattedDate}
                </span>
                <span class="blog-read-time">
                    <i class="fas fa-clock"></i> ${post.readTime} min read
                </span>
                ${post.featured ? '<span class="featured-badge">Featured</span>' : ''}
            </div>
            <h1 class="blog-post-title">${post.title}</h1>
            <div class="blog-post-content">
                ${post.content}
            </div>
            <div class="blog-post-tags">
                <strong>Tags:</strong>
                ${tagsHtml}
            </div>
        </div>
    `;

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Create blog modal
function createBlogModal() {
    const modal = document.createElement('div');
    modal.id = 'blog-modal';
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal-overlay" onclick="closeBlogModal()"></div>
        <div class="blog-modal-content"></div>
    `;

    return modal;
}

// Close blog modal
function closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBlogModal();
    }
});

// Add blog-specific styles
const blogStyles = `
    .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--spacing-xl);
    }
    
    .blog-card {
        background-color: var(--bg-primary);
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-medium);
        transition: all var(--transition-normal);
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
    }
    
    .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-large);
    }
    
    .blog-card-header {
        padding: var(--spacing-lg);
        padding-bottom: var(--spacing-md);
        position: relative;
    }
    
    .featured-badge {
        position: absolute;
        top: var(--spacing-md);
        right: var(--spacing-md);
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
        color: white;
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--radius-md);
        font-size: var(--font-size-xs);
        font-weight: 600;
    }
    
    .blog-meta {
        display: flex;
        gap: var(--spacing-lg);
        color: var(--text-secondary);
        font-size: var(--font-size-sm);
    }
    
    .blog-date,
    .blog-read-time {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
    }
    
    .blog-card-content {
        padding: 0 var(--spacing-lg);
        flex: 1;
    }
    
    .blog-title {
        font-size: var(--font-size-xl);
        font-weight: 600;
        margin-bottom: var(--spacing-md);
        color: var(--text-primary);
        line-height: 1.3;
    }
    
    .blog-excerpt {
        color: var(--text-secondary);
        margin-bottom: var(--spacing-lg);
        line-height: 1.6;
    }
    
    .blog-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        margin-bottom: var(--spacing-lg);
    }
    
    .blog-tag {
        background-color: var(--bg-secondary);
        color: var(--text-secondary);
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--radius-sm);
        font-size: var(--font-size-xs);
        font-weight: 500;
        border: 1px solid var(--border-color);
    }
    
    .blog-card-footer {
        padding: var(--spacing-lg);
        padding-top: 0;
    }
    
    .blog-read-more {
        background: none;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        padding: var(--spacing-sm) var(--spacing-lg);
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: all var(--transition-fast);
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }
    
    .blog-read-more:hover {
        background-color: var(--primary-color);
        color: white;
    }
    
    /* Blog Modal Styles */
    .blog-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        align-items: center;
        justify-content: center;
    }
    
    .blog-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    
    .blog-modal-content {
        position: relative;
        background-color: var(--bg-primary);
        border-radius: var(--radius-xl);
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        margin: var(--spacing-lg);
        box-shadow: var(--shadow-large);
    }
    
    .blog-modal-header {
        position: sticky;
        top: 0;
        background-color: var(--bg-primary);
        padding: var(--spacing-lg);
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: flex-end;
        z-index: 1;
    }
    
    .blog-modal-body {
        padding: var(--spacing-xl);
    }
    
    .blog-post-meta {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-lg);
        align-items: center;
        margin-bottom: var(--spacing-lg);
        color: var(--text-secondary);
        font-size: var(--font-size-sm);
    }
    
    .blog-post-title {
        font-size: var(--font-size-3xl);
        font-weight: 700;
        margin-bottom: var(--spacing-xl);
        color: var(--text-primary);
        line-height: 1.2;
    }
    
    .blog-post-content {
        line-height: 1.7;
        margin-bottom: var(--spacing-xl);
    }
    
    .blog-post-content h3 {
        font-size: var(--font-size-xl);
        font-weight: 600;
        margin: var(--spacing-xl) 0 var(--spacing-lg) 0;
        color: var(--text-primary);
    }
    
    .blog-post-content p {
        margin-bottom: var(--spacing-lg);
        color: var(--text-secondary);
    }
    
    .blog-post-content ul,
    .blog-post-content ol {
        margin-bottom: var(--spacing-lg);
        padding-left: var(--spacing-xl);
    }
    
    .blog-post-content li {
        margin-bottom: var(--spacing-sm);
        color: var(--text-secondary);
    }
    
    .blog-post-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        align-items: center;
        padding-top: var(--spacing-lg);
        border-top: 1px solid var(--border-color);
    }
    
    .blog-post-tags strong {
        color: var(--text-primary);
        margin-right: var(--spacing-sm);
    }
    
    @media (max-width: 767px) {
        .blog-grid {
            grid-template-columns: 1fr;
        }
        
        .blog-modal-content {
            margin: var(--spacing-sm);
            max-height: 95vh;
        }
        
        .blog-modal-body {
            padding: var(--spacing-lg);
        }
        
        .blog-post-title {
            font-size: var(--font-size-2xl);
        }
        
        .blog-meta {
            flex-direction: column;
            gap: var(--spacing-sm);
            align-items: flex-start;
        }
    }
`;

// Inject blog styles
if (!document.getElementById('blog-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'blog-styles';
    styleSheet.textContent = blogStyles;
    document.head.appendChild(styleSheet);
}
