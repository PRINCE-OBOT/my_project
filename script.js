

const choices = ["rock","paper","scissors"]

function getComputerChoice(){
    let getRandomIndex = Math.floor(Math.random()*choices.length)
    return choices[getRandomIndex]
}



function getHumanChoice(){
    let humanChoice = prompt('Input your choice(Rock, paper or scissor)')
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice === 'rock' || humanChoice ==='scissors' || humanChoice === 'paper'){
        return humanChoice
    } 
    else{
        alert('Invalid input')
        return getHumanChoice()
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`Your choice: ${humanChoice}\nComputer choice: ${computerChoice}\nEqual`)
    }
    else if((humanChoice ==='rock' && computerChoice ==='scissors') ||
            (humanChoice ==='paper' && computerChoice ==='rock') ||
            (humanChoice ==='scissors' && computerChoice === 'paper')){
                humanScore++
                console.log(`Your choice: ${humanChoice} \nComputer choice:${computerChoice}\n${humanChoice} beat ${computerChoice}`)
                
            }
    else{
        computerScore++
        console.log(`Your choice: ${humanChoice} \nComputer choice: ${computerChoice}\n${computerChoice} beat ${humanChoice}`)
    }
}
   
function playGame(){
    let start = confirm('Play rock, paper, scissors game')
        if(start == false){
            console.log('cancelled')
            return 
        }
       
        for(i=0; i<5; i++){
            let humanChoice = getHumanChoice()
            let computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
            console.log(`Your score: ${humanScore} \nComputer Score: ${computerScore}`)
        }
        if(humanScore > computerScore){
            console.log('You win!')
        }
        else if (humanScore < computerScore){
            console.log('You lose!')
        }
        else{
            ('Draw')
        }
        }
        playGame()