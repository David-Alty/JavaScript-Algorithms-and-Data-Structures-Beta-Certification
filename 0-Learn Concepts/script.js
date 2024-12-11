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

/*
 The JSON.stringify() method in JavaScript is used to convert a JavaScript object or value into a JSON-formatted
 string. This is particularly useful for saving data to storage, sending data to a server, or debugging purposes where
 you need to inspect an object's structure.
*/
JSON.stringify(value, replacer, space)

/*
Parameters
value:
The value to convert to a JSON string. This can be an object, array, string, number, boolean, or null.

replacer (optional):
A function or array that alters the behavior of the stringification process. If it's a function, it transforms the results. If it's an array, it specifies which properties should be included in the resulting JSON string.

space (optional):
A string or number used to add spacing or indentation to the resulting string for readability:

A number specifies the number of spaces to use for indentation.
A string (e.g., " ") defines custom spacing characters.
*/

const obj = { name: "John", age: 30, isStudent: false };
const jsonString = JSON.stringify(obj);
console.log(jsonString);
//  {"name":"John","age":30,"isStudent":false}
undefined
typeof(jsonString)
'string'

/*
Note: If you check the "Application" tab of your browser console, you'll notice a series of [object Object].
This is because everything you save in localStorage needs to be in string format.
*/

/*
The JSON.parse() method in JavaScript is used to convert a JSON-formatted string into a JavaScript object or value.
This is commonly used to retrieve and manipulate data stored in JSON format, such as data fetched from an API or 
saved in localStorage.
*/
JSON.parse(text, reviver);

/*
Parameters
1. text:
A valid JSON string to parse. The string must conform to JSON syntax rules.

2. reviver (optional):
A function that can transform the resulting object before it is returned. This is used to customize the parsing process.
*/
/*
const jsonString = '{"name":"Alice","age":25,"isStudent":false}';
const obj = JSON.parse(jsonString);
console.log(obj);
Output: { name: "Alice", age: 25, isStudent: false }
*/


const myTaskArr = [
  { task: "Walk the Dog", date: "22-04-2022" },
  { task: "Read some books", date: "02-11-2023" },
  { task: "Watch football", date: "10-08-2021" },
];

localStorage.setItem("data", JSON.stringify(myTaskArr));

const getTaskArr = localStorage.getItem("data")
console.log(typeof(getTaskArr))

const getTaskArrObj   = JSON.parse(localStorage.getItem('data'));
console.log(typeof(getTaskArrObj));

// You can use localStorage.removeItem() to remove a specific item and localStorage.clear()
//  to clear all items in the local storage.

/*
The trim() method in JavaScript is used to remove whitespace from both ends of a string. 
Whitespace includes spaces, tabs, and newline characters.
 */

// The trim() method does not take any parameters.

const str1 = "   Hello, World!   ";
console.log(str1.trim());
// Output: "Hello, World!"

const str = "\t\n  JavaScript Trim Example  \n\t";
console.log(str.trim());
// Output: "JavaScript Trim Example"

/*
Your Convert button should be working now. But it could get tiring for users to enter in a number,
 then click that button each time they want to convert from decimal to binary. It would 
 be much more convenient to perform the conversion when the Enter or Return key is pressed.

The keydown event fires every time a user presses a key on their keyboard,
 and is a good way to add more interactivity to input elements.
*/

// Decimal to Binary With While Loop 
function decToBinary(num) {
    
  let decToBin = [];
  let con = true;
  const decNUmber = num;

  while(con) {
      if(num%2 == 0) {
       decToBin.unshift(0)
      }
      else 
      {
       decToBin.unshift(1)
      } 
      num = Math.floor(num/2);
   
      if(num==1) {
       con=false;
       decToBin.unshift(1)
   
          }
       }
 return   `${decNUmber} decimal number is [${decToBin.join(" ")}],[${decToBin.length}] bits in Binary number system.`;
}

/*
Whenever an event listener is triggered by an event, an event object is created automatically. 
You don't always need to use this object, like with your click handler above, but it can be useful to access information about the event that was triggered.

First, pass e as a parameter to your callback function.
Remember that e is a common parameter name for the event object.
*/

/*
If you open your browser's console and type in the number input, you'll see event objects logged to the browser. 
And if you take a closer look at one of those event objects, you'll see helpful properties like type and target.

Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you 
the string value of the key that was pressed.

Note: Since the Enter and Return keys have similar functions, they both have the same string value of "Enter".
*/

/* 
In an earlier project you learned about truthy and falsy values, which are values that evaluate to true or false.
 In JavaScript, some common falsy values you'll see are null, undefined, the number 0, and empty strings.

 Rather than check if a value is equal to a falsy value, you can use the logical 
 NOT operator (!) to check if the value itself is falsy. For example:
const num = 0;

console.log(num === 0); // true
console.log(!num); // true
*/

