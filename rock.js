var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} 
else {
    computerChoice = "scissors";
}


function game(choice1,choice2){
	if(choice1==choice2){
		return "the result is a tie";
	}

	if(choice1 == 'rock'){
		 if(choice2 =='paper'){
			return "paper wins";
		}
		else{
			if(choice2== "scissor"){
	         return " rock wins";
			}
		}
	}

else if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } 
    else {
        if(choice2 === "scissors") {
            return "scissors wins";
        }

    }
}
else if (choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } 
    else {
        if(choice2 === "paper") {
            return "scissors wins";
   }
    }
}
};
//console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
console.log(game('rock', computerChoice));




