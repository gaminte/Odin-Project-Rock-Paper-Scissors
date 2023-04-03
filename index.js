// Getting random choice from computer

rps = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
  randomNo = Math.floor(Math.random() * 3) + 1;
  return rps[randomNo-1];
}


// Getting input from user

function playerSelection() {
    let userInput = prompt("Enter your Selection (Rock, Paper, Scissors");
    userInput = userInput.toLowerCase();
    userInput = userInput.replace(userInput[0], userInput[0].toUpperCase());
    return userInput;
}

// playing the game and selecting the winner

function playRound(getComputerChoice, playerSelection) {
    if (getComputerChoice == playerSelection) {
        return "Draw!!";
    }
    else if (getComputerChoice == "Rock" && playerSelection == "Scissors" || getComputerChoice == "Paper" && playerSelection == "Rock" || getComputerChoice == "Scissors" && playerSelection == "Paper") {
        return `You Lose!! ${getComputerChoice} beats ${playerSelection}`;
    }
    else {
        return `You Won!! ${playerSelection} beats ${getComputerChoice}`;
    }
}

// Playing a 5 round game and selecting the winner

function game() {
    let computerScore = 0;
    let yourScore = 0;
    for (let i=1; i<=5; i++) {
        
        let compChoice = getComputerChoice();
        let userChoice = playerSelection();

        if (rps.includes(userChoice) == false) {
            console.log("You have used incorrect spelling. Please try again.");
            userChoice = playerSelection();
        }

        console.log(`Your Choice: ${userChoice} and Bot Choice: ${compChoice}`);


        if (compChoice == userChoice) {
            computerScore += 1;
            yourScore += 1;
        }
        else if (compChoice == "Rock" && userChoice == "Scissors" || compChoice == "Paper" && userChoice == "Rock" || compChoice == "Scissors" && userChoice == "Paper") {
            computerScore += 1;
        }
        else {
            yourScore += 1;
        }
    }
    if (computerScore == yourScore) {
        return `\nDraw!! Your Score: ${yourScore} and Bot Score: ${computerScore}\n`;
    }
    else if (computerScore > yourScore) {
        return `\nYou Lose!! Bot Score: ${computerScore} and Your Score: ${yourScore}\n`;
    }
    else {
        return `\nYou Won!! Your Score: ${yourScore} and Bot Score: ${computerScore}\n`;
    }
}


console.log(game());