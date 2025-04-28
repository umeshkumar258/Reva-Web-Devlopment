// Add scroll effect to the button
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('You clicked the button!');
  });
  
  // Scroll reveal effect for the left and right sections
  const leftSection = document.querySelector('.left-section');
  const rightSection = document.querySelector('.right-section');
  
  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY + window.innerHeight;
  
    // Reveal the left section when scrolled into view
    if (leftSection.offsetTop < scrollPosition) {
      leftSection.style.opacity = 1;
      leftSection.style.transition = 'opacity 1s ease';
    } else {
      leftSection.style.opacity = 0;
    }
  
    // Reveal the right section when scrolled into view
    if (rightSection.offsetTop < scrollPosition) {
      rightSection.style.opacity = 1;
      rightSection.style.transition = 'opacity 1s ease';
    } else {
      rightSection.style.opacity = 0;
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  