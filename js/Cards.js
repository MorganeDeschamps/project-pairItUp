const symbols = [{
        name: "apple",
        img: "apple.png"
    },
    {
        name: "baguettemagique",
        img: "baguettemagique.png"
    },
    {
        name: "baguettemagique2",
        img: "baguettemagique2.png"
    },
    {
        name: "basket",
        img: "basket.png"
    },
    {
        name: "beachball",
        img: "beachball.png"
    },
    {
        name: "boat",
        img: "boat.png"
    },
    {
        name: "book",
        img: "book.png"
    },
    {
        name: "boots",
        img: "boots.png"
    },
    {
        name: "branch",
        img: "branch.png"
    },
    {
        name: "bread",
        img: "bread.png"
    },
    {
        name: "bucket",
        img: "bucket.png"
    },
    {
        name: "cake",
        img: "cake.png"
    },
    {
        name: "camera",
        img: "camera.png"
    },
    {
        name: "cappuccino",
        img: "cappuccino.png"
    },
    {
        name: "car",
        img: "car.png"
    },
    {
        name: "cards",
        img: "cards.png"
    },
    {
        name: "cauldron",
        img: "cauldron.png"
    },
    {
        name: "cinematickets",
        img: "cinematickets.png"
    },
    {
        name: "circus",
        img: "circus.png"
    },
    {
        name: "clap",
        img: "clap.png"
    },
    {
        name: "cowskull",
        img: "cowskull.png"
    },
    {
        name: "crab",
        img: "crab.png"
    },
    {
        name: "crocodile",
        img: "crocodile.png"
    },
    {
        name: "croissant",
        img: "croissant.png"
    },
    {
        name: "dragon",
        img: "dragon.png"
    },
    {
        name: "droplets",
        img: "droplets.png"
    },
    {
        name: "elephant",
        img: "elephant.png"
    },
    {
        name: "football",
        img: "football.png"
    },
    {
        name: "fraise",
        img: "fraise.png"
    },
    {
        name: "fries",
        img: "fries.png"
    },
    {
        name: "giraffe",
        img: "giraffe.png"
    },
    {
        name: "glasses",
        img: "glasses.png"
    },
    {
        name: "guitar",
        img: "guitar.png"
    },
    {
        name: "hat",
        img: "hat.png"
    },
    {
        name: "jellyfish",
        img: "jellyfish.png"
    },
    {
        name: "lemon",
        img: "lemon.png"
    },
    {
        name: "lion",
        img: "lion.png"
    },
    {
        name: "loupe",
        img: "loupe.png"
    },
    {
        name: "magicball",
        img: "magicball.png"
    },
    {
        name: "magichand",
        img: "magichand.png"
    },
    {
        name: "manege",
        img: "manege.png"
    },
    {
        name: "map",
        img: "map.png"
    },
    {
        name: "monkey",
        img: "monkey.png"
    },
    {
        name: "mountains",
        img: "mountains.png"
    },
    {
        name: "octopus",
        img: "octopus.png"
    },
    {
        name: "oldphone",
        img: "oldphone.png"
    },
    {
        name: "orange",
        img: "orange.png"
    },
    {
        name: "pancakes",
        img: "pancakes.png"
    },
    {
        name: "parasol",
        img: "parasol.png"
    },
    {
        name: "parasol2",
        img: "parasol2.png"
    },
    {
        name: "pear",
        img: "pear.png"
    },
    {
        name: "potion",
        img: "potion.png"
    },
    {
        name: "pride",
        img: "pride.png"
    },
    {
        name: "retrocar",
        img: "retrocar.png"
    },
    {
        name: "retroradio",
        img: "retroradio.png"
    },
    {
        name: "roulotte",
        img: "roulotte.png"
    },
    {
        name: "scissors",
        img: "scissors.png"
    },
    {
        name: "shoe",
        img: "shoe.png"
    },
    {
        name: "skate",
        img: "skate.png"
    },
    {
        name: "skull",
        img: "skull.png"
    },
    {
        name: "speaker",
        img: "speaker.png"
    },
    {
        name: "stopsign",
        img: "stopsign.png"
    },
    {
        name: "sun",
        img: "sun.png"
    },
    {
        name: "tape",
        img: "tape.png"
    },
    {
        name: "tea",
        img: "tea.png"
    },
    {
        name: "turtle",
        img: "turtle.png"
    },
    {
        name: "unicorn",
        img: "unicorn.png"
    },
    {
        name: "valise",
        img: "valise.png"
    },
    {
        name: "water",
        img: "water.png"
    },
    {
        name: "wateringcan",
        img: "wateringcan.png"
    },
    {
        name: "wave",
        img: "wave.png"
    },
    {
        name: "weights",
        img: "weights.png"
    },
    {
        name: "whale",
        img: "whale.png"
    },
    {
        name: "witchhat",
        img: "witchhat.png"
    },
    {
        name: "wood",
        img: "wood.png"
    }
]

