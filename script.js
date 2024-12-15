// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your backend
            console.log('Email submitted:', email);
            
            // Show success message
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Added to Waitlist!';
            button.style.backgroundColor = 'var(--color-accent)';
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 3000);
        });
    }
});

// Smooth scroll for navigation
document.querySelector('.btn-secondary').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.features').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Add loading animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, .step, .hero h1, .hero p');
    
    // Simple fade-in animation
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

const emailInput = document.querySelector('input[type="email"]');
if (emailInput) {
    emailInput.addEventListener('input', function() {
        if (validateEmail(this.value)) {
            this.style.borderColor = 'var(--color-accent)';
        } else {
            this.style.borderColor = '';
        }
    });
}