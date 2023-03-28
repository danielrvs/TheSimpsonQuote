console.log('imported quote.js')

// Retrieve a quote with fetch after DOM Content Loaded
document.addEventListener('DOMContentLoaded', getQuote)



// Click Event that retrieve a new quote
export function getQuoteEventListener(element){
    element.addEventListener('click', getQuote)
}


function getQuote()
{
    console.log('event')
}