const pairItUp = new PairItUp();

//BUILDING BLOCKS
//CARDS
let mainCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7", "sym8"];
let playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
let futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];

let mainCardElement = document.getElementById("main-card");
let playerCardElement = document.getElementById("player-card");
let futureCardElement = document.getElementById("future-card");

let mainCardInner = ``;
let playerCardInner = ``;
let futureCardInner = ``;


/* 
//TEXT ELEMENTS
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const bestTimeElement = document.getElementById("best-time");

const cardsLeftElement = document.getElementById("cards-left");
 */



//EVENT LISTENER LOAD
window.addEventListener('load', (event) => {
  console.log('game is loaded');
  //console.log(symbols.length);
  this.firstCardArray();
  this.buildFirstCard();
  //this.playerCardArray();
})


//START GAME 
let startButton = document.getElementById("start");

startButton.addEventListener("click", (event) => {
    pairItUp.start()
    const interval = setInterval(this.printTime, 500);

    playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
    futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
    playerCardInner = ``;
    futureCardInner = ``;


    this.playerCardArray();
    this.buildPlayerCard();
    this.futureCardArray();
    this.buildFutureCard();

    let symbolButtons = document.querySelectorAll(".play-button");
    this.addingEvent(symbolButtons);

})

function addingEvent(array) {
    array.forEach((button) => button.addEventListener("click", this.clicked, false));
}

function clicked(event) {
    pairItUp.symbolClicked += 1;
    //console.log(pairItUp.symbolClicked);


    let sym1 = mainCard.map(element => element.name);
    //console.log(sym1);
    let sym2 = event.target.alt;
    //console.log(sym2)

    pairItUp.checkIfSame(sym1, sym2)

    if(pairItUp.bestTimeUpdate()) {this.bestTime()};
    //if same -> checkIfWon() -> if yes youWin() -> bestTimeUpdate()
    //if not -> wrongGuess() -> if 1st attempt malusTime() -> if not gameOver()
}





//FIRST CARD
function firstCardArray () {
    let filterAsYouGo = symbols.filter(el => el);

    mainCard.forEach ((symbol, index) => {
        mainCard.splice(index, 1, filterAsYouGo[Math.floor(Math.random() * filterAsYouGo.length)])

        filterAsYouGo = symbols.filter(function(el){
            return !mainCard.includes(el);
          })
    })
    console.log(mainCard)
    return mainCard;
}

function buildFirstCard () {
    mainCard.forEach((symbol, index) => {
        mainCardInner += 
        `<li class="symbol ${symbol.name}">
        <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
        </li>`;
    })
    mainCardElement.innerHTML = mainCardInner;
    console.log(mainCardInner);
}


/*if (same) {
    mainCardInner = playerCardInner
}
*/

//PLAYER CARD

function playerCardArray() {
    let filteredArray = symbols.filter(symbol => !mainCard.includes(symbol));
      
    
    playerCard.forEach ((symbol, index) => {
        let random = filteredArray[Math.floor(Math.random() * filteredArray.length)];

        playerCard.splice(index, 1, random)

        filteredArray = filteredArray.filter(el => !mainCard.includes(el) && !playerCard.includes(el))
    })
    
    let randomCommon = mainCard[Math.floor(Math.random() * mainCard.length)];
    let randomIndex = Math.floor(Math.random() * playerCard.length);

    playerCard.splice(randomIndex, 0, randomCommon);

    console.log(filteredArray.length);
    return playerCard;
}

function buildPlayerCard () {
    playerCard.forEach((symbol) => {
        let index = playerCard.indexOf(symbol)
        playerCardInner += 
        `<li class="player symbol ${symbol.name}">
        <button class="play-button">
        <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
        </button>
        </li>`;
    })
    playerCardElement.innerHTML = playerCardInner;
    //console.log(inner);
}



//FUTURE CARD

function futureCardArray() {
    let filteredArray = symbols.filter(symbol => !playerCard.includes(symbol));
      
    
    futureCard.forEach ((symbol, index) => {
        let random = filteredArray[Math.floor(Math.random() * filteredArray.length)];

        futureCard.splice(index, 1, random)

        filteredArray = filteredArray.filter(el => !futureCard.includes(el) && !playerCard.includes(el))
    })
    
    let randomCommon = playerCard[Math.floor(Math.random() * playerCard.length)];
    let randomIndex = Math.floor(Math.random() * futureCard.length);

    futureCard.splice(randomIndex, 0, randomCommon);

    console.log(filteredArray.length);
    return futureCard;
}

