# Guess the Number Game

## Description
This repository contains a simple "Guess the Number" game developed in JavaScript as part of a course to learn the basics of the language. The game generates a random secret number between 1 and 20, and the player has to guess the number within 20 attempts.

## Features
- **Random Number Generation**: A new secret number is generated each time the game is reset.
- **User Input Handling**: The game processes user guesses and provides feedback.
  - Displays messages for "No number", "Correct Number", "Too high", and "Too low".
- **Score Tracking**: Keeps track of the player's score, which decreases with each incorrect guess.
- **High Score**: Tracks and displays the highest score achieved during the session.
- **Dynamic Styling**: Changes the background color when the correct number is guessed.
- **Reset Functionality**: Allows the player to reset the game and play again without refreshing the page.

## How to Play
1. Open the game in your browser.
2. Enter a guess (a number between 1 and 20) and click the "Check!" button.
3. The game will provide feedback on whether your guess is too high, too low, or correct.
4. If your guess is correct, the game will display the correct number and update the high score if applicable.
5. If your guess is incorrect, your score will decrease by 1. If your score reaches 0, the game will indicate that you've lost.
6. Click the "Again!" button to reset the game and try again.

## Code Overview
- **HTML**: The structure of the game interface.
- **CSS**: The styling for the game elements.
- **JavaScript**: The game logic including random number generation, user input handling, score tracking, and dynamic updates to the UI.

## Files
- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling the game.
- `script.js`: The JavaScript file containing the game logic.

## How to Run
1. Clone the repository to your local machine.
   ```sh
   git clone https://github.com/your-username/guess-the-number.git
2. run using live server or open html in a web browser