/*
parseInt() is a built-in JavaScript function that is used to convert a string to an integer. 
It parses the string from the left and returns the first integer value it can extract. 
If the string does not represent a valid number, parseInt() returns NaN (Not-a-Number).
*/
parseInt(string, radix);
/*
string: The value to be parsed. It can be a string or any value that can be converted to a string.
radix (optional): A number between 2 and 36 that represents the base in mathematical numeral systems.
 If not provided, the function assumes base 10 (decimal).
*/
let num1 = parseInt("123");
console.log(num1);  // Output: 123

let num2 = parseInt("123abc");
console.log(num2);  // Output: 123

let bin = parseInt("1010", 2);  // Binary to decimal
console.log(bin);  // Output: 10

let hex = parseInt("1f", 16);  // Hexadecimal to decimal
console.log(hex);  // Output: 31

let num = parseInt("123abc");

// Using parseInt with NaN Check
// To ensure that the value is a valid number, you can use isNaN():

if (isNaN(num)) {
    console.log("Invalid number");
} else {
    console.log("Valid number: " + num);
}

/*
isNaN() is a built-in JavaScript function that is used to determine if a value is Not-a-Number (NaN). 
It returns true if the value is NaN, and false if the value is a valid number (or can be coerced into a valid number).
*/
isNaN(value);

  // Examples of isNaN():
  // 1. Checking Non-Numeric Values:
  console.log(isNaN("hello")); // true (because "hello" is not a number)
  console.log(isNaN(123));     // false (because 123 is a valid number)
  console.log(isNaN("123"));   // false (string "123" is converted to the number 123)

  // 2. Checking NaN:
  console.log(isNaN(NaN));     // true (because NaN is Not-a-Number)

//   3. Checking an Invalid Number:
  console.log(isNaN(undefined)); // true (undefined cannot be coerced to a number)
  console.log(isNaN(true));      // false (true is coerced to 1)
  console.log(isNaN(false));     // false (false is coerced to 0)

/* 
  Important Points:
  isNaN() tries to coerce the value to a number before checking. So, it will return false for values like "123",
   which can be converted to a valid number (123), but true for strings like "hello", which cannot be converted.
  NaN is a special value that is returned when you attempt invalid arithmetic operations, like 0/0 or Math.sqrt(-1). */

/*   The Problem with isNaN():
isNaN() has a quirk. It will return true for any non-numeric value, including values that can be coerced to non-numeric types,
 such as undefined or null.

For this reason, if you want to ensure that the value is not only not a number, but also is a valid, numeric type,
 you may want to use Number.isNaN() instead. */
  console.log(Number.isNaN(NaN));   // true
  console.log(Number.isNaN("123")); // false (string "123" is not NaN)
  console.log(Number.isNaN("hello")); // false (string "hello" is not NaN)
 // Number.isNaN() is more strict than isNaN(), because it only returns true when the value is literally NaN.

  /* Summary:
  isNaN() checks if the value can be converted to a valid number. It returns true if the value is not a valid number,
  and false if it is.
  To check if something is truly NaN, it's better to use Number.isNaN(). */

  /*
   Binary numbers are a base-2 number system. Unlike the base-10 or decimal number system we use every day that uses 10 digits (0-9) to form numbers, the binary number system only has two digits, 0 and 1. In computer science, these binary digits are called bits,
   and are the smallest unit of data computers can process.
   For computers, 0 represents false or "off", and 1 represents true or "on". 
   */


   /*
    Function to convert a decimal number to binary
   toString(2): The toString method converts a number to a string representation in the base specified as an argument. 
   Passing 2 converts it to binary.
  */


  function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
  }

  // Example usage
  let decimalNumber = 10;
  let binaryNumber = decimalToBinary(decimalNumber);

  console.log(`The binary representation of ${decimalNumber} is ${binaryNumber}`);
  decimalToBinary(10); // "1010"

 /*
   Bits are often grouped into an octet, which is an 8-bit set known as a byte. A byte can represent any number between 0 and 255. Here are the placement 
  values for each bit in a byte:
  128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 
  Because bits are often grouped into bytes, it's common to see binary numbers represented in groups of eight, sometimes with leading zeros.
  For example, the number 52 can be represented as 110100, or 00110100 with leading zeros. 
*/

function decimalToBinary() {
  const decimalNumber = 118; // The number to convert
  const binaryString = decimalNumber.toString(2); // Convert to binary string
  const paddedBinaryString = binaryString.padStart(8, '0'); // Add leading zeros to make it 8 bits
  return paddedBinaryString;
}

// Example usage
console.log(decimalToBinary()); // Output: "01110110"

