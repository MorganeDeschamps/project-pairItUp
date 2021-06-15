class Game{
  constructor(){
    this.gameIsOn = false
    this.cards = new Cards()
    this.palyer = new Player()
    this.board = new Board()
    this.topOfDeckCard = [1,2,4,78,9,9] 
  }

  play(){
    this.board.dealCards()
    this.palyer.palyHand()
    this.board.checkWinner()
  }

  announceWinner(){
    // ???
  }

  generateBoard(){
    return this.board.getHTML()
  }

}


window.addEventListener("load", () =>{
  const game = new Game()
  const board = game.genrateBoard()
  document.getElementById("game").appendChild(board)
  document.getElementById("start-butotn").addEventListener("click", ()=> game.gameisOn= true)

  document.getElementById("stop-butotn").addEventListener("click", ()=> game.gameisOn= false)
 
})