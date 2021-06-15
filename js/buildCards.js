const cardsSymbolArr = []

class Cards {
    constructor() {
        this.array = cardsSymbolArr;
        this.name = "";
        this.img = "";

        /*
        this.mainCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7", "sym8"];
        this.playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
        this.futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
        */
    }
    

    filterArray(compareFirst, compareSecond) {
        if (compareSecond) {
            let firstFilter = this.array.filter(symbol => !compareFirst.includes(symbol));
            this.array = firstFilter.filter(symbol => !compareSecond.includes(symbol));
        } else {
            this.array = this.array.filter(symbol => !compareFirst.includes(symbol));
        }
        return this.array;
    }


    cardArray(cardToBuild, cardAbove) {

        cardToBuild.forEach ((symbol, index) => {
            let filteredArray = this.filterArray(symbols, cardAbove, cardToBuild);
            let random = filteredArray[Math.floor(Math.random() * filteredArray.length)];

            cardToBuild.splice(index, 1, random)
        })

        let randomCommon = cardAbove[Math.floor(Math.random() * cardAbove.length)];
        let randomIndex = Math.floor(Math.random() * cardToBuild.length);

        cardToBuild.splice(randomIndex, 0, randomCommon);

        return cardToBuild;
        
    }


    buildCard (cardBuilt) {
        let cardInner = ``;

        cardBuilt.forEach((symbol) => {
            let index = cardBuilt.indexOf(symbol)
            cardInner += 
            `<li class="symbol ${symbol.name}">
            <button class="play-button">
            <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
            </button>
            </li>`;
        })
    }


    attachCard () {

    }

}



//PLAYER CARD

function playerCardArray() {
    let filteredArray = symbols.filter(symbol => !mainCard.includes(symbol));
      
    
    playerCard.forEach ((symbol, index) => {
        let random = filteredArray[Math.floor(Math.random() * filteredArray.length)];

        playerCard.splice(index, 1, random)

        filteredArray = filteredArray.filter(el => !mainCard.includes(el) && !playerCard.includes(el))
    })
    
    let randomCommon = mainCard[Math.floor(Math.random() * mainCard.length)];
    let randomIndex = Math.floor(Math.random() * playerCard.length);

    playerCard.splice(randomIndex, 0, randomCommon);

    console.log(filteredArray.length);
    return playerCard;
}

function buildPlayerCard () {
    playerCard.forEach((symbol) => {
        let index = playerCard.indexOf(symbol)
        playerCardInner += 
        `<li class="player symbol ${symbol.name}">
        <button class="play-button">
        <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
        </button>
        </li>`;
    })
    playerCardElement.innerHTML = playerCardInner;
    //console.log(inner);
}