/* 
The padStart method in JavaScript is used to add padding to the beginning of a string, ensuring it reaches a specified length. You can specify the padding character as the second argument,
and if it's not provided, it defaults to a space (' '). 
Target Length: If the string is already equal to or longer than the target length, padStart does nothing.
This method is particularly useful for formatting numbers, binary strings, or any scenario where fixed-length output is required.
*/
string.padStart(targetLength ,[padString])
console.log("42".padStart(6, '123')); // Output: "123142"

/*
  In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner.
  If you imagine a stack of books, the last book you add to the stack is the first book you can
  take off the stack. Or an array where you can only .push() and .pop() elements.

  The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added 
  to the top of the stack, and when it returns, it is removed from the top / end of the stack.
*/

/*
  A recursive function is a function that calls itself over and over. But you have to be careful because you can easily create an infinite loop. That's where the base case comes in. The base case is when the function stops calling itself,
  and it is a good idea to write it first.

  Recursive functions also have a recursive case, which is where the function calls itself.
*/

const countdown = (number) => {
  console.log(number);

  if (number === 0) {
    console.log("Reached base case")
    return;
  } else {
    countdown(number - 1);
    console.log(number);
  }
};

countdown(3);

/* Now you should see a countdown from 3 to 0, followed by Reached base case, and a count from 1 to 3. This is because, after the recursive loop is finished, the function will continue to execute the code after the recursive call.
 This is why you see Reached base case before the count from 1 to 3.
*/

/*
For a reliable way to convert a value into a string, even falsy values like null and undefined,
 you can use the String() function. For example: 
*/

const num3 = 5;

console.log(String(num3)); // "5"
console.log(String(null)); // "null"

/*
The setTimeout function takes two arguments: a callback function 
and a number representing the time in milliseconds to wait before executing the callback function.
For example, if you wanted to log "Hello, world!" to the console after 3 seconds, you would write:  

While asynchronous, or async, code can be difficult to understand at first, it has many advantages.
 One of the most important is that it allows you to write non-blocking code.
*/
setTimeout(() => {
  console.log("Hello, world!");
}, 3000);


/*  
The return statement immediately exits the function, preventing any further code in the function from being executed.
In other words, if the message input is empty, the return stops the function at that point, and no further actions 
(such as processing the message or updating the result) will occur.
*/

checkMessageButton.addEventListener("click", () => {
  if(messageInput.value == "") {
    alert("Please enter a message.");
    return;  // the exit function execution.
  }
  });

  /*
  In JavaScript, an implicit return refers to a shorthand way of returning a 
  value from an arrow function without using the return keyword.  
  */
  const isSpam = (msg) => false;
  
  const isSpam1 = (msg) => {
    return false;
  };
  
/*   Both functions do the same thing, but the implicit return is more concise and used for functions that consist of 
a single expression.
*/

el.textContent = condition ? "Use this text if the condition is true" : "Use this text if the condition is false";

/*
 Regular expressions can take flags to modify their behavior. For instance, the i flag can be used to make the expression 
ignore case, causing it to match hello, HELLO, and Hello for the expression /hello/.

Flags are added after the trailing slash. 
*/
const helpRegex = /please help/i;
const helpRegex1 = /please help/;

/*
The difference between the two `helpRegex` declarations lies in the **flags** used in the regular expression.

1. **Case-sensitive regex** (`const helpRegex = /please help/;`):
   - This regular expression will only match the exact string `please help` where the capitalization matches exactly. 
   - For example:
     - Matches: `please help`
     - Does **not** match: `Please Help`, `PLEASE HELP`, or `please Help`.

2. **Case-insensitive regex** (`const helpRegex = /please help/i;`):
   - The `i` flag makes the regular expression **case-insensitive**, meaning it will match the string `please help` regardless of the capitalization.
   - For example:
     - Matches: `please help`, `Please Help`, `PLEASE HELP`, and `please Help`.

### Summary
- Use `/please help/` if you care about case sensitivity.
- Use `/please help/i` if you want to match the phrase regardless of capitalization. 
*/

string.match(regexp);

/*
Strings have a .match() method, which accepts a regular expression as an argument and determines if the
string matches that expression. 
The .match() method in JavaScript is used to search a string for a match against a regular expression.
It returns an array of matches or null if no matches are found.
string: The string to search in.
regexp: The regular expression used for matching.
Return Value
If the regular expression has the g flag (global match):
Returns an array of all matches found in the string.
If the regular expression does not have the g flag:
Returns an array where the first element is the matched text and subsequent elements (if applicable) are capturing groups.
If there’s no match, it returns null.
*/

const str2 = "Please help me";
const regex = /help/;
console.log(str2.match(regex));

