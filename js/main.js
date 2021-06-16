window.addEventListener('load', (event) => {
  const game = new Game();

  game.cards.buildCardAll("main");

  const startButton = document.getElementById("start");
  startButton.addEventListener("click", (event) => {
    game.start();
    buttons();
  })

  document.getElementById("player-card").addEventListener("click", (event) => game.playHand(event))


})

const symbolButtons = document.querySelectorAll(".play-button");

function buttons() {
  symbolButtons.forEach((button) => {
    button.addEventListener("click", (event) => game.clicked(event))
  })
}

//note