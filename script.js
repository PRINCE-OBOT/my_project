const buttons = document.querySelectorAll(".btn")
const displayResult = document.querySelector(".displayResult")
const container = document.querySelector(".container")
const buttonContainer = document.querySelector(".buttonContainer")
 const fetchResult = document.querySelector(".fetchResult")
 const showError = document.querySelector(".showError")

let confirmPlayGame = confirm("Do you want to play (Rock, Paper, Scissors?)")
if(confirmPlayGame){
 let humanScore = 0;
let computerScore = 0;

let numberOfPlay = 0;

buttons.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    e.stopPropagation()
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
`
   }
   else if(computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper"){
     computerScore++
     displayResult.innerHTML= `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
You lose! ${computerChoice} beat ${humanChoice}<br>
`
   }
   else if(humanChoice === computerChoice){
    displayResult.innerHTML = `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
- Draw - <br>
`
   }
   displayResult.style.cssText = `
   color:brown;
   opacity : 0.6;
   font-style: italic;
   font-weight: bold;
   font-size: 14px;`
 }
 let computerSelection = getComputerChoice();
 
 let humanSelection = getHumanChoice()
 
 
 playRound(humanSelection, computerSelection)
 
 if(e.target){
   numberOfPlay++
   if(numberOfPlay === 5){
     setTimeout(()=>{
     container.remove()
     displayResult.textContent = ""
     
     fetchResult.textContent = "Fetching result..."
     fetchResult.style.cssText = `
        opacity :0.4 ;
        font-weight: bold;
        `
     }, 500)
  setTimeout(()=>{
   function announceResult(){
  if(humanScore > computerScore){alert(`
  Human Win
  Human Score : ${humanScore}
  computer Score : ${computerScore}`)}
else if(humanScore < computerScore){
  alert(`
  Computer Win
  Human Score : ${humanScore}
  computer Score : ${computerScore}`)}
else if(humanScore === computerScore){
  alert(`
  It's a Draw game
  Human Score : ${humanScore}
  computer Score : ${computerScore}`)}
}
announceResult()  

fetchResult.textContent = "Game end"
fetchResult.style.cssText = `
opacity :0.8 ;
font-weight: bold;
`
  }, 2000)
     }
    }
  })
})
}
else{
  container.remove()
  showError.style.cssText = "opacity: 1"
}
