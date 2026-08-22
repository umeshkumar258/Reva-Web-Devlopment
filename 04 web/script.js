document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        let confirmOpen = confirm(`Are you sure you want to visit: ${link.textContent}?`);

        if (!confirmOpen) {
            event.preventDefault();
        }
    });
});

document.title = "My Personalized Bookmarks";
