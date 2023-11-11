// Iteration 5: Store the player score and display it on the game over screen
let playAgainButton = document.querySelector("#play-again-button")
let score = document.querySelector("#score-board")

let newScore = localStorage.getItem("score")
score.innerHTML = newScore

playAgainButton.addEventListener("click",() =>{
    location.href = "./game.html"
})
    