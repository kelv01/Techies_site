/* Wait for the DOM content to load */
document.addEventListener('DOMContentLoaded', () => {
    /* Mobile Menu Toggle */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.site-nav ul');
  
    mobileMenuToggle.addEventListener('click', () => {
      // Toggle display of mobile navigation
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
      }
    });
  
    /* Smooth Scrolling for Navigation Links 
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
  
        // Close the mobile menu on navigation (for small devices)
        if (window.innerWidth < 768) {
          navMenu.style.display = 'none';
        }
      });
    });*/



    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', function (e) {
        const targetHref = this.getAttribute('href');
    
        // Check if the link is for an external page (has .html extension)
        if (targetHref.includes('.html')) {
          return; // Allow normal navigation for other pages
        }
    
        e.preventDefault(); // Prevent default anchor behavior only for internal links
    
        const targetId = targetHref.substring(1);
        const targetSection = document.getElementById(targetId);
    
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
    
        // Close the mobile menu on navigation (for small devices)
        if (window.innerWidth < 768) {
          navMenu.style.display = 'none';
        }
      });
    });
    
  
    /* Basic Slider Functionality for the Blog Section */
    const blogSlider = document.getElementById('blog-slider');
    if (blogSlider) {
      let scrollAmount = 0;
      function autoSlide() {
        scrollAmount += 1;
        blogSlider.scrollLeft = scrollAmount;
        // Reset scroll if at end
        if (scrollAmount >= blogSlider.scrollWidth - blogSlider.clientWidth) {
          scrollAmount = 0;
        }
        requestAnimationFrame(autoSlide);
      }
      autoSlide();
    }
  });
  
 /* Basic Slider Functionality for the card Section */
  document.addEventListener("DOMContentLoaded", () => {
    const selectButtons = document.querySelectorAll('.select-btn');
  
    selectButtons.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        // Prevent event bubbling if needed (e.g., if card has its own click event)
        event.stopPropagation();
    
        // Retrieve the corresponding plan from the parent card's data attribute
        const plan = btn.closest('.pricing-card').getAttribute('data-plan');
        console.log(`Selected Plan: ${plan}`);
    
        // Additional actions can be added here, such as opening a modal or navigating to a booking page.
      });
    });
  });
  