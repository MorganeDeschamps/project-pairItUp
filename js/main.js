window.addEventListener('load', (event) => {
  const game = new Game();
  const startButton = document.getElementById("start");
  game.cards.buildMainCard();

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