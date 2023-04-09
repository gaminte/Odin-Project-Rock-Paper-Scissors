

let btns = document.querySelectorAll(".btns");

let scores = document.createElement("div");
scores.setAttribute("class", "scores");

let botScore = document.createElement("h3");
botScore.setAttribute("id", "botScore");


let userScore = document.createElement("h3");
userScore.setAttribute("id", "userScore");


scores.append(botScore, userScore);

let winCondition = document.createElement("h5");
winCondition.innerText = "Who ever takes 5 points first, wins the game."
winCondition.setAttribute("class", "winCondition");

let winner = document.createElement("h3");
winner.setAttribute("id", "winner");
winner.style.display = "none";

playAgain = document.createElement("button");
playAgain.setAttribute("id", "playAgain");
playAgain.innerText = "Play Again";
playAgain.addEventListener("click", function() {
  document.location.reload();
});
playAgain.style.display = "none";


mainDiv = document.querySelector(".content");
mainDiv.append(scores, winCondition, winner, playAgain);



// Getting random choice from computer

rps = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
  randomNo = Math.floor(Math.random() * 3) + 1;
  return rps[randomNo-1];
}


// Getting input from user

function playerSelection(e) {
  if (e.target.tagName == "IMG") {
    return e.target.parentElement.innerText;
  } else return e.target.innerText;
  e.stopPropagation();
}

// playing the game and selecting the winner

let computerScore = 0;
let yourScore = 0;
botScore.innerText = `Bot Score: ${computerScore}`;
userScore.innerText = `Your Score: ${yourScore}`;

btns.forEach(btn => btn.addEventListener('click', playRound));

function playRound(e) {
  let compChoice = getComputerChoice();
  let userChoice;

  if (e.target.tagName == "IMG") {
    userChoice = e.target.parentElement.innerText;
  } else userChoice = e.target.innerText;
  e.stopPropagation();

  if(computerScore >= 4 || yourScore >= 4) {
    if (computerScore == yourScore) {
      computerScore += 1;
      yourScore += 1;
      botScore.innerText = `Bot Score: ${computerScore}`;
      userScore.innerText = `Your Score: ${yourScore}`;
      winner.innerText = "Draw!!";
      winner.style.color = "#00f"
      winner.style.display = "block";
      playAgain.style.display = "inline-block";
      }
      else if (computerScore > yourScore) {
        computerScore += 1;
        botScore.innerText = `Bot Score: ${computerScore}`;
        winner.innerText="You Lose!!"
        winner.style.color = "#f00"
        winner.style.display = "block";
        playAgain.style.display = "inline-block";
      }
      else {
        yourScore += 1;
        userScore.innerText = `Your Score: ${yourScore}`;
        winner.innerText = "You Won!!"
        winner.style.color = "#009f1f"
        winner.style.display = "block";
        playAgain.style.display = "inline-block";
      }
  } else {
      if (compChoice == userChoice) {
        computerScore += 1;
        yourScore += 1;
        botScore.innerText = `Bot Score: ${computerScore}`;
        userScore.innerText = `Your Score: ${yourScore}`;
      }
      else if (compChoice == "Rock" && userChoice == "Scissors" 
            || compChoice == "Paper" && userChoice == "Rock" 
            || compChoice == "Scissors" && userChoice == "Paper") {
        computerScore += 1;
        botScore.innerText = `Bot Score: ${computerScore}`;
        console.log(`Bot Score: ${computerScore}, Your Score: ${yourScore}`);
      }
      else {
        yourScore += 1;
        userScore.innerText = `Your Score: ${yourScore}`;
      }
    }
}



