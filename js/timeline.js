// Timeline data and functionality
const timelineData = [
    {
        id: 1,
        title: "Development Environment Setup",
        description: "Configured comprehensive development environment with IDE, version control, and essential tools.",
        date: "Week 1",
        status: "completed",
        details: [
            "IDE configuration and customization",
            "Git repository setup and version control",
            "Development tools installation",
            "Environment variables configuration",
            "Code formatting and linting setup"
        ],
        icon: "fas fa-cog"
    },
    {
        id: 2,
        title: "Basic CRUD Application",
        description: "Built full-stack application with Create, Read, Update, Delete operations and database integration.",
        date: "Week 2-3",
        status: "completed",
        details: [
            "Database schema design and creation",
            "Frontend user interface development",
            "Backend API endpoints implementation",
            "Form validation and error handling",
            "Basic styling and responsive design"
        ],
        icon: "fas fa-database"
    },
    {
        id: 3,
        title: "Search & Pagination Features",
        description: "Enhanced application with advanced search functionality and efficient pagination system.",
        date: "Week 4",
        status: "completed",
        details: [
            "Dynamic search implementation",
            "Real-time filtering capabilities",
            "Pagination logic and UI components",
            "Performance optimization for large datasets",
            "AJAX integration for seamless user experience"
        ],
        icon: "fas fa-search"
    },
    {
        id: 4,
        title: "Security Enhancements",
        description: "Implemented comprehensive security measures to protect against common vulnerabilities.",
        date: "Week 5",
        status: "completed",
        details: [
            "Input validation and sanitization",
            "SQL injection prevention",
            "XSS protection implementation",
            "User authentication system",
            "Session management and security"
        ],
        icon: "fas fa-shield-alt"
    },
    {
        id: 5,
        title: "Final Integrated Project",
        description: "Culminated all components into a comprehensive, secure, and feature-rich web application.",
        date: "Week 6",
        status: "completed",
        details: [
            "Integration of all previous components",
            "Additional feature development",
            "Performance optimization and testing",
            "Code review and documentation",
            "Deployment preparation and final presentation"
        ],
        icon: "fas fa-rocket"
    }
];

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadTimeline();
    initTimelineAnimations();
});

// Load and display timeline
function loadTimeline() {
    const timelineContainer = document.getElementById('timeline');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';

    timelineData.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index);
        timelineContainer.appendChild(timelineItem);
    });
}

// Create individual timeline item
function createTimelineItem(item, index) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item animate-element';
    timelineItem.style.animationDelay = `${index * 0.2}s`;

    timelineItem.innerHTML = `
        <div class="timeline-marker">
            <i class="${item.icon}"></i>
        </div>
        <div class="timeline-content">
            <div class="timeline-header">
                <h3 class="timeline-title">${item.title}</h3>
                <span class="timeline-date">${item.date}</span>
            </div>
            <p class="timeline-description">${item.description}</p>
            <div class="timeline-details" id="details-${item.id}">
                <ul class="timeline-details-list">
                    ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
            <div class="timeline-actions">
                <button class="timeline-toggle" onclick="toggleTimelineDetails(${item.id})">
                    <span class="toggle-text">Show Details</span>
                    <i class="fas fa-chevron-down toggle-icon"></i>
                </button>
                <span class="timeline-status ${item.status}">
                    <i class="fas fa-check-circle"></i>
                    ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
            </div>
        </div>
    `;

    return timelineItem;
}

// Toggle timeline details
function toggleTimelineDetails(itemId) {
    const detailsElement = document.getElementById(`details-${itemId}`);
    const toggleButton = detailsElement.parentElement.querySelector('.timeline-toggle');
    const toggleText = toggleButton.querySelector('.toggle-text');
    const toggleIcon = toggleButton.querySelector('.toggle-icon');

    if (detailsElement.classList.contains('expanded')) {
        detailsElement.classList.remove('expanded');
        toggleText.textContent = 'Show Details';
        toggleIcon.style.transform = 'rotate(0deg)';
    } else {
        detailsElement.classList.add('expanded');
        toggleText.textContent = 'Hide Details';
        toggleIcon.style.transform = 'rotate(180deg)';
    }
}

