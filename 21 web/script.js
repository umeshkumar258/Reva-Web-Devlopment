// Demonstrating CSS Specificity and Cascading via JS

const h1 = document.querySelector('h1');

// 1. Read computed styles applied by CSS rules
const computedStyle = window.getComputedStyle(h1);
console.log('Final text color:', computedStyle.color); // Output: black (due to #new ID specificity)
console.log('Background color:', computedStyle.backgroundColor);

// 2. Override all CSS specificity using direct inline styles
h1.style.color = 'orange';

// 3. Toggle classes to test specificity changes dynamically
h1.classList.toggle('cred');
