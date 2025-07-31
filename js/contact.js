// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

// Initialize contact form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    // Add real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });

    // Handle form submission
    contactForm.addEventListener('submit', handleFormSubmission);
}

// Handle form submission
async function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate all fields
    if (!validateForm(form)) {
        showNotification('Please fix the errors before submitting.', 'error');
        return;
    }
    
    // Show loading state
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual endpoint)
        await submitContactForm(formData);
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        clearAllErrors(form);
        
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Failed to send message. Please try again later.', 'error');
    } finally {
        // Restore button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
}

// Submit form to PHP backend
async function submitContactForm(formData) {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    const response = await fetch('php/contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
    }

    return await response.json();
}

// Validate entire form
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous errors
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = `${getFieldLabel(fieldName)} is required.`;
        isValid = false;
    }
    
    // Email validation
    else if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address.';
            isValid = false;
        }
    }
    
    // Name validation
    else if (fieldName === 'name' && value) {
        if (value.length < 2) {
            errorMessage = 'Name must be at least 2 characters long.';
            isValid = false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
            errorMessage = 'Name can only contain letters, spaces, hyphens, and apostrophes.';
            isValid = false;
        }
    }
    
    // Subject validation
    else if (fieldName === 'subject' && value) {
        if (value.length < 3) {
            errorMessage = 'Subject must be at least 3 characters long.';
            isValid = false;
        }
    }
    
    // Message validation
    else if (fieldName === 'message' && value) {
        if (value.length < 10) {
            errorMessage = 'Message must be at least 10 characters long.';
            isValid = false;
        } else if (value.length > 1000) {
            errorMessage = 'Message must be less than 1000 characters.';
            isValid = false;
        }
    }
    
    // Show error if validation failed
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    
    // Remove existing error
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error class
    field.classList.add('error');
    
    // Create and add error message
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    formGroup.appendChild(errorElement);
}

// Clear field error
function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.field-error');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.classList.remove('error');
}

// Clear all form errors
function clearAllErrors(form) {
    const errorElements = form.querySelectorAll('.field-error');
    const errorFields = form.querySelectorAll('.error');
    
    errorElements.forEach(error => error.remove());
    errorFields.forEach(field => field.classList.remove('error'));
}

// Get field label for error messages
function getFieldLabel(fieldName) {
    const labels = {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message'
    };
    
    return labels[fieldName] || fieldName;
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

// Get notification icon based on type
function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    return icons[type] || icons.info;
}

// Add contact form styles
const contactStyles = `
    .form-group {
        position: relative;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .field-error {
        display: block;
        color: #ef4444;
        font-size: var(--font-size-sm);
        margin-top: var(--spacing-xs);
        font-weight: 500;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
        box-shadow: var(--shadow-large);
        z-index: 1000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform var(--transition-normal);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-md);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left: 4px solid #10b981;
    }
    
    .notification-error {
        border-left: 4px solid #ef4444;
    }
    
    .notification-warning {
        border-left: 4px solid #f59e0b;
    }
    
    .notification-info {
        border-left: 4px solid var(--primary-color);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        flex: 1;
    }
    
    .notification-content i {
        font-size: var(--font-size-lg);
    }
    
    .notification-success .notification-content i {
        color: #10b981;
    }
    
    .notification-error .notification-content i {
        color: #ef4444;
    }
    
    .notification-warning .notification-content i {
        color: #f59e0b;
    }
    
    .notification-info .notification-content i {
        color: var(--primary-color);
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: var(--spacing-xs);
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
    }
    
    .notification-close:hover {
        background-color: var(--bg-secondary);
        color: var(--text-primary);
    }
    
    @media (max-width: 767px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Inject contact styles
if (!document.getElementById('contact-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'contact-styles';
    styleSheet.textContent = contactStyles;
    document.head.appendChild(styleSheet);
}
