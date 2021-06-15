class Game {

  constructor() {
    this.cards = new Cards;
    //should I have the cards arrays here or in the Cards class like I've done? 
    //check with Marco or Fede
  }

  buildMainCard() {
    let card = this.cards.cardArray(this.cards.mainCard);
    this.cards.mainCard = card;
    //create the array and change it in constructor
    //is the card var necessary? check with marco or fede
    
    let inner = this.cards.buildCard(this.cards.mainCard); 
    //create innerHTML

    let mainCardElement = document.getElementById("main-card");
    this.cards.attachCard(mainCardElement, inner);
    //attach the innerHTML to the parent

  }

  buildPlayerCard() {
    let card = this.cards.cardArray(this.cards.playerCard, this.cards.mainCard);
    this.cards.playerCard = card;
    
    let inner = this.cards.buildCard(this.cards.playerCard); 

    let playerCardElement = document.getElementById("player-card");
    this.cards.attachCard(playerCardElement, inner);

  }

  buildFutureCard() {
    let card = this.cards.cardArray(this.cards.futureCard, this.cards.PlayerCard);
    this.cards.futureCard = card;
    
    let inner = this.cards.buildCard(this.cards.futureCard); 

    let futureCardElement = document.getElementById("future-card");
    this.cards.attachCard(futureCardElement, inner);

  }
}

window.addEventListener('load', (event) => {
  const game = new Game()

  game.buildMainCard();
  
})
















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