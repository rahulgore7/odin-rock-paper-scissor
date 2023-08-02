function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    return choices[Math.floor((Math.random()*choices.length))];
}
let playerSelection=prompt("Enter your choice below");
    playerSelection=playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);
function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        console.log("It's a TIE!");
        return "It's a TIE!";
        
    }else if((playerSelection==="rock" && computerSelection==="scissors")
    || (playerSelection==="paper" && computerSelection==="rock")
    || (playerSelection==="scissors" && computerSelection==="paper")
    ){
        console.log("You Win!");
        return "You Win!!!";
        
    }else{
        console.log("You Loose!");
        return "You Loose";
        
    }

}

function game(){
    var score =0;
    for(let i=1;i<=5;i++){
        const result = playRound(playerSelection,computerSelection);
        if(result==="You Win!!!"){
            score=score+1;
        }else if(result==="You Loose"){
            score=score-1;
        }
    }
    console.log(score)
    return score;
   
}

game();