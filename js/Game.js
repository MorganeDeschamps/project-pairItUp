class Game {

  constructor() {
    this.cards = new Cards();
    this.pairItUp = new PairItUp();
    this.interval = null;
    this.playerCard = document.querySelector("#player-card");
    this.mainCardElement = document.getElementById("main-card");

  }

  start() {
    console.log(this.cards.array.length)
    this.playerCard.classList = "list-parent player";
    this.mainCardElement.classList.remove("greyed");
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
        this.endGame("win");
        console.log("YOU WIN")
        break;
      case "lose":
        this.endGame("lose");
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


  endGame(result) {
    this.cards.resetCards(3);
    this.cards.emptyCards();
    this.pairItUp.stop();
    this.cards.buildCardAll("main");

    if (result === "win") {
      this.playerCard.classList.add("win");
      alert("Nice one!");
    } else if (result === "lose") {
      this.playerCard.classList.add("lose")
      alert('Sorry, you lost this one... Try again?');
    } else {console.log("no winners here")};

  }


  instructions() {
    this.endGame();
    this.playerCard.classList = "list-parent player back";
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
