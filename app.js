// Initialize user and computer scores
let userScore = 0; // Variable to store user's score
let computerScore = 0; // Variable to store computer's score

// DOM element references
const choices = document.querySelectorAll(".choice"); // Array of all elements with class "choice" (rock, paper, scissors)
const userScorePara = document.querySelector("#user-score"); // Paragraph element displaying user's score
const computerScorePara = document.querySelector("#computer-score"); // Paragraph element displaying computer's score
const msg = document.querySelector("#msg"); // Paragraph element for displaying messages to the user
const newGameBtn = document.querySelector("#new-game"); // Button for starting a new game
const resetBtn = document.querySelector("#reset"); // Button for resetting the game
const themeBtn = document.querySelector("#change-theme"); // Button for changing the game theme

// Function to change game theme
const changeGameTheme = () => {
  let element = document.body; // Get reference to the <body> element
  element.classList.toggle("change-theme"); // Toggle the "change-theme" class on <body> to switch themes
  msg.style.backgroundColor = "#081b31"; // Change background color of message container
};

// Function to generate computer's choice (rock, paper, scissors)
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"]; // Array of possible choices for the computer
  const randomIndex = Math.floor(Math.random() * 3); // Generate a random index (0, 1, or 2)
  return options[randomIndex]; // Return the choice corresponding to the random index
};

// Function for a draw scenario (when user and computer make the same choice)
const drawGame = () => {
  msg.innerText = "Game was Draw. Try again."; // Update message to inform the user of a draw
  msg.style.backgroundColor = "#081b31"; // Change background color of message container
};

// Function to display winner and update scores based on user and computer choices
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; // Increment user's score if they win
    userScorePara.innerText = userScore; // Update displayed user score
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}.`; // Inform user of their win
    msg.style.backgroundColor = "green"; // Change background color of message container to green
  } else {
    computerScore++; // Increment computer's score if they win
    computerScorePara.innerText = computerScore; // Update displayed computer score
    msg.innerText = `You lose. Computer's ${compChoice} beats ${userChoice}.`; // Inform user of their loss
    msg.style.backgroundColor = "red"; // Change background color of message container to red
  }
};

// Function to play the game based on user's choice
const playGame = (userChoice) => {
  console.log("User's Choice =", userChoice); // Log user's choice to the console for debugging

  const compChoice = genCompChoice(); // Generate computer's choice
  console.log("Computer's Choice =", compChoice); // Log computer's choice to the console for debugging

  if (userChoice === compChoice) {
    drawGame(); // Call drawGame function if user and computer choices are the same
  } else {
    let userWin = true;
    // Determine winner based on user and computer choices
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice); // Display winner and update scores
  }
};

// Function to reset the game (reset scores and message)
const resetGame = () => {
  userScore = 0; // Reset user's score to 0
  computerScore = 0; // Reset computer's score to 0
  userScorePara.innerText = userScore; // Update displayed user score
  computerScorePara.innerText = computerScore; // Update displayed computer score
  msg.innerText = "Play Your turn"; // Reset message to prompt user to play
  msg.style.backgroundColor = "#081b31"; // Reset background color of message container
};

// Event listeners for each choice button (rock, paper, scissors)
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Get the ID of the clicked choice (rock, paper, or scissors)
    playGame(userChoice); // Call playGame function with user's choice
  });
});

// Event listener for New Game button
newGameBtn.addEventListener("click", resetGame);

// Event listener for Reset button
resetBtn.addEventListener("click", resetGame);

// Event listener for Change Theme button
themeBtn.addEventListener("click", changeGameTheme);
