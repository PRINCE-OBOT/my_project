
const displayResult = document.querySelector(".displayResult")
const container = document.querySelector(".container")
const askUserBox = document.querySelector(".askUserBox")
const askUser = document.querySelector(".askUser")
const code = document.querySelector("code")
const relativeContainer = document.querySelector(".relativeContainer")
 const fetchResult = document.querySelector(".fetchResult")
 const showError = document.querySelector(".showError")

askUserBox.addEventListener("click", (e)=>{
  if(e.target.textContent === "Yes"){
    relativeContainer.removeChild(askUser)
  }
  else if(e.target.textContent === "Cancel"){
    relativeContainer.remove()
    code.style.cssText =`
    color:grey;
    opacity:1;
    padding:10px;`
  }
})

 let humanScore = 0;
let computerScore = 0;

let numberOfPlay = 0;
let checkNumOfPlay = true;

  container.addEventListener("click", (e)=>{
    
    function getComputerChoice(){
const choices = ["rock", "paper", "scissors"]
const randomIndex = Math.floor(Math.random()*choices.length)
return choices[randomIndex]
 }
 
 function getHumanChoice(){
   let userChoice = e.target.id
  
   if(e.target && checkNumOfPlay){
     if(numberOfPlay === 5){
       checkNumOfPlay = false
     } else {
   return userChoice
      }
     }
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
   color:black;
   opacity : 0.7;
   padding:10px;
   font-weight: bold;
   font-size: 14px;
   display:flex;
   justify-content:center;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   border-radius:10px;
   text-align:center`
 }
 let computerSelection = getComputerChoice();
 
 let humanSelection = getHumanChoice()
 
 
 playRound(humanSelection, computerSelection)
 
 if(e.target){
   numberOfPlay++
   if(numberOfPlay === 5){
     setTimeout(()=>{
     
     fetchResult.textContent = "Fetching result..."
     fetchResult.style.cssText = `
        opacity :0.4 ;
        font-weight: bold;
        `
     }, 1000)
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
opacity :0.4 ;
font-weight: bold;
`
  }, 3000)
     }
    }
})

