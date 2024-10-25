let choices = ["Rock","Paper","Scissor"], computerScore = 0,humanScore = 0, computerChoice = getComputerChoice(),  winner = false,wond = ""

function getComputerChoice(){
    let random =  Math.ceil(Math.random()*choices.length)
    return choices[random];
}
while(!winner){
    let user = prompt("Choose command Rock or Paper or Scissor");
    if(computerChoice == "Rock" && user == "Scissor"){
        console.log("Player choice: "+user+" Computer choice: "+computerChoice);
        console.log("Computer scored!!")
        computerScore++;
        wond = "Computer"
    
    }else if(computerChoice == "Paper" && user == "Rock"){
        console.log("Player choice: "+user+" Computer choice: "+computerChoice);
        console.log("Computer scored!!");
        computerScore++;
        wond = "Computer"

    }else if(computerChoice == "Scissor" && user == "Paper"){
        console.log("Player choice: "+user+" Computer choice: "+computerChoice);
        console.log("Computer scored!!");
        computerScore++;
        wond = "Computer"

    }else if(computerChoice == "Rock" && user == "Rock"){   
        console.log("Player choice: "+user+" Computer choice: "+computerChoice);
        console.log("Draw!!");
      
    }else if(computerChoice == "Paper" && user == "Paper"){
        console.log("Player choice: "+user+" Computer choice: "+computerChoice);
        console.log("Draw!!");
    }else if(computerChoice == "Scissor" && user == "Scissor"){
        console.log("Player choice: "+user+" Computer choice: "+computerChoice);
        console.log("Draw!!");
    }else{
        console.log("Player choice: "+user+" Computer choice: "+computerChoice);
        console.log("Player scored!!");
        humanScore++;
        wond = "Player"
    
    }
    console.log("Player score: "+humanScore)
    console.log("Computer score: "+computerScore)
    if(humanScore == 3 || computerScore == 3){
        winner = true;
        console.log(wond+" Wins!!")

    }

}





