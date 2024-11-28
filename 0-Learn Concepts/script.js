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


// The forEach() method in JavaScript is used to iterate over the elements of an array 
// and execute a provided callback function once for each element.

array.forEach(function(element, index, array) {
  // Your code here
}, thisArg);

/* 
element: The current element being processed.
index (optional): The index of the current element.
array (optional): The array that forEach() is iterating over.
thisArg (optional): Value to use as this when executing the callback.
*/
/*
Key Points
forEach() does not return a new array; it always returns undefined.
It is not chainable like map() or filter().
You cannot break out of a forEach() loop. For early termination, consider using a regular for loop or some().

*/

const fruits1 = ['apple', 'banana', 'cherry'];

fruits1.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// apple
// banana
// cherry

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry

/*const user = {
  name: 'Dawood',
  printItems(items) {
    items.forEach(function(item) {
      console.log(`${this.name} likes ${item}`);
    }, this); // Pass `this` explicitly
  }
};
*/
user.printItems(['apple', 'banana', 'cherry']);
// Output:
// Dawood likes apple
// Dawood likes banana
// Dawood likes cherry
/*
Comparison to Other Loops
forEach: Great for iterating without breaking or returning values.
map: Returns a new array with transformed elements.
filter: Returns a new array containing elements that pass a condition.
for/for...of: Allows breaking the loop and more control.
*/


/*
The findIndex() method is an array function in JavaScript that returns the index of the first element in
 an array that satisfies a given condition (provided by a callback function). If no element satisfies the
  condition, it returns -1.
 */

  const numbers = [10, 20, 30, 40, 50];

// Find the index of the first element greater than 30
const index = numbers.findIndex((num) => num > 30);
console.log(index); // Output: 3 (the index of 40)

const index2 = numbers.findIndex((num) => num > 100);
console.log(index2); // Output: -1 (no element is greater than 100)


splice() 
/*
is an array method that modifies arrays by removing, replacing, or adding elements at a specified 
index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory 
index at which to start, 
the second is the number of items to remove, and the third is an optional replacement element.
Here's an example:
*/ 

const fruits2 = ["mango", "date", "cherry", "banana", "apple"];

// Remove date and cherry from the array starting at index 1
const removedFruits = fruits2.splice(1, 2);

console.log(fruits2); // [ 'mango', 'banana', 'apple' ]
console.log(removedFruits); // [ 'date', 'cherry' ]

/*
localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript 
data type.

For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item.
To delete a specific item, you can utilize the
removeItem() method, or if you want to delete all items in the storage, you can use clear().
*/
localStorage.setItem("key", value); // value could be string, number, or any other data type
