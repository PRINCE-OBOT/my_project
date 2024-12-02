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

let humanScore = 0;
let computerScore = 0;

askUserBox.addEventListener("click", (ask)=>{
  if(ask.target.textContent === "Yes"){
    runEntireGame()
    relativeContainer.removeChild(askUser)
  }
  else if(ask.target.textContent === "Cancel"){
    relativeContainer.remove()
    code.style.cssText =`
    color:grey;
    opacity:1;
    padding:10px;`
  }

function runEntireGame(){

let checkNumOfPlay = true;

  container.addEventListener("click", (e)=>{
    
    function getComputerChoice(){
const choices = ["rock", "paper", "scissors"]
const randomIndex = Math.floor(Math.random()*choices.length)
return choices[randomIndex]
 }
 
 function getHumanChoice(){
  if(humanScore === 5 || computerScore === 5){
       checkNumOfPlay = false
     }
  const allChoices = ["rock", "paper", "scissors"]
   if(allChoices.includes(e.target.id) && checkNumOfPlay){
     
   return e.target.id
     }
     else if(e.target.className === "container"){
      
       displayResult.innerHTML = 'You\'re not clicking | ROCK, PAPER, SCISSORS | choices &#128580;';
       return null
     }
    }
    
     function playRound(humanChoice, computerChoice){
   if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
     humanScore++
     displayResult.innerHTML = `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
You win! ${humanChoice} beat ${computerChoice}<br>
Human Score : ${humanScore} <br>
  computer Score : ${computerScore}
`
   }
   else if(computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper"){
     computerScore++
     displayResult.innerHTML= `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
You lose! ${computerChoice} beat ${humanChoice}<br>
Human Score : ${humanScore} <br>
  computer Score : ${computerScore}
`
   }
   else if(humanChoice === computerChoice){
    displayResult.innerHTML = `
Human Choice : ${humanChoice}<br>
Computer Choice : ${computerChoice}<br>
- Draw - <br>
Human Score : ${humanScore} <br>
  computer Score : ${computerScore}
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
   height:125px;`
 }
 let computerSelection = getComputerChoice();
 
 let humanSelection = getHumanChoice()
 if(!humanSelection)return
 
 if(computerSelection && computerSelection){
 playRound(humanSelection, computerSelection)}
 
 if(e.target.id === "rock" || e.target.id === "paper" || e.target.id === "scissors"){
   if(humanScore === 5 || computerScore === 5){
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
  Human Win &#128176; 
`
 
  finalResult.style.cssText = `z-index : 2;`
    
  }
else if(humanScore < computerScore){
  showFinalResult.innerHTML = `
  You lose &#128165;
 `
  finalResult.style.cssText = `z-index : 2;`
}
else if(humanScore === computerScore){
  
  showFinalResult.innerHTML = `
  It's a Draw game &#x1F579;
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
  humanScore = 0;
  computerScore = 0;
  finalResult.style.cssText = `z-index : 0`
  fetchResult.textContent = ""
  displayResult.textContent = ""
  displayResult.style.cssText = `box-shadow: none`

  runEntireGame()
})

})