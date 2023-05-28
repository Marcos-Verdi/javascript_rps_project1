const computerChoice = document.getElementById("computer-choice")
const playerChoice = document.getElementById("player-choice")
const resultMessage = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let p = ''
let c = ''

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    playerChoice.innerText = e.target.id
    computerChoice.innerText = compChoice()
    p = playerChoice.innerText
    c = computerChoice.innerText
    resultMessage.innerText = decideWinner(c,p)
}))

const compChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    let  randomChoice = choices[randomNumber]
    return randomChoice
}

const decideWinner = (c,p) => {
    if(p === c) {
        return "It's a draw"
    } else if(p === "Rock" & c === "Paper") {
        return "Computer wins"
    } else if(p === "Scissors" & c === "Rock") {
        return "Computer wins"
    } else if(p === "Paper" & c === "Scissors") {
        return "Computer wins"
    } else {
        return "You win!!!"
    }
}
