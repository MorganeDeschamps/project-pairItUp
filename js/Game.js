class Game {

  constructor() {
    this.cards = new Cards;
  }

  buildMainCard() {
    this.cards.cardMain(this.cards.mainCard);
    //change the array in constructor, replace each el with random symbols
    
    let inner = this.cards.buildCard(this.cards.mainCard); 
    //create innerHTML

    let mainCardElement = document.getElementById("main-card");
    this.cards.attachCard(mainCardElement, inner);
    //attach the innerHTML to the parent

    console.log(this.cards.mainCard);

  }

  buildPlayerCard() {
    console.log("test player", this.cards.mainCard)
    this.cards.cardPlayerFuture(this.cards.playerCard, this.cards.mainCard);
    
    let inner = this.cards.buildCard(this.cards.playerCard); 

    let playerCardElement = document.getElementById("player-card");
    this.cards.attachCard(playerCardElement, inner);

  }

  buildFutureCard() {
    this.cards.cardPlayerFuture(this.cards.futureCard, this.cards.PlayerCard);
    
    let inner = this.cards.buildCard(this.cards.futureCard); 

    let futureCardElement = document.getElementById("future-card");
    this.cards.attachCard(futureCardElement, inner);

  }
}

const game = new Game();


let startButton = document.getElementById("start");

window.addEventListener('load', (event) => {
  game.buildMainCard();
  console.log("test main" , game.cards.mainCard)

})

startButton.addEventListener("click", (event) => {
  game.buildPlayerCard();
  game.buildFutureCard();

  //console.log("test player", game.cards.playerCard);
  //console.log("test future", game.cards.futureCard);

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