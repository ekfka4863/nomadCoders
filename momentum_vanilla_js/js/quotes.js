// quotes.js

const quotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson"
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck"
  },
  {
    quote: "Fix the cause, not the symptom.",
    author: "Steve Maguire"
  },
  {
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon"
  },
  {
    quote: "In order to be irreplaceable, one must always be different",
    author: "Coco Chanel"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    quote: "Don't comment bad code - rewrite it.",
    author: "Brian Kernighan"
  },
  {
    quote: "Debugging becomes significantly easier if you first admit that you are the problem.",
    author: "William Laeder"
  }
];
// reference:  https://dzone.com/articles/best-programming-jokes-amp-quotes
// reference:  https://www.devglan.com/blog/best-developer-quotes


// --------------------------------------------------------------------
// DOM
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");  



// --------------------------------------------------------------------
// function

// quotes 배열의 길이 
const quoteLen = quotes.length;

// 랜덤 숫자 
// let randomNum = Math.round(Math.random() * quoteLen);  // 반올림
// let randomNum = Math.ceil(Math.random() * quoteLen);    // 무조건 올림 
// let randomNum = Math.floor(Math.random() * quoteLen);     // 무조건 내림 

// console.log(quotes[Math.floor(Math.random() * quoteLen)]);
// console.log(quotes[randomNum]); 
const todaysQuote = quotes[Math.floor(Math.random() * quoteLen)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
