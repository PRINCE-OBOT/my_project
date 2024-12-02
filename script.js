
const displayResult = document.querySelector(".displayResult")
const container = document.querySelector(".container")
const finalResult = document.querySelector(".finalResult")
const askUserBox = document.querySelector(".askUserBox")
const askUser = document.querySelector(".askUser")
const playAgain = document.querySelector(".playAgain")
const code = document.querySelector("code")
const relativeContainer = document.querySelector(".relativeContainer")
 const fetchResult = document.querySelector(".fetchResult")
 const showFinalResult = document.querySelector(".showFinalResult")
 const showError = document.querySelector(".showError")

askUserBox.addEventListener("click", (ask)=>{
  if(ask.target.textContent === "Yes"){
    relativeContainer.removeChild(askUser)
  }
  else if(ask.target.textContent === "Cancel"){
    relativeContainer.remove()
    code.style.cssText =`
    color:grey;
    opacity:1;
    padding:10px;`
  }

if(ask.target.textContent === "Yes"){runEntireGame()}
function runEntireGame(){
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
   if(e.target.id === "rock"  || e.target.id === "paper"  || e.target.id === "scissors"){ userChoice = e.target.id

   if(userChoice && checkNumOfPlay){
     if(numberOfPlay === 5){
       checkNumOfPlay = false
     } else {
   return userChoice
       }
      }
     }
     else{
      
       displayResult.innerHTML = 'You\'re not clicking | ROCK, PAPER, SCISSORS | choices &#128580;';
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
   align-item:center;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   border-radius:10px;
   text-align:center;
   width: 220px;
   height:105px;`
 }
 let computerSelection = getComputerChoice();
 
 let humanSelection = getHumanChoice()
 
 
 playRound(humanSelection, computerSelection)
 
 if(e.target.id === "rock" || e.target.id === "paper" || e.target.id === "scissors"){
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
  if(humanScore > computerScore){ showFinalResult.innerHTML = `
  Human Win &#128176; <br>
  Human Score : ${humanScore} <br>
  computer Score : ${computerScore}
`
 
  finalResult.style.cssText = `z-index : 2;`
    
  }
else if(humanScore < computerScore){
  showFinalResult.innerHTML = `
  You lose &#128165;<br>
  Human Score : ${humanScore} <br>
  computer Score : ${computerScore}
 `
  finalResult.style.cssText = `z-index : 2;`
}
else if(humanScore === computerScore){
  
  showFinalResult.innerHTML = `
  It's a Draw game &#x1F579;<br>
  Human Score : ${humanScore} <br>
  computer Score : ${computerScore}
  `
 
  finalResult.style.cssText = `z-index : 2;`
  }
}
announceResult()  

fetchResult.textContent = "Game end"
fetchResult.style.cssText = `
opacity :0.4 ;
font-weight: bold;
`
  }, 4000)
     }
    }
})
}
playAgain.addEventListener("click", ()=>{
  finalResult.style.cssText = `z-index : 0`
  fetchResult.textContent = ""
  displayResult.textContent = ""
  displayResult.style.cssText = `box-shadow: none`
  runEntireGame()
})

})