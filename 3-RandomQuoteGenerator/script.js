const quotes = [
    {
        person : "Nelson Mandela",
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        person: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing."
    },
    {
        person:"Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        person: "Eleanor Roosevelt",
        quote : "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        person: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. "
    },
    {
        person : "James Cameron",
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"
    },
    {
        person: "John Lennon",
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
    },
    {
        person : "Mahatma Gandhi",
        quote : "You must be the change you wish to see in the world"
    },
    {
        person: "Franklin D. Roosevelt",
        quote: "The only thing we have to fear is fear itself."
    }
]


// quote
const quote = document.querySelector('.quote-area')

// person
const person = document.querySelector('.person')

// button
const button = document.querySelector('#new-quote');
button.addEventListener('click', changeQuote);

function changeQuote(){
    let randomValue = Math.floor(Math.random()*quotes.length); 
    quote.innerHTML = quotes[randomValue].quote 
    person.innerHTML = quotes[randomValue].person 
}