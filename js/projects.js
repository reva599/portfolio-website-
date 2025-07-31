// Projects data and functionality
const projectsData = [
    {
        id: 1,
        title: "Task 1: Setting Up Development Environment",
        description: "Established a comprehensive development environment including IDE configuration, version control setup, and essential development tools. This foundational task prepared the workspace for all subsequent development activities.",
        thumbnail: "assets/images/task1-thumb.jpg",
        technologies: ["Git", "IDE Setup", "Development Tools", "Environment Configuration"],
        demoLink: "https://youtube.com/watch?v=your-task1-demo",
        codeLink: "https://github.com/yourusername/task1-dev-environment",
        details: "Configured development environment with proper tooling, version control, and best practices for efficient development workflow.",
        completionDate: "Week 1",
        status: "Completed"
    },
    {
        id: 2,
        title: "Task 2: Basic CRUD Application",
        description: "Developed a full-stack CRUD (Create, Read, Update, Delete) application with user interface and database integration. Implemented core functionality for data management and user interactions.",
        thumbnail: "assets/images/task2-thumb.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        demoLink: "https://youtube.com/watch?v=your-task2-demo",
        codeLink: "https://github.com/yourusername/task2-crud-app",
        details: "Built a complete CRUD application with responsive design, form validation, and database operations for managing user data.",
        completionDate: "Week 2-3",
        status: "Completed"
    },
    {
        id: 3,
        title: "Task 3: Search and Pagination Features",
        description: "Enhanced the CRUD application with advanced search functionality and pagination system. Implemented efficient data filtering and navigation for improved user experience.",
        thumbnail: "assets/images/task3-thumb.jpg",
        technologies: ["JavaScript", "PHP", "MySQL", "AJAX", "Pagination"],
        demoLink: "https://youtube.com/watch?v=your-task3-demo",
        codeLink: "https://github.com/yourusername/task3-search-pagination",
        details: "Added dynamic search capabilities with real-time filtering and implemented pagination for handling large datasets efficiently.",
        completionDate: "Week 4",
        status: "Completed"
    },
    {
        id: 4,
        title: "Task 4: Security Enhancements",
        description: "Implemented comprehensive security measures including input validation, SQL injection prevention, XSS protection, and user authentication systems to secure the application.",
        thumbnail: "assets/images/task4-thumb.jpg",
        technologies: ["PHP Security", "Input Validation", "Authentication", "SQL Injection Prevention"],
        demoLink: "https://youtube.com/watch?v=your-task4-demo",
        codeLink: "https://github.com/yourusername/task4-security",
        details: "Secured the application with proper input sanitization, prepared statements, session management, and authentication mechanisms.",
        completionDate: "Week 5",
        status: "Completed"
    },
    {
        id: 5,
        title: "Task 5: Final Integrated Project",
        description: "Culminated all previous tasks into a comprehensive, secure, and feature-rich web application. Integrated all components with additional features and optimizations.",
        thumbnail: "assets/images/task5-thumb.jpg",
        technologies: ["Full Stack", "Integration", "Optimization", "Testing", "Deployment"],
        demoLink: "https://youtube.com/watch?v=your-task5-demo",
        codeLink: "https://github.com/yourusername/task5-final-project",
        details: "Final integrated project combining all learned concepts with additional features, performance optimizations, and comprehensive testing.",
        completionDate: "Week 6",
        status: "Completed"
    }
];

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

// Load and display projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

