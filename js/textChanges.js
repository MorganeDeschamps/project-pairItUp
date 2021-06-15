class Text {

    constructor() {
        this.pairItUp = new PairItUp();
        this.cards = new Cards();




    

    bestTime() {
        let bestTime = this.pairItUp.bestTime;
        this.bestTimeElement.innerText = bestTime;
    }

    countCardsLeft() {
        this.cardsLeftElement.innerText = pairItUp.cardsLeft;
    }



}
