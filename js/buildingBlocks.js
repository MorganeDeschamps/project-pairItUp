class PairItUp {
    constructor() {
        this.symbolClicked = 0;
        this.cardsLeft = 25;

        this.intervalId = null;
        this.currentTime = 0;
        this.bestTimeSeconds = 0;
        this.bestTime = "";

        this.minDecElement = document.getElementById('minDec');
        this.minUniElement = document.getElementById('minUni');
        this.secDecElement = document.getElementById('secDec');
        this.secUniElement = document.getElementById('secUni'); 
        this.bestTimeElement = document.getElementById("best-time");
        this.cardsLeftElement = document.getElementById("cards-left");
    }

    start() {
        this.currentTime = 0;
        this.cardsLeftElement.innerText = this.cardsLeft;
        this.intervalId = setInterval(() => {
          this.currentTime += 1;
          this.printTime(this.getTime());
        }, 1000) 
    }

    stop() {
        this.symbolClicked = 0;
        this.cardsLeft = 25;
        this.intervalId = null;
        this.currentTime = 0;
    }

    //TIME STUFF
    getTime() {
        let min = Math.floor(this.currentTime / 60);
        let sec = this.currentTime % 60;

        let minutes = this.computeTwoDigitNumber(min);
        let seconds = this.computeTwoDigitNumber(sec);

        let string = (minutes + seconds);
        let time = string.split("");

        return time; 
    }

    computeTwoDigitNumber(value) {
        let twoDigits;
        let valueString = value.toString();
        if (valueString.length === 1) {
          twoDigits = "0" + valueString;
        } else {
          twoDigits = valueString;
        }
        return twoDigits
    }

    printTime(time) {
        this.minDecElement.innerText = time[0];
        this.minUniElement.innerText = time[1];
        this.secDecElement.innerText = time[2];
        this.secUniElement.innerText = time[3];
    }


    bestTimeUpdate() {
        if (this.currentTime < this.bestTimeSeconds) {
            this.bestTimeElement.innerText = this.currentTime;
        }
        this.currentTime = 0;
    }



    //LOGIC TIME
    checkIfSame(sym1, sym2) {
        if(sym1.includes(sym2)) {
            return true
        } else {
            return false
        }
    }


    finalCheck (result) {
        if (result) {
          pairItUp.cardsLeft--;
          pairItUp.symbolClicked = 0;
          return this.didYouWin();
        } else {
          return this.wrongGuess();
        }
    }

    didYouWin() {
        if(this.cardsLeft === 0) {return "win"}
        else {return "correct"}
    }


    //if wrong symbol:
    wrongGuess() {
        if (this.symbolClicked < 2) {
            this.currentTime += 5;
            return "wrong";
        } else {
            return "lose"
        }
    }

    /* 
    bonusTime() {
        this.currentTime -= 10;
    }

    surprises() {

    } */



}
