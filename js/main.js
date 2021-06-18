window.addEventListener('load', (event) => {
  const game = new Game();

  const bestTime = localStorage.getItem('bestScore');
  game.pairItUp.printTime(bestTime, game.pairItUp.bestTimeElement);

  let playerCard = document.querySelector("#player-card");
  playerCard.classList.add("back")

  game.cards.buildCardAll("main");

  const startButton = document.getElementById("start");
  startButton.addEventListener("click", (event) => {
    game.start();
  })

  const instructionsButton = document.getElementById("instructions");
  instructionsButton.addEventListener("click", (event) => {
    game.instructions();
  })

  document.getElementById("player-card").addEventListener("click", (event) => game.playHand(event))
})

/*
const cardsTest = new CardsTest();

console.log(cardsTest.buildCard("main"));
 const symbolButtons = document.querySelectorAll(".play-button");
console.log(symbolButtons);

function buttons() {
  symbolButtons.forEach((button) => {
    button.addEventListener("click", (event) => game.clicked(event))
  })
}
 */
//notee