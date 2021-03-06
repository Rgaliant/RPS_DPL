
var numTies = 0
var userScore = 0
var computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
const choices_div = document.getElementById("choices")
const new_btn_div = document.querySelector(".new-btn")

function getComputerChoice () {
  const choices = ["r", "p", "s"]
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

function convertToWord(letter) {
  if (letter === "r") return "Rock"
  if (letter === "p") return "Paper"
  return "Scissors"
}

function win(userChoice, computerChoice) {
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} you WIN! 🍻`
}

function lose(userChoice, computerChoice) {
  computerScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} you  LOSE! 😭`
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws to ${convertToWord(computerChoice)}${smallCompWord} you DRAW! 🤯`
}

function resetGame() {
  userScore = 0
  computerScore = 0
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
}

function game(userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice)
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice) 
      break
    case "rr":
    case "pp":
    case "ss":  
      draw(userChoice, computerChoice)
      break
  }
}

function hideChoices() {
  choices_div.classList.toggle("hidden")
}

function main() {
  rock_div.addEventListener("click", function() {
  game("r")  
  })
  paper_div.addEventListener("click", function() {
    game("p")
  })
  scissors_div.addEventListener("click", function() {
    game("s")
  })
  new_btn_div.addEventListener("click", function() {
    resetGame()
  })
}



main()