// Create individual project card
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card animate-element';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="project-thumbnail">
            <img src="${project.thumbnail}" alt="${project.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'project-placeholder\\'>Task ${project.id}</div>'">
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-meta">
                <span class="completion-date">
                    <i class="fas fa-calendar"></i> ${project.completionDate}
                </span>
                <span class="status ${project.status.toLowerCase()}">
                    <i class="fas fa-check-circle"></i> ${project.status}
                </span>
            </div>
            <div class="project-links">
                <a href="${project.demoLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-play"></i> Demo
                </a>
                <a href="${project.codeLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> Code
                </a>
                <button class="project-link" onclick="showProjectDetails(${project.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        </div>
    `;

    return card;
}

// Show project details in modal
function showProjectDetails(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    // Create modal if it doesn't exist
    let modal = document.getElementById('project-modal');
    if (!modal) {
        modal = createProjectModal();
        document.body.appendChild(modal);
    }

    // Populate modal with project details
    const modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <button class="modal-close" onclick="closeProjectModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-body">
            <div class="project-detail-image">
                <img src="${project.thumbnail}" alt="${project.title}" onerror="this.style.display='none'">
            </div>
            <div class="project-detail-info">
                <p class="project-detail-description">${project.details}</p>
                <div class="project-detail-meta">
                    <div class="meta-item">
                        <strong>Completion:</strong> ${project.completionDate}
                    </div>
                    <div class="meta-item">
                        <strong>Status:</strong> ${project.status}
                    </div>
                    <div class="meta-item">
                        <strong>Technologies:</strong>
                        <div class="tech-list">
                            ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="project-detail-links">
                    <a href="${project.demoLink}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-play"></i> Watch Demo
                    </a>
                    <a href="${project.codeLink}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>
        </div>
    `;

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Create project modal
function createProjectModal() {
    const modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeProjectModal()"></div>
        <div class="modal-content"></div>
    `;

    // Add modal styles
    const modalStyles = `
        .modal {
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
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }
        
        .modal-content {
            position: relative;
            background-color: var(--bg-primary);
            border-radius: var(--radius-xl);
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            margin: var(--spacing-lg);
            box-shadow: var(--shadow-large);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--spacing-xl);
            border-bottom: 1px solid var(--border-color);
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: var(--font-size-xl);
            color: var(--text-secondary);
            cursor: pointer;
            padding: var(--spacing-sm);
            border-radius: var(--radius-md);
            transition: all var(--transition-fast);
        }
        
        .modal-close:hover {
            background-color: var(--bg-secondary);
            color: var(--text-primary);
        }
        
        .modal-body {
            padding: var(--spacing-xl);
        }
        
        .project-detail-image img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--radius-lg);
            margin-bottom: var(--spacing-lg);
        }
        
        .project-detail-description {
            font-size: var(--font-size-lg);
            line-height: 1.7;
            margin-bottom: var(--spacing-xl);
            color: var(--text-secondary);
        }
        
        .project-detail-meta {
            margin-bottom: var(--spacing-xl);
        }
        
        .meta-item {
            margin-bottom: var(--spacing-lg);
        }
        
        .meta-item strong {
            color: var(--text-primary);
            display: block;
            margin-bottom: var(--spacing-sm);
        }
        
        .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-sm);
            margin-top: var(--spacing-sm);
        }
        
        .project-detail-links {
            display: flex;
            gap: var(--spacing-lg);
            flex-wrap: wrap;
        }
        
        @media (max-width: 767px) {
            .modal-content {
                margin: var(--spacing-sm);
                max-height: 95vh;
            }
            
            .modal-header,
            .modal-body {
                padding: var(--spacing-lg);
            }
            
            .project-detail-links {
                flex-direction: column;
            }
        }
    `;

    if (!document.getElementById('modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }

    return modal;
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// Add additional styles for project cards
const projectStyles = `
    .project-technologies {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        margin: var(--spacing-lg) 0;
    }
    
    .project-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: var(--spacing-lg) 0;
        font-size: var(--font-size-sm);
        color: var(--text-secondary);
    }
    
    .completion-date,
    .status {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
    }
    
    .status.completed {
        color: var(--primary-color);
    }
    
    .project-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: var(--font-size-3xl);
        font-weight: 700;
        color: white;
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    }
`;

// Inject project styles
if (!document.getElementById('project-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'project-styles';
    styleSheet.textContent = projectStyles;
    document.head.appendChild(styleSheet);
}
