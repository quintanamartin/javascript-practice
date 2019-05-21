/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
*/

function rps(player1, player2) {
  if (player1 === "rock" && player2 === "scissors") {
    return "Player 1 won!";
  } else if (player1 === "scissors" && player2 === "paper") {
    return "Player 1 won!";
  } else if (player1 === "paper" && player2 === "rock") {
    return "Player 1 won!";
  } else if (player2 === "rock" && player1 === "scissors") {
    return "Player 2 won!";
  } else if (player2 === "scissors" && player1 === "paper") {
    return "Player 2 won!";
  } else if (player2 === "paper" && player1 === "rock") {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
}