// Initialize timeline animations
function initTimelineAnimations() {
    // Progress bar animation
    createProgressBar();
    
    // Scroll-triggered animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                updateProgressBar(entry.target);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Create progress bar for timeline
function createProgressBar() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    const progressBar = document.createElement('div');
    progressBar.className = 'timeline-progress';
    progressBar.innerHTML = '<div class="timeline-progress-fill"></div>';
    
    timeline.appendChild(progressBar);
}

// Update progress bar based on scroll
function updateProgressBar(currentItem) {
    const progressFill = document.querySelector('.timeline-progress-fill');
    if (!progressFill) return;

    const timelineItems = document.querySelectorAll('.timeline-item');
    const currentIndex = Array.from(timelineItems).indexOf(currentItem);
    const progress = ((currentIndex + 1) / timelineItems.length) * 100;
    
    progressFill.style.height = `${progress}%`;
}

// Add timeline-specific styles
const timelineStyles = `
    .timeline-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: var(--spacing-md);
        flex-wrap: wrap;
        gap: var(--spacing-sm);
    }
    
    .timeline-date {
        background-color: var(--primary-color);
        color: white;
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--radius-md);
        font-size: var(--font-size-xs);
        font-weight: 600;
        white-space: nowrap;
    }
    
    .timeline-details {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, margin 0.3s ease-out;
        margin: 0;
    }
    
    .timeline-details.expanded {
        max-height: 300px;
        margin: var(--spacing-lg) 0;
    }
    
    .timeline-details-list {
        list-style: none;
        padding: 0;
    }
    
    .timeline-details-list li {
        padding: var(--spacing-sm) 0;
        padding-left: var(--spacing-lg);
        position: relative;
        color: var(--text-secondary);
        font-size: var(--font-size-sm);
        line-height: 1.5;
    }
    
    .timeline-details-list li::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
    }
    
    .timeline-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: var(--spacing-lg);
        flex-wrap: wrap;
        gap: var(--spacing-md);
    }
    
    .timeline-toggle {
        background: none;
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: all var(--transition-fast);
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: var(--font-size-sm);
    }
    
    .timeline-toggle:hover {
        background-color: var(--bg-secondary);
        color: var(--primary-color);
        border-color: var(--primary-color);
    }
    
    .toggle-icon {
        transition: transform var(--transition-fast);
    }
    
    .timeline-status {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        font-size: var(--font-size-sm);
        font-weight: 500;
    }
    
    .timeline-status.completed {
        color: var(--primary-color);
    }
    
    .timeline-status.in-progress {
        color: var(--accent-color);
    }
    
    .timeline-marker {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50%;
        border: 4px solid var(--bg-primary);
        font-size: var(--font-size-sm);
        z-index: 2;
        box-shadow: var(--shadow-medium);
    }
    
    .timeline-progress {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: var(--border-color);
        transform: translateX(-50%);
        z-index: 1;
    }
    
    .timeline-progress-fill {
        width: 100%;
        height: 0%;
        background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
        transition: height 0.5s ease-out;
        border-radius: 2px;
    }
    
    @media (max-width: 1199px) {
        .timeline-progress {
            left: 30px;
        }
        
        .timeline-marker {
            width: 30px;
            height: 30px;
            font-size: var(--font-size-xs);
        }
    }
    
    @media (max-width: 767px) {
        .timeline-progress {
            left: 20px;
            width: 2px;
        }
        
        .timeline-marker {
            width: 24px;
            height: 24px;
            font-size: 10px;
        }
        
        .timeline-header {
            flex-direction: column;
            align-items: flex-start;
        }
        
        .timeline-actions {
            flex-direction: column;
            align-items: flex-start;
        }
        
        .timeline-details.expanded {
            max-height: 400px;
        }
    }
`;

// Inject timeline styles
if (!document.getElementById('timeline-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'timeline-styles';
    styleSheet.textContent = timelineStyles;
    document.head.appendChild(styleSheet);
}
