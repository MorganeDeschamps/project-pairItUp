const pairItUp = new PairItUp();



window.addEventListener('load', (event) => {
  console.log('game is loaded');
  this.firstCardArray();
  this.buildFirstCard();
  //console.log(this.buildNextCard, this.buildMainCard, this.buildPlayerCard)
 // document.getElementById("timer").innerHTML += `<img class="main symbol" src=`${symbols[0].img}` alt= "test"></img>`

})


let button = document.getElementById("start")

button.addEventListener("click", (event) => {
    pairItUp.start();
})




let mainCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7", "sym8"];
let playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
let nextCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];

let mainCardHtml = document.getElementById("main-card");
let playerCardHtml = document.getElementById("player-card");
let nextCardHtml = document.getElementById("future-card");


//FIRST CARD
function firstCardArray () {
    mainCard.forEach ((symbol) => {
        let index = mainCard.indexOf(symbol)
        mainCard.splice(index, 1, symbols[Math.floor(Math.random() * symbols.length)])
    })
    console.log(mainCard)
    return mainCard;
}

function buildFirstCard () {
    let inner= ``;
    mainCard.forEach((symbol) => {
        let index = mainCard.indexOf(symbol)
        inner += 
        `<li class="symbol ${symbol.name}">
        <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
        </li>`;
    })
    mainCardHtml.innerHTML = inner;
    console.log(inner);
}



//PLAYER CARD

function playerCardArray () {
    
    playerCard.forEach ((symbol) => {
        let index = mainCard.indexOf(symbol)
        mainCard.splice(index, 1, symbols[Math.floor(Math.random() * symbols.length)])
    })
    console.log(mainCard)
    return mainCard;
}




/*

function playerCardArray () {
    playerCard.forEach ((symbol) => {
        playerCard.splice(playerCard.indexOf(symbol), 1, symbols[Math.floor(Math.random() * symbols.length)])
        playerCardHtml.innerHTML += `<li class="player symbol" data-symbol-name="${symbol.name}" style="background: url(img/${symbol.img}) no-repeat"></li>`
    })

    playerCard.splice(6, 0, mainCard[0])
    playerCardHtml.innerHTML += `<li class="player symbol" data-symbol-name="${playerCard[7].name}" style="background: url(img/${playerCard[7].img}) no-repeat"></li>`
}

function buildNextCard () {
    nextCard.forEach ((symbol) => {
        nextCard.splice(nextCard.indexOf(symbol), 1, symbols[Math.floor(Math.random() * symbols.length)])
        nextCardHtml.innerHTML += `<li class="next symbol" data-symbol-name="${symbol.name}" style="background: url(img/${symbol.img}) no-repeat"></li>`
    })

    nextCard.splice(6, 0, playerCard[1])
    nextCardHtml.innerHTML += `<li class="next symbol" data-symbol-name="${nextCard[7].name}" style="background: url(img/${nextCard[7].img}) no-repeat"></li>`
}
*/



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
    {name: "ball" , img: "ball.png"},
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
