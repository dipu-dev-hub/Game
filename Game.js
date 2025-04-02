let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
  //Rock, Paper, Scissors
  const options = [ "rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText =  `You Win! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green"; 
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost! ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
   console.log("user choice =", userChoice);
   //To Generate Computer Choice
     const comChoice = genComChoice();
     console.log("computer choice =", comChoice);

     if( userChoice === comChoice) {
      //Draw Game
      drawGame();
     } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = comChoice === "paper" ? false : true ;
      } else if (userChoice === "paper") {
        
          userWin = comChoice === "scissors" ? false : true ;
        } else {
        userWin = comChoice === "rock" ? false : true ;
      }
      showWinner(userWin, userChoice, comChoice);
     }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
