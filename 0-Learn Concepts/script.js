function hasPlayerWonTheRound(player, computer) {
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    ) {
      return true; // Player wins
    } else if (
      (computer === "Rock" && player === "Scissors") ||
      (computer === "Scissors" && player === "Paper") ||
      (computer === "Paper" && player === "Rock")
    ) {
      return false; // Computer wins
    } else if (player === computer) {
      return false; // Tie
    }
  }

  /*  function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}
  
*/
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"