function buildFutureCard () {
    futureCard.forEach((symbol) => {
        let index = futureCard.indexOf(symbol)
        futureCardInner += 
        `<li class="future symbol ${symbol.name}">
        <button class="play-button">
        <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
        </button>
        </li>`;
    })
    futureCardElement.innerHTML = futureCardInner;
    //console.log(inner);
}




//SWITCHING CARDS 



/* 

//ADDING INFO ON THE PAGE - TIME / BEST TIME / CARDS LEFT 
/* 
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const bestTimeElement = document.getElementById("best-time");

const cardsLeftElement = document.getElementById("cards-left"); 
*/

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
 */

const symbols = [
    {name: "apple", img: "apple.png"},
    {name: "baguettemagique", img: "baguettemagique.png"},
    {name: "baguettemagique2", img: "baguettemagique2.png"},
    {name: "basket", img: "basket.png"},
    {name: "beachball", img: "beachball.png"},
    {name: "boat", img: "boat.png"},
    {name: "book", img: "book.png"},
    {name: "boots", img: "boots.png"},
    {name: "branch", img: "branch.png"},
    {name: "bread", img: "bread.png"},
    {name: "bucket", img: "bucket.png"},
    {name: "cake", img: "cake.png"},
    {name: "camera", img: "camera.png"},
    {name: "cappuccino", img: "cappuccino.png"},
    {name: "car", img: "car.png"},
    {name: "cards", img: "cards.png"},
    {name: "cauldron", img: "cauldron.png"},
    {name: "cinematickets", img: "cinematickets.png"},
    {name: "circus", img: "circus.png"},
    {name: "clap", img: "clap.png"},
    {name: "cowskull", img: "cowskull.png"},
    {name: "crab", img: "crab.png"},
    {name: "crocodile", img: "crocodile.png"},
    {name: "croissant", img: "croissant.png"},
    {name: "dragon", img: "dragon.png"},
    {name: "droplets", img: "droplets.png"},
    {name: "elephant", img: "elephant.png"},
    {name: "football", img: "football.png"},
    {name: "fraise", img: "fraise.png"},
    {name: "fries", img: "fries.png"},
    {name: "giraffe", img: "giraffe.png"},
    {name: "glasses", img: "glasses.png"},
    {name: "guitar", img: "guitar.png"},
    {name: "hat", img: "hat.png"},
    {name: "jellyfish", img: "jellyfish.png"},
    {name: "lemon", img: "lemon.png"},
    {name: "lion", img: "lion.png"},
    {name: "loupe", img: "loupe.png"},
    {name: "magicball", img: "magicball.png"},
    {name: "magichand", img: "magichand.png"},
    {name: "manege", img: "manege.png"},
    {name: "map", img: "map.png"},
    {name: "monkey", img: "monkey.png"},
    {name: "mountains", img: "mountains.png"},
    {name: "octopus", img: "octopus.png"},
    {name: "oldphone", img: "oldphone.png"},
    {name: "orange", img: "orange.png"},
    {name: "pancakes", img: "pancakes.png"},
    {name: "parasol", img: "parasol.png"},
    {name: "parasol2", img: "parasol2.png"},
    {name: "pear", img: "pear.png"},
    {name: "potion", img: "potion.png"},
    {name: "pride", img: "pride.png"},
    {name: "retrocar", img: "retrocar.png"},
    {name: "retroradio", img: "retroradio.png"},
    {name: "roulotte", img: "roulotte.png"},
    {name: "scissors", img: "scissors.png"},
    {name: "shoe", img: "shoe.png"},
    {name: "skate", img: "skate.png"},
    {name: "skull", img: "skull.png"},
    {name: "speaker", img: "speaker.png"},
    {name: "stopsign", img: "stopsign.png"},
    {name: "sun", img: "sun.png"},
    {name: "tape", img: "tape.png"},
    {name: "tea", img: "tea.png"},
    {name: "turtle", img: "turtle.png"},
    {name: "unicorn", img: "unicorn.png"},
    {name: "valise", img: "valise.png"},
    {name: "water", img: "water.png"},
    {name: "wateringcan", img: "wateringcan.png"},
    {name: "wave", img: "wave.png"},
    {name: "weights", img: "weights.png"},
    {name: "whale", img: "whale.png"},
    {name: "witchhat", img: "witchhat.png"},
    {name: "wood", img: "wood.png"}
]
