let humanScore = 0;
let computerScore = 0;

if(confirm(`Do you want to play (Rock, Paper, Scissors)

Click "OK" to start game`)){
let i = 1;
while(i<=5){
  let process = true
 function getComputerChoice(){
const choices = ["rock", "paper", "scissors"]
const randomIndex = Math.floor(Math.random()*choices.length)
return choices[randomIndex]
 }
 
 function getHumanChoice(){
 while(true){
const enteredChoice = prompt("Enter your choice")

if(enteredChoice){
const userChoice = enteredChoice.toLowerCase()
   
  if(userChoice === "rock" || userChoice === "scissors" || userChoice === "paper"){return userChoice;}
  else{alert('Invalid input. Try again')}}
else if(enteredChoice === ""){alert(`No input. Try again`)}
else if(!enteredChoice){
  let checkConfirm = confirm(`Do you want to end the game? Click "OK" to end`)
  if(checkConfirm){process = false;
    return null
  }
   }
  }
 }
 function playRound(humanChoice, computerChoice){
   if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
     humanScore++
     console.log(`
Human Choice : ${humanChoice}
Computer Choice : ${computerChoice}
You win! ${humanChoice} beat ${computerChoice}
Human Score: ${humanScore}
Computer Score : ${computerScore}
`)
   }
   else if(computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper"){
     computerScore++
     console.log(`
Human Choice : ${humanChoice}
Computer Choice : ${computerChoice}
You lose! ${computerChoice} beat ${humanChoice}
Human Score: ${humanScore}
Computer Score : ${computerScore}
`)
   }
   else if(humanChoice === computerChoice){
     console.log(`
Human Choice : ${humanChoice}
Computer Choice : ${computerChoice}
- Draw -
Human Score: ${humanScore}
Computer Score : ${computerScore}
`)
   }
 }
 let computerSelection = getComputerChoice();
 
 let humanSelection = getHumanChoice()
 
 
 playRound(humanSelection, computerSelection)

 if(!process && i > 1){
if(humanScore > computerScore){console.log("Human Win - Incomplete tournament")}
else if(humanScore < computerScore){
  console.log("Computer Win - Incomplete tournament")}
else if(humanScore === computerScore){
  console.log("Draw Game - Incomplete tournament")}
  break;
 }
 else if(!process){
  console.log("Game cancelled")
  break;
 }
 else if(i === 5){
   if(humanScore > computerScore){
  console.log("Human Win")}
else if(humanScore < computerScore){
  console.log("Computer Win")}
else if(humanScore === computerScore){
  console.log("Draw Game")}
  }
 i++
 }
}