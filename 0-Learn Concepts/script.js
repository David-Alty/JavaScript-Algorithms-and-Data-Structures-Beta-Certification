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


const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

// Accessing nested properties without optional chaining
const state = user.address.state; // CA

// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an 

// The sort() method converts elements of an array into strings and 
// sorts them in place based on their values in the UTF-16 encoding.

const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]

// The sort() method in JavaScript is used to sort the elements of an array in place (modifies the original array) 
// returns the sorted array. By default, it sorts the elements as strings in ascending order.

/* 1. Default Sorting Behavior
If no compareFunction is provided, the sort() method converts the elements to strings and sorts them
lexicographically (dictionary order based on UTF-16 code points)*/

/*2. Using a Compare Function
To sort numbers or other complex data types correctly, you need to provide a compare function.

Compare Function Syntax
The compareFunction takes two arguments, a and b, and determines their order:

If compareFunction(a, b) is less than 0, a comes before b.
If compareFunction(a, b) is greater than 0, b comes before a.
If compareFunction(a, b) is 0, their order remains unchang*/



/* 
The find() method retrieves the first element within an array that fulfills the conditions specified in 
the provided callback function. If no element satisfies the condition, the method returns undefined.

The if statement inside the find() callback is unnecessary because find() 
expects a boolean expression to filter the array.*/

/* Optional chaining (?.) allows you to safely access nested object properties without 
worrying about errors if an intermediate property is null or undefined. */

// The filter method keeps only the elements of an array that satisfy the callback function passed to it
const numArr = [1, 10, 8, 3, 4, 5]
const numsGreaterThanThree = numArr.filter((num) => num > 3);

console.log(numsGreaterThanThree) // Output: [10, 8, 4, 5]



 // const inputStr = textInput.value.replace(/[\W_]/g,"").toLowerCase();
 // \W >> a-z, A-Z, 0-9 expecet these carackters!
 // []g >> global flag check all  



//Function parameters can be initialized with default values. 
// If a function is called without an argument, then the default value will be used:

const greeting = (name = "Anonymous") => {
  return "Hello " + name;
} 

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous



playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";


  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));

  }


});

/* In earlier projects, you learned how to add and remove classes from an element with el.classList.add() 
and el.classList.remove(). Another method to use with the classList property is the toggle method.*/

element.classList.toggle("class-to-toggle");


/* A modal is an element that prevents all interaction with elements outside it until the modal has been dismissed.

The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.*/

dialogElement.showModal();
closeTaskFormBtn.addEventListener("click",() => {confirmCloseDialog.showModal()})

/* If the user clicks the Cancel button, you want to cancel the process and close the modal so the user can continue editing. 
The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.*/

dialogElement.close();
cancelBtn.addEventListener("click",() => {confirmCloseDialog.close()})



// To make the id more unique, add another hyphen and use Date.now().

Date.now()  // returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now()); // 1628586800000