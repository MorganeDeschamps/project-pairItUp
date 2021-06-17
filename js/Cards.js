const symbols = [
{name:"apple", img: "apple.png"},
{name:"baguettemagique", img: "baguettemagique.png"},
{name:"baguettemagique2", img: "baguettemagique2.png"},
{name:"basket", img: "basket.png"},
{name:"beachball", img: "beachball.png"},
{name:"boat", img: "boat.png"},
{name:"book", img: "book.png"},
{name:"boots", img: "boots.png"},
{name:"branch", img: "branch.png"},
{name:"bread", img: "bread.png"},
{name:"bucket", img: "bucket.png"},
{name:"cake", img: "cake.png"},
{name:"camera", img: "camera.png"},
{name:"cappuccino", img: "cappuccino.png"},
{name:"car", img: "car.png"},
{name:"cards", img: "cards.png"},
{name:"cauldron", img: "cauldron.png"},
{name:"cinematickets", img: "cinematickets.png"},
{name:"circus", img: "circus.png"},
{name:"clap", img: "clap.png"},
{name:"cowskull", img: "cowskull.png"},
{name:"crab", img: "crab.png"},
{name:"crocodile", img: "crocodile.png"},
{name:"croissant", img: "croissant.png"},
{name:"dragon", img: "dragon.png"},
{name:"droplets", img: "droplets.png"},
{name:"elephant", img: "elephant.png"},
{name:"football", img: "football.png"},
{name:"fraise", img: "fraise.png"},
{name:"fries", img: "fries.png"},
{name:"giraffe", img: "giraffe.png"},
{name:"glasses", img: "glasses.png"},
{name:"guitar", img: "guitar.png"},
{name:"hat", img: "hat.png"},
{name:"jellyfish", img: "jellyfish.png"},
{name:"lemon", img: "lemon.png"},
{name:"lion", img: "lion.png"},
{name:"loupe", img: "loupe.png"},
{name:"magicball", img: "magicball.png"},
{name:"magichand", img: "magichand.png"},
{name:"manege", img: "manege.png"},
{name:"map", img: "map.png"},
{name:"monkey", img: "monkey.png"},
{name:"mountains", img: "mountains.png"},
{name:"octopus", img: "octopus.png"},
{name:"oldphone", img: "oldphone.png"},
{name:"orange", img: "orange.png"},
{name:"pancakes", img: "pancakes.png"},
{name:"parasol", img: "parasol.png"},
{name:"parasol2", img: "parasol2.png"},
{name:"pear", img: "pear.png"},
{name:"potion", img: "potion.png"},
{name:"pride", img: "pride.png"},
{name:"retrocar", img: "retrocar.png"},
{name:"retroradio", img: "retroradio.png"},
{name:"roulotte", img: "roulotte.png"},
{name:"scissors", img: "scissors.png"},
{name:"shoe", img: "shoe.png"},
{name:"skate", img: "skate.png"},
{name:"skull", img: "skull.png"},
{name:"speaker", img: "speaker.png"},
{name:"stopsign", img: "stopsign.png"},
{name:"sun", img: "sun.png"},
{name:"tape", img: "tape.png"},
{name:"tea", img: "tea.png"},
{name:"turtle", img: "turtle.png"},
{name:"unicorn", img: "unicorn.png"},
{name:"valise", img: "valise.png"},
{name:"water", img: "water.png"},
{name:"wateringcan", img: "wateringcan.png"},
{name:"wave", img: "wave.png"},
{name:"weights", img: "weights.png"},
{name:"whale", img: "whale.png"},
{name:"witchhat", img: "witchhat.png"},
{name:"wood", img: "wood.png"}
]

class Cards {
    constructor() {
        this.array = symbols;

        this.mainCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.playerCard = [1, 2, 3, 4, 5, 6, 7, 8];
        this.futureCard = [1, 2, 3, 4, 5, 6, 7, 8];

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

    random(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    cardRandom(cardToBuild, cardAbove) {
        if (!cardAbove) {
            cardToBuild.forEach((symbol, index) => {
                let selectFrom = this.filter(this.array, cardToBuild);

                cardToBuild.splice(index, 1, this.random(selectFrom))
            })
            return cardToBuild;
        } else {
            let selectFrom = this.filter(this.array, cardAbove);

            cardToBuild.forEach((symbol, index) => {
                cardToBuild.splice(index, 1, this.random(selectFrom))
                selectFrom = this.filter(selectFrom, cardToBuild, cardAbove);
            })
            cardToBuild.splice(cardToBuild.indexOf(this.random(cardToBuild)), 0, this.random(cardAbove));
            return cardToBuild;
        }
    }


    buildCardInner(cardElement, cardBuilt) {
        let cardInner = ``;
        cardBuilt.forEach((symbol, index) => {
            cardInner +=
                `<li class="symbol ${symbol.name}">
                <button class="play-button">
                <img name="${symbol.name}" class="img${index}" src="./img/${symbol.img}" alt="${symbol.name}">
                </button>
                </li>`;
        })
        cardElement.innerHTML = cardInner;
    }


    buildCardAll(which) {
        switch (which) {
            case "main":
                this.buildCardInner(this.mainCardElement, this.cardRandom(this.mainCard));
                break;
            case "player":
                this.buildCardInner(this.playerCardElement, this.cardRandom(this.playerCard, this.mainCard));
                break;
            case "future":
                this.buildCardInner(this.futureCardElement, this.cardRandom(this.futureCard, this.playerCard));
                break;
            default:
                console.log("no card built")
        }
    }

    resetCards(number) {
        switch (number) {
            case 3:
                this.mainCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                this.playerCard = [1, 2, 3, 4, 5, 6, 7, 8];
                this.futureCard = [1, 2, 3, 4, 5, 6, 7, 8];
                break;
            case 2:
                this.playerCard = [1, 2, 3, 4, 5, 6, 7, 8];
                this.futureCard = [1, 2, 3, 4, 5, 6, 7, 8];
                break;
            case 1:
                this.futureCard = [1, 2, 3, 4, 5, 6, 7, 8];
                break;
            default:
                console.log("you haven't reset properly")
        }
    }
}
//note