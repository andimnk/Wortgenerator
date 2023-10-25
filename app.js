const wordEl = document.querySelector(".word");
const oldWordsEl = document.querySelector(".oldWords");


let words = [];
let currentWord = "";
let previousWords = [];


fetch("words.txt")
.then(function(response){
    return response.text();
})
.then(function(text){   
    words = text.split(",");    
});



function onClick(){
    if(currentWord){
        previousWords.push(currentWord);
        oldWordsEl.innerHTML = previousWords.join(", ");
    }
    currentWord = getRandomWord();
    wordEl.innerHTML = currentWord;
    
}

function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber);
}

function getRandomWord(){
    return words[getRandomNumber(words.length)];
}