// Output: [ 'help', index: 7, input: 'Please help me', groups: undefined ]
// help is the matched text.
// index: 7 indicates where the match starts.
// input: 'Please help me' is the original string.

// The g flag ensures all matches are returned as an array.

const str3 = "Please help, help me!";
const regex1 = /help/g;
console.log(str3.match(regex1));
// Output: [ 'help', 'help' ]


/*
 Use .match() for retrieving matches.
For more advanced matching, consider .matchAll() (introduced in ES2020) or .exec() when using regex.
*/
const regex4 = /password/i;
const userInput = "I forgot my PASSWORD!";
if (regex4.test(userInput)) {
  console.log("Contains the word 'password'.");
} else {
  console.log("Does not contain the word 'password'.");
}
// Output: Contains the word 'password'.

const isSpam2 = (msg) => helpRegex.test(msg);
const isSpam3 = (msg) => msg.match(helpRegex);

/*
Instead of using the .match() method, you can use the .test() method of a regular expression to test if a string matches the pattern. Unlike
 .match(), .test() returns a boolean value indicating whether or not the string matches the pattern.
 Key Differences from .match()

Return Value:
.test() returns a boolean (true or false).
.match() returns an array of matches or null.

Use Case:
Use .test() when you only need to check for the presence of a pattern.
Use .match() when you need to retrieve the matches.
*/
const helpRegex2 = /yes|no/i;
/*
The alternate sequence | can be used to match either the text on the left or the text on the right of the |. For example,
 the regular expression /yes|no/ will match either yes or no.
*/

/*
Arrays have a .some() method. Like the .filter() method, .some() accepts a callback function which should take an element of the array as the argument. The .some() method will return true if the callback function returns true for at least one element in the array.
Here is an example of a .some() method call to check if any element in the array is an uppercase letter.
*/
 
const arr = ["A", "b", "C"];
arr.some(letter => letter === letter.toUpperCase());

/*
You need to match a number before the text dollars. While you could write out 0|1|2 and so on, regular expressions have a feature that makes this easier.
A character class is defined by square brackets, and matches any character within the brackets. For example, [aeiou] matches any character in the list aeiou. You can also define a range of characters to match using a hyphen. For example, [a-z] matches any character from a to z.
*/

const dollarRegex = /[0-9] dollars/i;

/*
The dollar value may be more than one digit. To match this, the + quantifier can be used - this matches one or more consecutive occurrences. For example, the regular expression /a+/ matches one or more consecutive a characters. 
*/

/*
  A capture group is a way to define a part of the expression that should be captured and saved for later reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, /h(i|ey) camper/ would match either hi camper or hey camper, and would capture i or ey in a group.
*/

/*
  Now that you have your capture group, you can mark the entire pattern as an optional match. The ? quantifier matches zero or one occurrence of the preceding character or group. For example, the regular expression /colou?r/ matches both color and colour, because the u is optional.  
*/

/*
Replace the first literal space with the \s* expression. The \s character class matches whitespace, such as spaces, tabs, and new lines. The * quantifier means "match the previous character 0 or more times".

The + quantifier means "match the previous character at least one time". 
*/

/*
  To create a non-capturing group in a regular expression, you can add ?: after the opening parenthesis of a group. For instance, (?:a|b) will match either a or b, but it will not capture the result.  
*/

const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i; 
// ^: Ensures the match starts from the beginning of the string.
// $: Ensures the match ends at the end of the string.
// ^ and $ together: Ensures the pattern matches the entire string, from start to finish.


/* 
You will be using this as an event listener for the sortButton. Because buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault() in your function to do this. 
*/

/* 
Remember that .getElementsByClassName() method returns an HTMLCollection, which is an array-like object of all the elements that have a matching class name. You can use the spread operator to convert it into an array.
*/

// You can assign a fallback value directly in the function definition.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());          // "Hello, Guest!"
console.log(greet("Dawood"));  // "Hello, Dawood!"

/* 
In JavaScript, a fallback value for a function refers to providing a default value for a parameter if no argument is supplied or if the supplied argument is undefined. This is commonly achieved using default parameters or a manual fallback logic.
 */

/* 
The first sorting algorithm you will implement is the bubble sort, which starts at the beginning of the array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. 
*/

/* 
When your if condition is true, you need to swap the two elements, "bubbling" the larger element up toward the end of the array.

To do this, declare a temp variable and assign it the value of array[j]. Then assign array[j] the value of array[j + 1]. Finally, assign array[j + 1] the value of temp. 
*/

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(array, array[j], array[j + 1]);

        if (array[j] > array[j + 1]) {
            const  temp = array[j];
             array[j] = array[j+1];
             array[j +1 ]= temp; 

      }
    }
  }
}

/*
Time to implement another sorting algorithm. This time, you'll be implementing a selection sort. Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues iterating through the array until it is completely sorted. 
*/

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