class Cards {
    constructor() {
        this.array = symbols;

        this.mainCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7", "sym8"];
        this.playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
        this.futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];

        this.mainCardElement = document.getElementById("main-card");
        this.playerCardElement = document.getElementById("player-card");
        this.futureCardElement = document.getElementById("future-card");
    }

    filter(origin, current, previous) {
        let filteredArray;
        if (!previous) {
            filteredArray = origin.filter(symbol => !current.includes(symbol));
        } else {
            filteredArray = origin.filter(el => !current.includes(el) && !previous.includes(el))
        }
        return filteredArray;
    }

    cardRandom(cardToBuild, cardAbove) {
        if (!cardAbove) {
            cardToBuild.forEach((symbol, index) => {
                let selectFrom = this.filter(this.array, cardToBuild);
                let random = selectFrom[Math.floor(Math.random() * selectFrom.length)];

                cardToBuild.splice(index, 1, random)
            })
            return cardToBuild;
        } else {
            let selectFrom = this.filter(this.array, cardAbove);

            cardToBuild.forEach((symbol, index) => {
                let random = selectFrom[Math.floor(Math.random() * selectFrom.length)];

                cardToBuild.splice(index, 1, random)
                selectFrom = this.filter(selectFrom, cardToBuild, cardAbove);
            })

            let randomCommon = cardAbove[Math.floor(Math.random() * cardAbove.length)];
            let randomIndex = Math.floor(Math.random() * cardToBuild.length);

            cardToBuild.splice(randomIndex, 0, randomCommon);
            return cardToBuild;
        }
    }


    buildCard(cardElement, cardBuilt) {
        let cardInner = ``;
        cardBuilt.forEach((symbol, index) => {
            cardInner +=
                `<li class="symbol ${symbol.name}">
            <button class="play-button">
            <img class="img${index}" src="img/${symbol.img}" alt="${symbol.name}" width="100" height="100">
            </button>
            </li>`;
        })
        cardElement.innerHTML = cardInner;
        cardElement.querySelector("button").addEventListener("click", )
    }


    buildMainCard() {
        this.buildCard(this.mainCardElement, this.cardRandom(this.mainCard));
    }

    buildPlayerCard() {
        this.buildCard(this.playerCardElement, this.cardRandom(this.playerCard, this.mainCard));
    }

    buildFutureCard() {
        this.buildCard(this.futureCardElement, this.cardRandom(this.futureCard, this.playerCard));
    }


    resetCards(number) {
        if (number === 3) {
            this.mainCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7", "sym8"];
            this.playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
            this.futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
        } else if (number === 2) {
            this.playerCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
            this.futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];

        } else if (number === 1) {
            this.futureCard = ["sym0", "sym1", "sym2", "sym3", "sym4", "sym5", "sym6", "sym7"];
        } else {
            console.log("you haven't reset properly")
        }

    }


}