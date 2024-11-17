let choices = ["Rock","Paper","Scissor"], computerScore = 0,humanScore = 0,  winner = false,wond = ""
var computerChoice = "", user = ""
playGame();

function getPlayerInput(){
    return prompt("Choose command Rock or Paper or Scissor");

}

function getComputerChoice(){
    let random =  Math.ceil(Math.random()*choices.length-1)
    return choices[random];

}

function checkWinner(humanScore,computerScore){
    if(humanScore == 5 || computerScore == 5){
       return true;
    }
    return false;

}

function showCurrentScore(humanScore,computerScore){
    console.log("Player Score:"+humanScore+"\nComputer Score:"+computerScore);

}

function declare(winner,wond){
    if(winner){
        console.log(wond+" Wins!!");
        
    }
  
}
function playGame(){
    user = getPlayerInput()
    computerChoice = getComputerChoice();
    let converted = user.toUpperCase()
    let computerConverted = computerChoice.toUpperCase()

if(computerConverted == "ROCK" && converted == "SCISSOR"){
    console.log("Player choice: "+converted+" Computer choice: "+computerConverted);
    console.log("Computer scored!!")
    computerScore++;
    wond = "Computer"  

}else if(computerConverted == "PAPER" && converted == "ROCK"){
    console.log("Player choice: "+converted+" Computer choice: "+computerConverted);
       console.log("Computer scored!!");
       computerScore++;
       wond = "Computer"

   }else if(computerConverted == "SCISSOR" && converted == "PAPER"){
       console.log("Player choice: "+converted+" Computer choice: "+computerConverted);
       console.log("Computer scored!!");
       computerScore++;
       wond = "Computer"

   }else if(computerConverted == "ROCK" && converted== "ROCK"){   
       console.log("Player choice: "+converted+" Computer choice: "+computerConverted);
       console.log("Draw!!");

   }else if(computerConverted == "PAPER" && converted == "PAPER"){
       console.log("Player choice: "+converted+" Computer choice: "+computerConverted);
       console.log("Draw!!");

   }else if(computerConverted == "SCISSOR" && converted == "SCISSOR"){
       console.log("Player choice: "+converted+" Computer choice: "+computerConverted);
       console.log("Draw!!");

   }else{
       console.log("Satisfied");
       console.log("Player choice: "+converted+" Computer choice: "+computerConverted);
       console.log("Player scored!!");
       humanScore++;
       wond = "Player"

   }
   
  
   showCurrentScore(humanScore,computerScore);
   winner = checkWinner(humanScore,computerScore);
   declare(winner,wond);
   
   if(!winner){
    playGame();

   }
  

}