/*
  The last sorting algorithm you will implement is the insertion sort. This algorithm works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.  
*/
  const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      const currValue = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = currValue;
    }
    return array;
  }

  /*
    Notice how the number 10 is placed at the beginning of the array. This is because the default behavior of .sort() is to convert the numbers values to strings, and sort them alphabetically. And "10" comes before "2" alphabetically.
  
    To fix this, you can pass a callback function to the .sort() method. The callback function has two parameters - for yours, use a and b. The parameters of a and b represent the number values in the array that will be sorted.  
  */

    const sortedValues = inputValues.sort((a, b) => {
      return a - b;
    });

    /*
    The value of an input element is always a string, even if the input type is number.  
    */

    /*
      In JavaScript, the filter() method is used to create a new array containing only the elements that satisfy a specified condition. It does not modify the original array.  
    */
      array.filter(callback(currentValue, index, array), thisArg)
      const numbers1 = [1, 2, 3, 4, 5, 6];
      const evenNumbers = numbers1.filter(num => num % 2 === 0);
      console.log(evenNumbers); // Output: [2, 4, 6]

/*
    The mean is the average value of all numbers in a list. The first step in calculating the mean is to take the sum of all numbers in the list. Arrays have another method, called .reduce(), which is perfect for this situation. The .reduce() method takes an array and applies a callback function to condense the array into a single value.

    Like the other methods, .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.
*/

    array.reduce((acc, el) => {

    });
    const numbers2 = [1, 2, 3, 4, 5];
    const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum); // Output: 15

    const numbers3 = [1, 2, 3, 4];
    const product = numbers3.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    console.log(product); // Çıktı: 24

    /*
      The .reduce() method takes a second argument that is used as the initial value of the accumulator. Without a second argument, the .reduce() method uses the first element of the array as the accumulator, which can lead to unexpected results.
      To be safe, it's best to set an initial value. Here is an example of setting the initial value to an empty string:  
    */
      array.reduce((acc, el) => acc + el.toLowerCase(), "");
/*
    By default, the .sort() method converts the elements of an array into strings, then sorts them alphabetically. The .sort() method mutates the original array. This works well for strings, but not so well for numbers. For example, 10 comes before 2 when sorted as strings, but 2 comes before 10 when sorted as numbers.

    To fix this, you can pass in a callback function to the .sort() method. This function takes two arguments, which represent the two elements being compared. 
    The function should return a value less than 0 if the first element should come before the second element, a value greater than 0 if the first element should come after the second element, and 0 if the two elements should remain in their current positions.
*/
  const numbers4 = [3, 1, 4, 1, 5, 9];
  const sortedNumbers = numbers4.toSorted((a, b) => a - b);

  console.log(sortedNumbers); // [1, 1, 3, 4, 5, 9]
  console.log(numbers4);       // [3, 1, 4, 1, 5, 9] (original array is unchanged)

/*
    The .toSorted() method is a new addition to JavaScript, introduced in ECMAScript 2023 (ES2023). It creates a sorted copy of an array without modifying the original array. This is especially useful if you need to sort data while preserving the original order.
*/

  const sortedCopy = array.slice().sort(compareFunction);

