const quotesArr = [
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "Doubt kills more dreams than failure ever will.",
      author: "Suzy Kassem"
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair"
    },
    {
      quote: "Discipline is choosing between what you want now and what you want most.",
      author: "Abraham Lincoln"
    }
];


let quoteEl = document.querySelector(".quote");
let authorEl = document.querySelector(".author");
let nextBtn = document.querySelector("#next")

function displayQuote(){

    let index = Math.floor(Math.random() * quotesArr.length);

    let showQuote = quotesArr[index];

    quoteEl.innerHTML =`" ${showQuote.quote} "`;
    authorEl.innerHTML = `~  ${showQuote.author}`

}

displayQuote();