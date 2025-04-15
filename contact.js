document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const subjectField = document.getElementById('subject');
    const tooltip = document.querySelector('.tooltip-text');
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation example
        if (!subjectField.value.trim()) {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
            subjectField.focus();
            
            // Hide tooltip after 3 seconds
            setTimeout(() => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            }, 3000);
        } else {
            // Form submission logic would go here
            alert('Message sent successfully!');
            form.reset();
        }
    });
    
    // Hide tooltip when typing in the subject field
    subjectField.addEventListener('input', function() {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});