/*
    Ensure your environment supports ES2023 features. For older environments, .toSorted() may not be available, and you’ll need to use .sort() with extra care to avoid mutating the original array.
    If .toSorted() isn't supported, you can achieve the same immutability by combining slice() with .sort():
*/

  const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
  const counts = {};
  numbersArr.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });

  /*
    There are a few edge cases to account for when calculating the mode of a dataset. First, if every value appears the same number of times, there is no mode.

    To calculate this, you will use a Set. A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values.  

    In JavaScript, a Set is a built-in object that allows you to store unique values of any type (primitives or objects). It is similar to an array but ensures that there are no duplicate values. 
    */
   // Create a new Set
    const mySet = new Set();

    // Add values
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    // Adding duplicate values
    mySet.add(2); // Ignored because 2 already exists

    console.log(mySet); // Output: Set(3) { 1, 2, 3 }

    // Check if a value exists
    console.log(mySet.has(2)); // Output: true
    console.log(mySet.has(5)); // Output: false

    // Delete a value
    mySet.delete(2);
    console.log(mySet); // Output: Set(2) { 1, 3 }

    // Get the size of the Set
    console.log(mySet.size); // Output: 2

    // Clear all values
    mySet.clear();
    console.log(mySet); // Output: Set(0) {}

  /*
    Key Features of a Set:
    Stores unique values.
    The order of values is based on insertion order.
    Has methods for adding, deleting, and checking for the existence of values.
    Cannot have duplicate values.
  */
    const numbers5 = [1, 2, 2, 3, 4, 4, 5];
    const uniqueNumbers = [...new Set(numbers5)];
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
    
    const counts1 = { a: 2, b: 2, c: 2 };
    console.log(Object.values(counts1)); // Output: [2, 2, 2]
    
    const counts2 = { a: 2, b: 2, c: 2 };
    const uniqueValues1 = new Set(Object.values(counts2));
    console.log(uniqueValues); // Output: Set(1) { 2 }
    
    // The size property of the Set indicates how many unique values are in the Set.
    const counts3 = { a: 2, b: 2, c: 2 };
    const uniqueValues2 = new Set(Object.values(counts3));
    console.log(uniqueValues.size); // Output: 1

    /*
      The Object.keys() method in JavaScript is used to retrieve an array of the enumerable property names (keys) of a given object.  
    */
      Object.keys(obj)
      const person = { name: "Alice", age: 25, country: "USA" };
      const keys = Object.keys(person);
      console.log(keys); // Output: ["name", "age", "country"] 

      const obj1 = { a: 1, b: 2, c: 3 };
      console.log(Object.keys(obj1).length); // Output: 3
            
    /*
      In JavaScript, you can use Math.max() and Math.min() to find the maximum and minimum values from a list of numbers.

      Math.max() returns the largest of the given numbers.
      Math.min() returns the smallest of the given numbers.  
    */

    // To find the maximum or minimum value from an array, you can use the spread operator (...):

    const numbers6 = [10, 20, 30, 40, 50];

    const maxValue = Math.max(...numbers6);
    const minValue = Math.min(...numbers6);
    
    console.log(maxValue); // 50
    console.log(minValue); // 10

    //This works because the spread operator expands the array into individual arguments, which Math.max() and Math.min() can then process.
   /*
    The variance of a series represents how much the data deviates from the mean, and can be used to determine how spread out the data are. 
  */

/*
  The global window object represents the browser window (or tab). It has an onload property which allows you to define behavior when the window has loaded the entire page, including stylesheets and scripts.

  The global window object is a core part of the browser's JavaScript environment. It represents the global execution context in a web browser. Essentially, the window object acts as a container for all global variables, functions, objects, and elements provided by the browser.  

  The window object is central to browser-based JavaScript, providing the environment to interact with the DOM, browser APIs, and global variables. It is essential for developing client-side web applications.
*/

const arr1 = Array(); // This is equivalent to >> const arr = [];

console.log(arr1.length); // 0

/*
  The Array() constructor in JavaScript can create an empty array or an array with a predefined length. Here’s how it behaves depending on how it’s used:  

   Creating an Array with a Specific Length
   When Array(n) is called with a single number n, it creates an array of that length, but the elements are empty slots (not undefined, just uninitialized):
*/
  const arr2 = Array(5);
  console.log(arr2); // [ <5 empty items> ]
  console.log(arr2.length); // 5

  /*
   Important: These empty slots are not actual values (like undefined). They can't be iterated over directly with .map() or .forEach() until explicitly filled. 
   */

  const arr3 = Array(1, 2, 3);
  console.log(arr3); // [1, 2, 3]

/* 
  Example: Filling an Empty Array
  To make the array usable (e.g., for .map() or .forEach()), you can initialize it. A common approach is Array.from() or .fill():
*/
  const arr4 = Array(5).fill(0); // [0, 0, 0, 0, 0]
  console.log(arr4);

  const arr5 = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]
  console.log(arr5);

/*  
 In summary, Array() can create empty arrays or predefined arrays, but empty slots require further initialization for iteration or manipulation.
*/

/* 
The fill() method in JavaScript is used to populate all or part of an array with a static value. This is particularly useful when you want to initialize or reset an array with specific values.
 */

array.fill(value, start, end);
/* 
value: The value to fill the array with.
start (optional): The index to start filling (default is 0).
end (optional): The index to stop filling (default is the array length, exclusive). 
*/
const arr6 = [1, 2, 3, 4];
arr6.fill(0, 2);
console.log(arr6); // [1, 2, 0, 0]

const arr7 = [1, 2, 3, 4];
arr7.fill(0, 1, 3);
console.log(arr7); // [1, 0, 0, 4]

const arr8 = Array(3).fill({ name: "John" });
console.log(arr8);
// [{name: "John"}, {name: "John"}, {name: "John"}]

// Modifying one will affect all because they share the same reference
arr8[0].name = "Jane";
console.log(arr8); 
// [{name: "Jane"}, {name: "Jane"}, {name: "Jane"}]

/* 
Things to Remember
Mutates the Array: fill() modifies the original array.
Inclusive Start, Exclusive End: The start index is included, but the end index is not.
Static Value: The value provided is directly assigned without creating unique instances for objects or arrays. 
*/

