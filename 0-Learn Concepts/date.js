/*In JavaScript, there are many built-in constructors that create objects.
 A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.

For example, you can use the Date() constructor with
 the new operator to create a new Date object that returns a string with the current date and time:*/

const currentDate = new Date();
console.log(currentDate);

const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();


const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);