const pairItUp = new PairItUp();



window.addEventListener('load', (event) => {
  console.log('game is loaded');
  //console.log(symbols.length);
  this.firstCardArray();
  this.buildFirstCard();
  //this.playerCardArray();
})


let startButton = document.getElementById("start");



startButton.addEventListener("click", (event) => {
    pairItUp.start()

    playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
    futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
    playerCardInner = ``;
    futureCardInner = ``;


    this.playerCardArray();
    this.buildPlayerCard();
    this.futureCardArray();
    this.buildFutureCard();

    let symbolButtons = document.querySelectorAll("#play-button");
    symbolButtons.forEach((button) => {button.addEventListener("click", clicked, false)});
})


function clicked(event) {
    let sym1 = mainCard.map(element => element.name);
    console.log(sym1);
    let sym2 = event.target.alt;
    console.log(sym2);

    pairItUp.symbolClicked += 1;
    console.log(pairItUp.symbolClicked);

    pairItUp.checkIfSame(sym1, sym2)

    if(pairItUp.checkIfSame(sym1, sym2)) {pairItUp.checkIfWon()}
    else {pairItUp.wrongGuess()}

    console.log(pairItUp.symbolClicked);
    /*
    pairItUp.checkIfSame(sym1, sym2)
    console.log(pairItUp.checkIfSame(sym1, sym2))
    */

}



let mainCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7", "sym8"];
let playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
let futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];



let mainCardElement = document.getElementById("main-card");
let playerCardElement = document.getElementById("player-card");
let futureCardElement = document.getElementById("future-card");


let mainCardInner = ``;
let playerCardInner = ``;
let futureCardInner = ``;




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
        <button id="play-button">
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
        <button id="play-button">
        <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
        </button>
        </li>`;
    })
    futureCardElement.innerHTML = futureCardInner;
    //console.log(inner);
}




//SWITCHING CARDS 




const symbols = [
    {name: "cauldron" , img: "cauldron.png"},
    {name: "dragon" , img: "dragon.png"},
    {name: "book" , img: "book.png"},
    {name: "potion" , img: "potion.png"},
    {name: "baguetteMagique2" , img: "baguettemagique2.png"},
    {name: "magicHand" , img: "magichand.png"},
    {name: "witchHat" , img: "witchhat.png"},
    {name: "cards" , img: "cards.png"},
    {name: "fries" , img: "fries.png"},
    {name: "sun" , img: "sun.png"},
    {name: "valise" , img: "valise.png"},
    {name: "wave" , img: "wave.png"},
    {name: "boat" , img: "boat.png"},
    {name: "tape" , img: "tape.png"},
    {name: "scissors" , img: "scissors.png"},
    {name: "loupe" , img: "loupe.png"},
    {name: "bucket" , img: "bucket.png"},
    {name: "boots" , img: "boots.png"},
    {name: "basket" , img: "basket.png"},
    {name: "wateringCan" , img: "wateringcan.png"},
    {name: "branch" , img: "branch.png"},
    {name: "wood" , img: "wood.png"},
    {name: "retroCar" , img: "retrocar.png"},
    {name: "oldPhone" , img: "oldphone.png"},
    {name: "retroRadio" , img: "retroradio.png"},
    {name: "parasol2" , img: "parasol2.png"},
    {name: "glasses" , img: "glasses.png"},
    {name: "car" , img: "car.png"},
    {name: "shoe" , img: "shoe.png"},
    {name: "mountains" , img: "mountains.png"},
    {name: "map" , img: "map.png"},
    {name: "guitar" , img: "guitar.png"},
    {name: "circus" , img: "circus.png"},
    {name: "manege" , img: "manege.png"},
    {name: "roulotte" , img: "roulotte.png"},
    {name: "skull" , img: "skull.png"},
    {name: "baguetteMagique" , img: "baguettemagique.png"},
    {name: "magicBall" , img: "magicball.png"},
    {name: "cowSkull" , img: "cowskull.png"},
    {name: "croissant" , img: "croissant.png"},
    {name: "pancakes" , img: "pancakes.png"},
    {name: "tea" , img: "tea.png"},
    {name: "skate" , img: "skate.png"},
    {name: "hat" , img: "hat.png"},
    {name: "camera" , img: "camera.png"},
    {name: "parasol" , img: "parasol.png"},
    {name: "unicorn" , img: "unicorn.png"},
    {name: "beachball" , img: "beachball.png"},
    {name: "cinemaTickets" , img: "cinematickets.png"},
    {name: "clap" , img: "clap.png"},
    {name: "speaker" , img: "speaker.png"},
    {name: "pear" , img: "pear.png"},
    {name: "lemon" , img: "lemon.png"},
    {name: "fraise" , img: "fraise.png"},
    {name: "orange" , img: "orange.png"},
    {name: "apple" , img: "apple.png"},
    {name: "droplets" , img: "droplets.png"},
    {name: "water" , img: "water.png"},
    {name: "bread" , img: "bread.png"},
    {name: "cake" , img: "cake.png"},
    {name: "bread" , img: "bread.png"},
    {name: "jellyfish" , img: "jellyfish.png"},
    {name: "crab" , img: "crab.png"},
    {name: "turtle" , img: "turtle.png"},
    {name: "whale" , img: "whale.png"},
    {name: "octopus" , img: "octopus.png"},
    {name: "lion" , img: "lion.png"},
    {name: "pride" , img: "pride.png"},
    {name: "monkey" , img: "monkey.png"},
    {name: "elephant" , img: "elephant.png"},
    {name: "giraffe" , img: "giraffe.png"},
    {name: "crocodile" , img: "crocodile.png"},
    {name: "football" , img: "football.png"},
    {name: "weights" , img: "weights.png"},
]
