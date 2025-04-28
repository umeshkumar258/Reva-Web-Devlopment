// JavaScript code to enhance interactivity

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your order has been placed successfully!');
    });
});
