class Game {

  constructor() {
    this.cards = new Cards;
    this.pairItUp = new PairItUp();

    this.mainCardElement = document.getElementById("main-card");
    this.playerCardElement = document.getElementById("player-card");
    this.futureCardElement = document.getElementById("future-card");
  }

  buildMainCard() {
    this.cards.buildCard(this.mainCardElement, this.cards.cardRandom(this.cards.mainCard)); 
  }

  buildPlayerCard() {
    this.cards.buildCard(this.playerCardElement, this.cards.cardRandom(this.cards.playerCard, this.cards.mainCard)); 
  }

  buildFutureCard() {
    this.cards.buildCard(this.futureCardElement, this.cards.cardRandom(this.cards.futureCard, this.cards.playerCard)); 
  }

  moveUp () {
    this.cards.mainCard = this.cards.playerCard;
    this.mainCardElement.innerHTML = this.playerCardElement.innerHTML;

    this.cards.playerCard = this.cards.futureCard;
    this.playerCardElement.innerHTML = this.futureCardElement.innerHTML;
  }

  endGame() {
    this.cards.resetCards(3);
    this.buildMainCard();
    this.pairItUp.stop();
  }
  
}


const game = new Game();
const pairItUp = new PairItUp();

let startButton = document.getElementById("start");

window.addEventListener('load', (event) => {
  game.buildMainCard();
})

startButton.addEventListener("click", (event) => {
  //pairItUp.intervalId = null;
  //interval getting crazy if you click start more than once - not sure why
  //tried "resetting" it here (l61) and on pairItUp.start() but no luck
  pairItUp.start();
  game.cards.resetCards(2);
  game.buildPlayerCard();
  game.buildFutureCard();

  let symbolButtons = document.querySelectorAll(".play-button");
  symbolButtons.forEach((button) => button.addEventListener("click", this.clicked, false));
})


//issue with the second round 
//first round works nicely
//then cannot click on buttons anymore

function clicked(event) {
  pairItUp.symbolClicked += 1;

  let sym1 = game.cards.mainCard.map(element => element.name);

  let sym2 = event.target.alt;

  let result = pairItUp.checkIfSame(sym1, sym2)
  console.log(result);

  let finalResult = pairItUp.finalCheck(result);
  console.log(finalResult);

  nextRound(finalResult);
}


function nextRound(result) {
  if(result === "correct") {
    pairItUp.symbolClicked = 0;
    game.moveUp();
    game.cards.resetCards(1);
    game.buildFutureCard();
  }
  else if (result === "wrong") {
    console.log("Wrong guess! One more chance...")
  }
  else if (result === "win") {
    pairItUp.bestTimeUpdate();
    game.endGame();
    console.log("YOU WIN")
  }
  else if (result === "lose") {
    game.endGame();
    console.log("LOSER")
  }
  else {console.log("what?")}
}

/*
for each build function I had this at first:
    let card = this.cards.cardArray(this.cards.futureCard, this.cards.PlayerCard);
    this.cards.futureCard = card;

now replaced with:
    this.cards.cardArray(this.cards.futureCard, this.cards.PlayerCard);

I think it's better but not 100% certain it will work with future cards
*/













/* class Game{
  constructor(){
    this.gameIsOn = false
    this.cards = new Cards()
    this.palyer = new Player()
    this.board = new Board()
    this.topOfDeckCard = [1,2,4,78,9,9] 
  }

  play(){
    this.board.dealCards()
    this.palyer.palyHand()
    this.board.checkWinner()
  }

  announceWinner(){
    // ???
  }

  generateBoard(){
    return this.board.getHTML()
  }

}


window.addEventListener("load", () =>{
  const game = new Game()
  const board = game.genrateBoard()
  document.getElementById("game").appendChild(board)
  document.getElementById("start-butotn").addEventListener("click", ()=> game.gameisOn= true)

  document.getElementById("stop-butotn").addEventListener("click", ()=> game.gameisOn= false)
 
}) */