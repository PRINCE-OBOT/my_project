

const choices = ["rock","paper","scissors"]

function getComputerChoice(){
    let getRandomIndex = Math.floor(Math.random()*choices.length)
    return choices[getRandomIndex]
}

function getHumanChoice(){
    let humanChoice = prompt('Input your choice(Rock, paper or scissor)').toLowerCase()
    if(humanChoice === 'rock' || humanChoice ==='scissors' || humanChoice === 'paper'){
        return humanChoice
    } 
    else{
        alert('Invalid input')
    }
}
console.log(getHumanChoice())