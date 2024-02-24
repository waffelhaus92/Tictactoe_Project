# Tictactoe_Project
 
This project is a simple implementation of the classic game Tic-Tac-Toe using React.

## Project Structure

The project is divided into two main parts:

1. **HTML file (`index.html`)**: This file sets up the environment for the game. It includes the necessary React libraries and Babel to compile JSX syntax into regular JavaScript that the browser can understand. The game is rendered inside a `div` with the id `root`.

2. **React Component (`tictactoe.jsx`)**: This is where the game logic resides. The game is divided into three main components:

    - `Game`: This is the main component that renders the game board.
    - `Board`: This component renders the game board and maintains the state of the game, including the current player and the state of each square on the board.
    - `Square`: This component represents a single square on the game board. It maintains its own state, whether it has been filled and by which player.

## How to Play

The game starts with Player X. Click on any square to make a move. The player will alternate between X and O. The game checks for a winner after each move.

## Running the Project

1. Clone this repository. 
2. Install NodeJS and npm if you haven't. 
3. Open your terminal or command prompt, navigate to the folder where the project is stored. 
4.  Run `npm install` in order to install all dependencies needed for the project if you haven't.
5. After installing all necessary packages, run `npm start` to start the development server. You should see something like "Compiled successfully"

## Future Improvements

- Add a feature to restart the game without refreshing the page.
- Not to allow  players to make moves on already occupied cells and after a winner is declared.

Enjoy the game!