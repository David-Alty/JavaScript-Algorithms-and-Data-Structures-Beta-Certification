/*Yes, the split, reverse, and join methods are originally designed for arrays. However, they can be used on strings because:

split(""): Splits a string into an array (each character becomes an element of the array).
reverse(): Reverses an array.
join(""): Joins the array elements back into a string.
Thus, these methods can be applied to strings indirectly by converting the string into an array first. */

let str = "hello";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // "olleh"


/*Why is split Needed?
Strings (in JavaScript) are immutable, meaning they cannot be changed directly. However,
 by using the split method, you convert the string into an array, which can then be manipulated. */

 /* Alternative Solution: Using a Loop to Reverse
If you don't want to use arrays, you can reverse the string manually with a loop: */

let str2 = "hello";
let reversedStr2 = "";

for (let i = str2.length - 1; i >= 0; i--) {
    reversedStr2 += str2[i];
}

console.log(reversedStr2); // "olleh"

/* Comparison: split vs Loop Method
split, reverse, join:

This is a cleaner and more readable method.
However, it involves creating arrays, which might use slightly more memory.
Loop Method:

A more manual approach.
More memory-efficient. */

/* Conclusion
Yes, split, reverse, and join can be used on strings indirectly. However, if you want to perform string operations without using arrays, you 
can use loops or other methods. Which approach to choose depends on performance and readability preferences. 😊*/