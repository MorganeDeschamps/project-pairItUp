class Game {

  constructor() {
    this.cards = new Cards();
    this.pairItUp = new PairItUp();
    this.interval = null;
  }

  start() {
    console.log(this.cards.array.length)
    this.pairItUp.start();
    this.cards.resetCards(2);
    this.cards.buildCardAll("player");
    this.cards.buildCardAll("future");
    this.alert(this.findCommon());
  }

  playHand(event) {
    this.pairItUp.symbolClicked += 1;

    let sym1 = this.cards.mainCard.map(element => element.name);
    let sym2 = event.target.name;
    //console.log(sym2);

    let finalResult = this.pairItUp.finalCheck(this.pairItUp.checkIfSame(sym1, sym2));

    this.nextRound(finalResult);
  }

  nextRound(result) {
    switch (result) {
      case "correct":
        this.cardFade();
        this.pairItUp.symbolClicked = 0;
        this.moveUp();
        this.cards.resetCards(1);
        this.cards.buildCardAll("future");
        break;
      case "wrong":
        console.log("Wrong guess! One more chance...")
        break;
      case "win":
        this.pairItUp.bestTimeUpdate();
        this.winOrLose("win");
        this.endGame();
        console.log("YOU WIN")
        break;
      case "lose":
        this.winOrLose("lose");
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

  cardFade() {
    let cardPlayed = document.getElementById("player-card");
    cardPlayed.classList.toggle('move');
    setTimeout(() => {cardPlayed.classList.toggle('move')}, 500);
  }

  winOrLose(result) {
    switch(result) {
      case "win":
      alert('You Won!');
      break;
      case "lose":
      alert('You Lost!');
      break;
    } 
  }


  endGame() {
    this.cards.resetCards(3);
    this.cards.buildCardAll("main");
    this.pairItUp.stop();
  }


   
  findCommon () {
    let nodeList = document.querySelectorAll("#cards img");
    let nodeArray = [];
    nodeList.forEach(eachEl => {nodeArray.push(eachEl.name)}); 
    let filteredArray = nodeArray.filter((el, index) => nodeArray.indexOf(el) !== index)
    return filteredArray; 
  }

  alert (common) {
    if (common.length > 1) {
    console.log(`There are more than one symbol in common! Check ${common}`)
    } else {console.log("All good, only one in common!")}
  }

}
//something
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


/* function nextRound(result) {
  if (result === "correct") {
    pairItUp.symbolClicked = 0;
    game.moveUp();
    game.cards.resetCards(1);
    game.buildFutureCard();
  } else if (result === "wrong") {
    console.log("Wrong guess! One more chance...")
  } else if (result === "win") {
    pairItUp.bestTimeUpdate();
    game.endGame();
    console.log("YOU WIN")
  } else if (result === "lose") {
    game.endGame();
    console.log("LOSER")
  } else {
    console.log("what?")
  }
} */










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