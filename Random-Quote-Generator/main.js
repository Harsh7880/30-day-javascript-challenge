// cerating Array of quotes
let quotes = [
    {
        quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
        author: `- Nelson Mandela`
    },
    {
        quote: `The way to get started is to quit talking and begin doing.`,
        author: `- Walt Disney`
    },
    {
        quote: `Your time is limited so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.`,
        author: ` - Steve Jobs`
    },
    {
        quote: `If life were predictable it would cease to be life and be without flavor.`,
        author: `-  - Eleanor Roosevelt`
    },
    {
        quote: `If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.`,
        author: `- Oprah Winfrey'`
    },
    {
        quote: `If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.`,
        author: ` - James Cameron`
    },

];

let quoteBtn = document.getElementById('quote-btn');
let quote = document.querySelector('.quote');
let author = document.querySelector('.quote-author');
// Adding a click event listener to btn and passing the call back function to generate random quotes

quoteBtn.addEventListener('click',() => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})
