function getComputerChoice(){
const computerChoice = ["Rock","Paper","Scissors"]
const getRandomIndex = Math.floor(Math.random()*computerChoice.length)
return computerChoice[getRandomIndex]
}
console.log(getComputerChoice())

