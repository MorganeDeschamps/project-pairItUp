class PairItUp {
    constructor(cards, symbols) {
        this.cards = cards;
        this.symbols = symbols;

        this.symbolClicked = 0;
        this.cardsLeft = null;

        this.intervalId = null;
        this.currentTime = 0;
        this.bestTimeSeconds = 0;
        this.bestTime = "";
      }


    createCard() {

    }



    start() {
        this.currentTime = 0;
        this.cardsLeft = 25;
        this.intervalId = setInterval(() => {
          this.currentTime += 1;
        }, 1000) 
    }

    //symbol click event:
    checkIfSame(symbol1, symbol2) {
        //this.symbolClicked += 1;
        if (symbol1.includes(symbol2)) {
          this.cardsLeft--;
          this.symbolClicked = 0;
          this.checkIfWon();
          return true;
        } else {
          this.wrongGuess();
          return false;
        } 
    }

    //if correct symbol:
    //is the else necessary? Not sure
    checkIfWon() {
        if(this.cardsLeft === 0) {this.youWin();}
    }

    
    youWin() {
        clearInterval(this.intervalId);
        this.bestTimeUpdate();
        this.cardsLeft = null;
        //add some you win stuff
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



    //if wrong symbol:
    wrongGuess() {
        if (this.symbolClicked < 2) {
            this.malusTime();
            console.log("Wrong guess! One more chance...")
        } else {
            this.gameOver();
        }
    }

    malusTime() {
        this.currentTime += 5;
    }


    //if 2 wrong guesses on same card:
    gameOver() {
        clearInterval(this.intervalId);
        //this.symbolClicked = 0;
        this.cardsLeft = null;
        //add some gameover stuff
        console.log("byyyyye");
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


/*

    bonusTime() {
        this.currentTime -= 10;
    }

    surprises() {

    }

*/

}