string.charCodeAt(index);

/*
  The charCodeAt() method in JavaScript returns the Unicode value (character code) of a character at a specified position in a string. This method is particularly useful when you need to work with the numeric representation of characters.
  index: The position of the character in the string (0-based). If index is not provided, it defaults to 0.

  Returns an integer representing the UTF-16 code unit value at the specified position.
  If the index is out of bounds, it returns NaN.
*/
const str4 = "Hello";
console.log(str4.charCodeAt(0)); // 72 ('H')
console.log(str4.charCodeAt(1)); // 101 ('e')

const str5 = "ABC";
const codes1 = [];
for (let i = 0; i < str5.length; i++) {
  codes1.push(str5.charCodeAt(i));
}
console.log(codes); // [65, 66, 67]

const str6 = "XYZ";
const codes2 = Array.from(str6).map(char => char.charCodeAt(0));
console.log(codes2); // [88, 89, 90]

/*  
  UTF-16 Encoding: charCodeAt() only returns values for the UTF-16 encoding. For higher Unicode code points, use codePointAt().
  Use Case: It's commonly used in cryptography, encoding, or simple string manipulation tasks.
*/

String.fromCharCode(code1, code2, ... codeN);
// code1, code2, ..., codeN: One or more UTF-16 code units (integers between 0 and 65535) representing the characters.
/*  
  The String.fromCharCode() method in JavaScript creates a string from a sequence of UTF-16 code units. It's commonly used to convert character codes (numeric values) back into characters.
*/

//1. Convert a Single Code to a Character
const char = String.fromCharCode(65);
console.log(char); // 'A'

const chars = String.fromCharCode(72, 101, 108, 108, 111);
console.log(chars); // 'Hello'

const codes = [72, 101, 108, 108, 111];
const str7 = codes.map(code => String.fromCharCode(code)).join("");
console.log(str7); // 'Hello'

// Alternatively
const str8 = String.fromCharCode(...codes);
console.log(str8); // 'Hello'

/*
  UTF-16 Limitation: String.fromCharCode() only supports characters within the BMP (Basic Multilingual Plane), i.e., up to 0xFFFF. For characters with higher code points (e.g., emojis), use String.fromCodePoint() instead  
*/

/* 
  The aria-label attribute in HTML is used to provide a textual description for elements, primarily to improve accessibility for users of assistive technologies like screen readers. It gives additional context or a descriptive name to elements that may not have visible text.
*/ 
<element aria-label="description"></element>

// const isEven = num => num % 2 === 0; 
const isEven = (num) => {
  if(num%2 ==0) {
    return true;
  }
  else {
    return false;
  }
}

/*
  The slice() method in JavaScript is used to extract a portion of an array or string without modifying the original. It returns a new array or string containing the selected elements  
*/
array.slice(start, end);

/* 
  start (optional): The index at which to begin extraction. If omitted, the default is 0.
  end (optional): The index at which to stop extraction (not included in the result). If omitted, the default is the length of the array.
 */

const nums = [0, 1, 2, 3, 4, 5];
const sliced1 = nums.slice(2, 4);
console.log(sliced1); // Output: [2, 3]

const nums1 = [0, 1, 2, 3, 4, 5];
const sliced2 = nums1.slice(3);
console.log(sliced2); // Output: [3, 4, 5]

// If start or end is negative, it counts from the end of the array.

const num4 = [0, 1, 2, 3, 4, 5];
const sliced3 = nums4.slice(-3, -1);
console.log(sliced3); // Output: [3, 4]


/* 
Comparison with Similar Methods

slice() vs splice():

slice(): Does not modify the original array and returns a portion.
splice(): Modifies the original array by removing or adding elements.
slice() vs substring() (for strings):

slice() supports negative indices.
substring() treats negative indices as 0. 
*/

/*
 Object properties consist of key/value pairs. You can use shorthand property names when declaring an object literal. When using the shorthand property name syntax, the name of the variable becomes the property key and its value the property value.

The following example declares a user object with the properties userId, firstName, and loggedIn. 
*/

const userId = 1;
const firstName = "John";
const loggedIn = true;

const user1 = {
  userId,
  firstName,
  loggedIn,
};

console.log(user1); // { userId: 1, firstName: 'John', loggedIn: true }

// using .replace() to remove all whitespace.
const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
}

/*
 The startsWith() method in JavaScript is used to check if a string starts with a specified sequence of characters. It returns true if the string begins with the specified characters, and false otherwise.
 */

 str.startsWith(searchString, position);
 /*
searchString: The string to search for at the start of the original string.
position (optional): The position in the string at which to start the search. The default value is 0, meaning the search will begin from the start of the string.
*/
const str9 = "Hello, world!";

