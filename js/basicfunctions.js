class PairItUp {
    constructor(cards, symbols) {
        this.cards = cards;
        this.symbols = symbols;

        this.symbolClicked = 0;
        this.cardsGuessed = 0;
        this.cardsLeft = null;

        this.intervalId = null;
        this.currentTime = 0;
        this.bestTimeSeconds = 0;
        this.bestTime = "";
      }


    createCard() {

    }

    gameOver() {
        clearInterval(this.intervalId);
        this.currentTime = 0;
        this.symbolClicked = 0;
        this.cardsGuessed = 0;
        this.cardsLeft = null;
        //add some gameover stuff
    }

    youWin() {
        clearInterval(this.intervalId);
        this.bestTimeUpdate();
        this.symbolClicked = 0;
        this.cardsGuessed = 0;
        this.cardsLeft = null;
    }

    checkIfSame(symbol1, symbol2) {
        this.symbolClicked++;
        if (symbol1 === symbol2) {
          this.cardsGuessed++;
          this.cardsLeft--;
          this.checkIfWon();
          this.symbolClicked = 0;
          return true;
        } else {
          this.wrongGuess();
          return false;
        } 
    }

    wrongGuess() {
        if (this.symbolClicked < 2) {
            console.log("Wrong guess! One more chance...")
        } else {
            this.gameOver();
        }
    }

    checkIfWon() {
        if(this.cardsLeft === 0) {
            this.youWin();
            return true;
        } else {
            return false;}
    }


    start(callback) {
        this.cardsLeft = 25;
        this.intervalId = setInterval(() => {
          if(callback) {callback};
          this.currentTime += 1;
        }, 1000) 
    }

    getTime() {
        let minutes = Math.floor(this.currentTime / 60);
        let seconds = Math.floor(this.currentTime % 60);

        let minuteString = minutes.toString();
        let secondString = seconds.toString();

        minutes = ("0" + minuteString).sliced(-2);
        seconds = ("0" + secondString).sliced(-2);

        return (minutes + seconds);
    }

    malusTime() {
        this.currentTime += 5;
    }

    bonusTime() {
        this.currentTime -= 10;
    }

    surprises() {

    }

    bestTimeUpdate() {
        if (this.currentTime < this.bestTimeSeconds) {
            let splitTime;
            let timeNow = this.getTime();

            splitTime = timeNow[0] + timeNow[1] + ":" + timeNow[2] + timeNow[3];
            this.bestTime = splitTime;
            this.currentTime = 0;
        } else {
            this.currentTime = 0;
        }
    }

}
