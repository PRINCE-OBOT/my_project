const buttons = document.querySelectorAll(".btn")
const displayResult = document.querySelector(".displayResult")

 let humanScore = 0;
let computerScore = 0;

buttons.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    function getComputerChoice(){
const choices = ["rock", "paper", "scissors"]
const randomIndex = Math.floor(Math.random()*choices.length)
return choices[randomIndex]
 }
 
 function getHumanChoice(){
   let enterChoice = e.target.textContent
   
   let userChoice = enterChoice.toLowerCase()
   
   return userChoice
    }
    
     function playRound(humanChoice, computerChoice){
   if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
     humanScore++
     displayResult.innerHTML = `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
You win! ${humanChoice} beat ${computerChoice}<br>
Human Score: ${humanScore}<br>
Computer Score : ${computerScore}
`
   }
   else if(computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper"){
     computerScore++
     displayResult.innerHTML= `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
You lose! ${computerChoice} beat ${humanChoice}<br>
Human Score: ${humanScore}<br>
Computer Score : ${computerScore}
`
   }
   else if(humanChoice === computerChoice){
    displayResult.innerHTML = `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
- Draw - <br>
Human Score: ${humanScore}<br>
Computer Score : ${computerScore}
`
   }
 }
 let computerSelection = getComputerChoice();
 
 let humanSelection = getHumanChoice()
 
 
 playRound(humanSelection, computerSelection)
  })
})