// Check if the string starts with "Hello"
console.log(str9.startsWith("Hello"));  // true

// Check if the string starts with "world"
console.log(str9.startsWith("world"));  // false

// Check if the string starts with "Hello" from position 1
console.log(str9.startsWith("ello", 1));  // true

// The ? in [0-9]? makes the second digit optional, so the regex can match both one-digit and two-digit numbers.

/* 
The concept of returning a function within a function is called currying. This approach allows you to create a variable that holds a function to be called later, but with a reference to the parameters of the outer function call.
 */

const innerOne = elemValue(1);
const final = innerOne("A");

/* 
innerOne would be your inner function, with num set to 1, and final would have the value of the cell with the id of "A1". This is possible because functions have access to all variables declared at their creation. This is called closure.
A closure is created when a function retains access to its lexical scope, even after the function that created the scope has finished executing. In simpler terms, the inner function still has access to variables from its outer function, even if the outer function has already completed.
*/

const curry = soup => veggies => {};
/* 
curry is a function which takes a soup parameter and returns a function which takes a veggies parameter. Using this syntax, update your addCharacters function to return an empty function which takes a character2 parameter.
*/
const addCharacters = character1 => character2 => {

}

const elemValueShort = num => character => idToText(character + num);

const elemValue = num => {
  const inner = character => {
    return idToText(character + num);
  }
  return inner;
}

/*
You can pass a function reference as a callback parameter. A function reference is a function name without the parentheses. For example:
*/

const myFunc = (val) => `value: ${val}`;
const array = [1, 2, 3];
const newArray = array.map(myFunc);

// In mathematics, an infix is a mathematical operator that appears between its two operands. For example, 1 + 2 is an infix expression.  

parseFloat(string)
/* 
The parseFloat() function in JavaScript is used to convert a string into a floating-point number. It parses the given string and returns the first valid floating-point number it encounters. If the string doesn't represent a valid number, it returns NaN (Not-a-Number).
Notes:
It only reads the number at the beginning of the string and stops parsing once it encounters a non-numeric character.
It ignores leading and trailing whitespaces.
If the string starts with a non-numeric character, the function returns NaN
*/

regex.test(string)
/* 
The test() method in JavaScript is used with regular expressions (RegEx). It tests if a pattern exists in a specified string and returns true if a match is found, otherwise it returns false. 
*/

let pattern = /hello/;
let result1 = pattern.test("hello world");  // Returns true, "hello" is found in the string
let result2 = pattern.test("world");  // Returns false, "hello" is not found

/* 
The test() method does not modify the string; it only checks if the pattern exists.
It returns a boolean value (true or false), depending on whether the regular expression matches part of the string or not. 
*/

const infix = /([\d.]+)([+-])([\d.]+)/; // const regex = /([\d.]+)([*\/])([\d.]+)/;

/* 
([\d.]+): This part matches one or more digits or a decimal point, representing the first number. The parentheses around it are used to capture the matched value.
([+-]): This matches either the + or - operator. The square brackets define a character class, and the + and - are the possible characters in this class.
([\d.]+): 
This matches another number, which could be an integer or a decimal. 
*/

const developerObj = {
  name: 'John',
  age: 34,
}

developerObj.hasOwnProperty('name'); // true
developerObj.hasOwnProperty('salary'); // false

/* 
To check if a property on a given object exists or not, you can use the hasOwnProperty() method.

The hasOwnProperty() method returns true or false depending on if the property is found on the object or not.

Here is an example of how to use the hasOwnProperty() method: 
*/

string.substring(startIndex, endIndex)

/*
 In JavaScript, the substring() method is used to extract a portion of a string between two specified indices.
 startIndex: The starting position (inclusive).
 endIndex: The ending position (exclusive). If omitted, the substring includes the rest of the string.
 The substring() method is useful for extracting parts of a string based on character positions. 
 */

 array.some(callback(element, index, array), thisArg)

/*  
The .some() method in JavaScript is used to check if at least one element in an array satisfies a specified condition. It returns a boolean value:
true if at least one element passes the test (i.e., the condition is true for any element).
false if none of the elements pass the test (i.e., the condition is false for all elements).
*/
const numbers7 = [1, 3, 5, 7, 8];
const hasEven = numbers7.some((num) => num % 2 === 0);
console.log(hasEven); // true (because 8 is even)

/* 
Arrays have an .every() method. Like the .some() method, .every() accepts a callback function which should take an element of the array as the argument. The .every() method will return true if the callback function returns true for all elements in the array.

Here is an example of a .every() method call to check if all elements in the array are uppercase letters. 
*/
const arr8 = ["A", "C", "C"];
arr8.every(letter => letter === letter.toUpperCase());
true

/* 
OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, developers use objects and classes to structure their code.
*/