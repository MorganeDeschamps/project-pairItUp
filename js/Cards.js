const symbols = [
    {name: "apple", img: "apple.png"},
    {name: "baguettemagique", img: "baguettemagique.png"},
    {name: "baguettemagique2", img: "baguettemagique2.png"},
    {name: "basket", img: "basket.png"},
    {name: "beachball", img: "beachball.png"},
    {name: "boat", img: "boat.png"},
    {name: "book", img: "book.png"},
    {name: "boots", img: "boots.png"},
    {name: "branch", img: "branch.png"},
    {name: "bread", img: "bread.png"},
    {name: "bucket", img: "bucket.png"},
    {name: "cake", img: "cake.png"},
    {name: "camera", img: "camera.png"},
    {name: "cappuccino", img: "cappuccino.png"},
    {name: "car", img: "car.png"},
    {name: "cards", img: "cards.png"},
    {name: "cauldron", img: "cauldron.png"},
    {name: "cinematickets", img: "cinematickets.png"},
    {name: "circus", img: "circus.png"},
    {name: "clap", img: "clap.png"},
    {name: "cowskull", img: "cowskull.png"},
    {name: "crab", img: "crab.png"},
    {name: "crocodile", img: "crocodile.png"},
    {name: "croissant", img: "croissant.png"},
    {name: "dragon", img: "dragon.png"},
    {name: "droplets", img: "droplets.png"},
    {name: "elephant", img: "elephant.png"},
    {name: "football", img: "football.png"},
    {name: "fraise", img: "fraise.png"},
    {name: "fries", img: "fries.png"},
    {name: "giraffe", img: "giraffe.png"},
    {name: "glasses", img: "glasses.png"},
    {name: "guitar", img: "guitar.png"},
    {name: "hat", img: "hat.png"},
    {name: "jellyfish", img: "jellyfish.png"},
    {name: "lemon", img: "lemon.png"},
    {name: "lion", img: "lion.png"},
    {name: "loupe", img: "loupe.png"},
    {name: "magicball", img: "magicball.png"},
    {name: "magichand", img: "magichand.png"},
    {name: "manege", img: "manege.png"},
    {name: "map", img: "map.png"},
    {name: "monkey", img: "monkey.png"},
    {name: "mountains", img: "mountains.png"},
    {name: "octopus", img: "octopus.png"},
    {name: "oldphone", img: "oldphone.png"},
    {name: "orange", img: "orange.png"},
    {name: "pancakes", img: "pancakes.png"},
    {name: "parasol", img: "parasol.png"},
    {name: "parasol2", img: "parasol2.png"},
    {name: "pear", img: "pear.png"},
    {name: "potion", img: "potion.png"},
    {name: "pride", img: "pride.png"},
    {name: "retrocar", img: "retrocar.png"},
    {name: "retroradio", img: "retroradio.png"},
    {name: "roulotte", img: "roulotte.png"},
    {name: "scissors", img: "scissors.png"},
    {name: "shoe", img: "shoe.png"},
    {name: "skate", img: "skate.png"},
    {name: "skull", img: "skull.png"},
    {name: "speaker", img: "speaker.png"},
    {name: "stopsign", img: "stopsign.png"},
    {name: "sun", img: "sun.png"},
    {name: "tape", img: "tape.png"},
    {name: "tea", img: "tea.png"},
    {name: "turtle", img: "turtle.png"},
    {name: "unicorn", img: "unicorn.png"},
    {name: "valise", img: "valise.png"},
    {name: "water", img: "water.png"},
    {name: "wateringcan", img: "wateringcan.png"},
    {name: "wave", img: "wave.png"},
    {name: "weights", img: "weights.png"},
    {name: "whale", img: "whale.png"},
    {name: "witchhat", img: "witchhat.png"},
    {name: "wood", img: "wood.png"}
]

class Cards {
    constructor() {
        this.array = symbols;
        this.name = "";
        this.img = "";

        /*
        this.mainCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7", "sym8"];
        this.playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
        this.futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
        */
    }
    

    filterArray(compareItself, otherArray) {
        let filteredArray;
        if (otherArray) {
            let firstFilter = this.array.filter(symbol => !otherArray.includes(symbol));
            filteredArray = firstFilter.filter(symbol => !compareItself.includes(symbol));
        } else {
            filteredArray = this.array.filter(symbol => !compareItself.includes(symbol));
        }
        return filteredArray;
    }



    cardArray (cardToBuild, cardAbove) {

        if(!cardAbove) {
            cardToBuild.forEach ((symbol, index) => {
                let filteredArray = this.filterArray(cardToBuild);
                let random = filteredArray[Math.floor(Math.random() * filteredArray.length)];

                cardToBuild.splice(index, 1, random)
            })

            return cardToBuild;

        } else if (cardAbove) {
            cardToBuild.forEach ((symbol, index) => {
                let filteredArray = this.filterArray(cardToBuild, cardAbove);
                let random = filteredArray[Math.floor(Math.random() * filteredArray.length)];

                cardToBuild.splice(index, 1, random)
            })

            let randomCommon = cardAbove[Math.floor(Math.random() * cardAbove.length)];
            let randomIndex = Math.floor(Math.random() * cardToBuild.length);

            cardToBuild.splice(randomIndex, 0, randomCommon);

            return cardToBuild;
        }
    }
        


    buildCard (cardBuilt) {
        let cardInner = ``;

        cardBuilt.forEach((symbol, index) => {
            cardInner += 
            `<li class="symbol ${symbol.name}">
            <button class="play-button">
            <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
            </button>
            </li>`;
        })

        return cardInner;

    }



    attachCard (cardElement, innerResult) {
        cardElement.innerHTML = innerResult;
    }
    

}
