// Adding an event listener for all anchor tags to confirm before opening the links
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Confirm the link click
        let confirmOpen = confirm(`Are you sure you want to visit: ${link.textContent}?`);

        if (!confirmOpen) {
            event.preventDefault();  // If not confirmed, prevent the link from opening
        }
    });
});

// Example function to dynamically change the title (if you need further customizations)
document.title = "My Personalized Bookmarks";
