let images = document.querySelectorAll("header img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        alert(`You clicked ${img.alt}`);
    });
});
