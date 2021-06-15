const pairItUp = new PairItUp();


//TEXT ELEMENTS
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const bestTimeElement = document.getElementById("best-time");

const cardsLeftElement = document.getElementById("cards-left");



//ADDING INFO ON THE PAGE - TIME / BEST TIME / CARDS LEFT 

function printTime() {
    let string = pairItUp.computeTwoDigitNumber(pairItUp.getTime());
    let time = string.split("");
  
    minDecElement.innerText = time[0];
    minUniElement.innerText = time[1];

    secDecElement.innerText = time[2];
    secUniElement.innerText = time[3];
    // ... your code goes here
}

function bestTime() {
    let bestTime = pairItUp.bestTime;
    bestTimeElement.innerText = bestTime;
}

function countCardsLeft() {
    cardsLeftElement.innerText = pairItUp.cardsLeft;
}
