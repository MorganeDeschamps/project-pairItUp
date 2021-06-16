class Game {

  constructor() {
    this.cards = new Cards();
    this.pairItUp = new PairItUp();
  }

  start() {
    //pairItUp.intervalId = null;
    //interval getting crazy if you click start more than once - not sure why
    //tried "resetting" it here (l61) and on pairItUp.start() but no luck
    this.pairItUp.start();
    this.cards.resetCards(2);
    this.cards.buildPlayerCard();
    this.cards.buildFutureCard();
  }

  //issue with the second round 
  //first round works nicely
  //then cannot click on buttons anymore
  playHand(event) {
    this.pairItUp.symbolClicked += 1;

    let sym1 = this.cards.mainCard.map(element => element.name);
    let sym2 = event.target.name;
    //console.log(sym2);
    //let result = this.pairItUp.checkIfSame(sym1, sym2)
    let finalResult = this.pairItUp.finalCheck(this.pairItUp.checkIfSame(sym1, sym2));

    this.nextRound(finalResult);
  }

  nextRound(result) {
    switch (result) {
      case "correct":
        this.pairItUp.symbolClicked = 0;
        this.moveUp();
        this.cards.resetCards(1);
        this.cards.buildFutureCard();
        break;
      case "wrong":
        console.log("Wrong guess! One more chance...")
        break;
      case "win":
        this.pairItUp.bestTimeUpdate();
        this.endGame();
        console.log("YOU WIN")
        break;
      case "lose":
        this.endGame();
        console.log("LOSER")
        break
      default:
        console.log("what?", result)
    }
  }

  moveUp() {
    this.cards.mainCard = this.cards.playerCard;
    this.cards.mainCardElement.innerHTML = this.cards.playerCardElement.innerHTML;

    this.cards.playerCard = this.cards.futureCard;
    this.cards.playerCardElement.innerHTML = this.cards.futureCardElement.innerHTML;
  }

  endGame() {
    this.cards.resetCards(3);
    this.cards.buildMainCard();
    this.pairItUp.stop();
  }

}


/* 
function buttons(event) {
  game.symbolButtons.addEventListener = game.clicked(event);
}
 */


//game.symbolButtons.forEach((button) => button.addEventListener("click", this.clicked, false));

/* 
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
 */



/*
for each build function I had this at first:
    let card = this.cards.cardArray(this.cards.futureCard, this.cards.PlayerCard);
    this.cards.futureCard = card;

now replaced with:
    this.cards.cardArray(this.cards.futureCard, this.cards.PlayerCard);

I think it's better but not 100% certain it will work with future cards




buttons() {
    //this.symbolButtons.forEach((button) => button.addEventListener("click", this.clicked, false));
    this.symbolButtons.addEventListener("click", this.clicked, false);
  }


  buttons() {
    this.symbolButtons.forEach((button) => button.onclick = this.clicked)
  }
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