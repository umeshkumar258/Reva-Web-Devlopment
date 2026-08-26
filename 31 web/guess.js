let readline = null;

if (typeof require === "function" && process && process.versions && process.versions.node) {
    readline = require("readline");
}

function askQuestion(text) {
    return new Promise((resolve) => {
        if (typeof prompt === "function") {
            resolve(prompt(text));
            return;
        }

        if (readline) {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(text, (answer) => {
                rl.close();
                resolve(answer);
            });
            return;
        }

        resolve("");
    });
}

async function startGame() {
    let count = 0;

    while (true) {
        const userInput = await askQuestion("Enter a number (or type 'quit' to exit): ");

        if (userInput === null || userInput.trim().toLowerCase() === "quit") {
            console.log("You have exited the game.");
            return;
        }

        const user = Number(userInput);

        if (Number.isNaN(user)) {
            console.log("Please enter a valid number or type 'quit' to exit.");
            continue;
        }

        const randomNum = Math.floor(Math.random() * 10) + 1;
        count++;

        if (user === randomNum) {
            console.log("You guessed the correct number: " + randomNum);
            console.log("You guessed the correct number in " + count + " attempts.");
            return;
        }

        console.log("You guessed the wrong number. The correct number is " + randomNum);
    }
}

startGame();