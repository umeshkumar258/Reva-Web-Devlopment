// Create an object to store quotes for different moods
const quotes = {
    happy: [
        "Happiness is not something ready made. It comes from your own actions.",
        "The most important thing is to enjoy your life – to be happy – it’s all that matters.",
        "Happiness depends upon ourselves."
    ],
    motivated: [
        "The only way to do great work is to love what you do.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts."
    ],
    relaxed: [
        "Sometimes the most productive thing you can do is relax.",
        "Relaxation is the key to a healthy life.",
        "Take a deep breath and relax; everything will fall into place."
    ],
    thoughtful: [
        "In the middle of every difficulty lies opportunity.",
        "A person who never made a mistake never tried anything new.",
        "Sometimes you have to let go of the life you’ve planned, so as to make room for the life that’s waiting for you."
    ]
};

// Function to generate a quote based on the selected mood
function generateQuote() {
    const mood = document.getElementById('mood').value; // Get selected mood
    const quoteArray = quotes[mood]; // Get the corresponding quotes
    const randomIndex = Math.floor(Math.random() * quoteArray.length); // Randomly pick a quote
    const selectedQuote = quoteArray[randomIndex]; // Get the random quote
    document.getElementById('quote').textContent = selectedQuote; // Display the quote in the quote box
}

// Event listener for the button click to generate the quote
document.getElementById('generate-quote').addEventListener('click', generateQuote);
