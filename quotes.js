const quotes = [
    {
        quote : "Light Weight Baby",
        author : "Ronnie Coleman",
    },
    {
        quote : "Whatever happens, do two more",
        author : "Arnold Schwarzenegger",
    },
    {
        quote : "Everybody wants to be a bodybuilder, but don't nobody wnat to life no heavy-ass weight",
        author : "Ronnie Coleman",
    },
    {
        quote : "Just Overtrain. Knowing your limits is very important",
        author : "Kai Greene",
    },
    {
        quote : "Just Overtrain. Knowing your limits is very important",
        author : "Kai Greene",
    },
    {
        quote : "Good weight. For a tiny bitch",
        author : "Dorian Yates",
    },
    {
        quote : "What's your secret? There's no secret",
        author : "Jay Issac Cutler",
    },
    {
        quote : "I've been woring fuckin hard. so shut up",
        author : "Phillip Jerrod Heath",
    },
    {
        quote : "Be wary of all information. Make your own choices based on rational ground and logic",
        author : "Mike Rippetoe",
    },
    {
        quote : "The only thing I regret now is I could do 4 squats with 800 pounds, but i was scared and only did 2 squats",
        author : "Ronnie Coleman",
    },   
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//Math.round, ceil, floor

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;