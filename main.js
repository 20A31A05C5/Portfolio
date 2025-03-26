document.addEventListener('DOMContentLoaded', function() {
    const menuToggler = document.querySelector('.menu-toggler');
    const topNav = document.querySelector('.top-nav');
    topNav.classList.toggle('open');
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('nav a[href*="#"]');
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - 100;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Scroll to top button
    const upButton = document.getElementById('up');
    if(upButton){
      upButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // AOS initialization (assuming AOS is included)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        easing: 'ease',
        duration: 1800
      });
    }
  });