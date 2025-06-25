//array of popular quotes with the author
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

//function to get a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = `"${quotes[randomIndex].text}"`;
    document.getElementById("Author").innerText = `- ${quotes[randomIndex].author}`;
}