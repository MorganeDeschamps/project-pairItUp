![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# M1 Project - PairItUp!



Have you ever played Dobble (Spot it! in the US)? 

If you haven’t, here's a 30s video to see what the game is all about: https://youtu.be/6RxKwyFKtmY

![dobble_eclate_pageaccueil-1](https://user-images.githubusercontent.com/84286749/122556161-76389680-d03b-11eb-9026-e7a99d405300.png)


It is a very simple game based on **pattern recognition**. Every card has one symbol in common with every other card. You simply need to find that symbol, name it, and move on to the next card. 

If you have played it before, you know that it is much more difficult (and more fun!) than it looks.

I have been playing it for years, and love how versatile it is. You can play it with anyone, at any age, in any language. I have even used it as a teaching tool to practice vocabulary, or as a way to break the ice and meet people when travelling. 

Adapting this game into a web app was an obvious choice for my project. 

<br>

## Description:


PairItUp! is a simplified online version of the Dobble game, using HTML, CSS, and JS. 

The objective is: find the matching symbol and finish the rounds as quickly as possible. 

**Game logic:**

Two cards on the screen, the player card and the computer card (or “main” card). 

Each card displays 9 symbols, randomly selected from a file. The cards have one (*and only one!*) symbol in common. 

You have to find what the symbol is and click on it. Your card will be removed from your deck and become the new main card.

There are 10 cards in your deck, and the goal is to get through them as quickly as possible. 
A timer goes off when you start the game, and your best time will be stored locally.

Clicking on the wrong symbol will add 5sec to your timer. Two wrong clicks in the same round and it’s game over.


<br>

## Data structure:

1. main folder: index.html

2. styles subfolder: styles.css

3. js subfolder: Basics.js, Cards.js, Game.js, main.js

4. img subfolder: all symbols used to construct the cards - png files

5. background images subfolder: images for the title, start button, and instructions

<br>

## Javascript structure:

<br> 

### 1. Basics.js - class


#### Class PairItUp
  
**In constructor:**
- building blocks of the game: timer, best time variable, cards left in the deck, number of clicks
- DOM references to the matching elements.
    
    
**Methods:**
- start and stop functions, reset counters and start/stop intervals as needed.
- function to update the cardsLeft (number of cards in the deck) depending on the argument passed. also prints the value in the DOM.
- functions to update the timer and best time info, and print those values in the DOM
- functions to check the results of a click : depending on the situation, will return one of four values: "corrrect", "wrong", "win", "lose"
- malusTime function: adds 5sec to the timer in case of wrong click. triggers a CSS animation.


<br> 

### 2. Cards.js - array and class

#### Array symbols : array of objects, stores the name and file name of all symbols used to build the cards**

#### Class Cards
   
**In constructor:** 
   
- references the symbols array  
- arrays for all 3 cards: main, player, future. filled with 9 (for main) or 8 (player and future) numbers used as placeholders.  
- DOM references to the card elements


   **Methods:**
   
- filter and random, called by the card building functions (to try and make those a bit cleaner)
- cardRandom: selects the symbols. takes 1 or 2 arguments: card to build, or card to build and card above. For the first main card, only 1 needed (the card symbols are fully random). For player and future cards, they need to be compared to the card above them to avoid duplicates. Stores the return values in the card arrays in the constructor 
- buildCardInner: create the HTML elements for each symbol on each card, and attaches them to the DOM
- global function to call cardRandom and buildCardInner. argument used in a switch statement, depending on which card needs to be built. there to help clarify the code in the next pages.
- reset functions to empty the cards in the DOM, and reset each card array in the constructor (switch statement again)

<br>

### 3. Game.js - class


#### Class Game

**In constructor:**
- links back to PairItUp and Cards classes
- DOM references to the player and main cards


**Methods:**
 - starting function: updates the classList on both cards to change CSS style. callbacks to start the timer and card count, create the player and future card, and to check for duplicates.
- game mechanics functions: gets info on the symbol from click events, callbacks to check the result, and feeds this result to a switch function to trigger different actions (end the game / move the cards / add malus time)
- more functions updating classLists to trigger CSS animations, called by different results

<br>

### 4. main.js - event listeners

**"Load" event listener:**
- links back to Game class
- gets bestTime info from local storage and prints on DOM
- calls the creation of the main card
- uses classList action to trigger CSS on the player card (to display instructions and block pointer events)
- creates 3 more event listeners ("click"): 
    - start button: calls back start() in the Game class
    - instructions button: calls back instructions() in Game class - turns off game and "turns" the player card to display instructions
    - buttons on player card: calls back playHand() in Game class, triggers the result check etc..



