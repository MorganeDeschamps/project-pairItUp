class Game {

  constructor() {
    this.cards = new Cards;
  }

  buildMainCard() {
    let mainCardElement = document.getElementById("main-card");
    this.cards.buildCard(mainCardElement, this.cards.cardRandom(this.cards.mainCard)); 
    //this.cards.attachCard(mainCardElement, inner);
  }

  buildPlayerCard() {
    let playerCardElement = document.getElementById("player-card");
    this.cards.buildCard(playerCardElement, this.cards.cardRandom(this.cards.playerCard, this.cards.mainCard)); 
  }

  buildFutureCard() {
    let futureCardElement = document.getElementById("future-card");
    this.cards.buildCard(futureCardElement, this.cards.cardRandom(this.cards.futureCard, this.cards.playerCard)); 
  }
}


const game = new Game();

let startButton = document.getElementById("start");

window.addEventListener('load', (event) => {
  game.buildMainCard();
})

startButton.addEventListener("click", (event) => {
  game.cards.reset();
  game.buildPlayerCard();
  game.buildFutureCard();
})


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