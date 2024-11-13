const quotes =[
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.", 
    "Your time is limited, so don't waste it living someone else's life.",
    "Don't be trapped by dogma - which is living with the results of other people's thinking.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    "You only live once, but if you do it right, once is enough." ,
    "Never let the fear of striking out keep you from playing the game."
];

const usedIndex = new Set();
const randomQuote = document.getElementById("randomQuote");
let usedQuote = [];
let currentQuoteIndex = -1;

function generateRandomQuote(){

    if(usedIndex.size >= quotes.length){
        usedIndex.clear();
    }

    while(true){

        const randomIndex = Math.floor(Math.random() * quotes.length);

        if(usedIndex.has(randomIndex)){
            continue;
        }

        randomQuote.textContent = `"${quotes[randomIndex]}"`;
        usedIndex.add(randomIndex);
        usedQuote.push(quotes[randomIndex]);
        currentQuoteIndex = usedQuote.length - 1;
        break;
    }

    return usedQuote;
}



function goToPrev(){

    if (currentQuoteIndex > 0) {  
        currentQuoteIndex--;  
        randomQuote.textContent = `"${usedQuote[currentQuoteIndex]}"`;
    } else {
        randomQuote.textContent = `"${usedQuote[currentQuoteIndex]}"`; // Show the first quote
    }


}


function goToNext(){

    if(currentQuoteIndex < usedQuote.length - 1){
        currentQuoteIndex++;
        randomQuote.textContent = `"${usedQuote[currentQuoteIndex]}"`;
    }else {
        randomQuote.textContent = `"${usedQuote[currentQuoteIndex]}"`; // Show the last quote
    }

}