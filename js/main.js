window.addEventListener('load', (event) => {
  const game = new Game();

  game.cards.buildCardAll("main");

  const startButton = document.getElementById("start");
  startButton.addEventListener("click", (event) => {
    game.start();
  })

  document.getElementById("player-card").addEventListener("click", (event) => game.playHand(event))
})

/* const symbolButtons = document.querySelectorAll(".play-button");
console.log(symbolButtons);

function buttons() {
  symbolButtons.forEach((button) => {
    button.addEventListener("click", (event) => game.clicked(event))
  })
}
 */
//notee