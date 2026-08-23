let message = document.getElementById("message");
let button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
    message.textContent = "Hello! JavaScript changed this message.";
});


let fav = "iron man";
let user;

while (true) {

    user = prompt("Enter your fav superhero");

    if (user === null) {
        console.log("You cancelled the game");
        break;
    }

    user = user.trim().toLowerCase();

    if (user === fav) {
        console.log("You are correct!");
        break;
    }

    if (user === "quit") {
        console.log("Game stopped");
        break;
    }

    console.log("Try again!");
}

alert("it is done");
