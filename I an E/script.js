// Global quotes object to store categories and quotes
const quotes = {
    happy: [
        `happiness is a journey, not a destination.`,
        `smile and let the world wonder why.`,
        `happiness looks gorgeous on you.`,
        `choose to be happy every day.`,
        `your happiness is your greatest strength.` // Fixed missing comma
    ],
    sad: [
        `it's okay to feel sad sometimes.`,
        `tears are words that need to be written.`,
        `sadness flies away on the wings of time.`,
        `every storm runs out of rain.`,
        `this too shall pass.` // Fixed the trailing comma
    ],
    love: [
        `love is the greatest refreshment in life.`,
        `you are loved more than you know.`,
        `love yourself first and everything else falls into line.`,
        `love is a friendship set to music.`,
        `where there is love, there is life.`, // Fixed missing comma
        `love changes some bad moods`,
        `love is not about how much you say 'I love you', but how much you prove that it's true.`,
        `love is composed of a single soul inhabiting two bodies.`
    ],
    breakup: [
        `sometimes good things fall apart so better things can fall together.`,
        `every ending is a new beginning.`,
        `let go of the past and embrace the future.`,
        `you deserve someone who makes you feel like the best version of yourself.`,
        `the best is yet to come.`
    ]
};

// Main function for generating a personalized quote
function generateQuote() {
    const name = document.getElementById('name').value.trim();
    const quoteElement = document.getElementById('quote');
    
    // Clear previous error class
    quoteElement.classList.remove("error");

    if (name) {
        const personalizedQuotes = [
            `Believe in yourself, ${name}. You are capable of achieving great things!`,
            `${name}, your potential is limitless. Keep pushing forward!`,
            `Stay positive and strong, ${name}. Good things are coming your way!`,
            `${name}, you have the power to create your own destiny. Make it amazing!`
        ];
        const randomIndex = Math.floor(Math.random() * personalizedQuotes.length);
        quoteElement.textContent = personalizedQuotes[randomIndex];
    } else {
        quoteElement.textContent = 'Please enter your name to receive a personalized quote.';
        quoteElement.classList.add("error");
    }
}

// Function for generating category-based quotes (happy, sad, love, breakup)
function generateCategoryQuote(category) {
    const name = document.getElementById('name').value.trim();
    const quoteElement = document.getElementById('quote');
    
    // Clear previous error class
    quoteElement.classList.remove("error");

    if (name === "") {
        quoteElement.textContent = "Please enter your name to generate a quote!";
        quoteElement.classList.add("error");
        return;
    }

    // Get quotes for the selected category
    const categoryQuotes = quotes[category] || [];

    if (categoryQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
        quoteElement.textContent = `${name}, ${categoryQuotes[randomIndex]}`;
    } else {
        quoteElement.textContent = "Invalid category!";
        quoteElement.classList.add("error");
    }
}

// Function to add a new quote to a specific category
function addQuote(category, newQuote) {
    const name = document.getElementById('name').value.trim();
    const quoteElement = document.getElementById('quote');

    // Clear previous error class
    quoteElement.classList.remove("error");

    if (name === "") {
        quoteElement.textContent = "Please enter your name to add a quote!";
        quoteElement.classList.add("error");
        return;
    }

    // Validate category and add new quote
    if (quotes[category]) {
        quotes[category].push(`${name}, ${newQuote}`);
        quoteElement.textContent = `New quote added to ${category} category!`;
    } else {
        quoteElement.textContent = "Invalid category!";
        quoteElement.classList.add("error");
    }
}
