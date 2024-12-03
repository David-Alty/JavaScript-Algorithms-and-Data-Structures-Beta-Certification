const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output"); 

convertBtn.addEventListener("click", () => {
    let input = parseInt(number.value); 
    const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let convertedNumber = [];

    if (isNaN(input) || input === "") {
        output.textContent = "Please enter a valid number";
    } else if (input < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (input > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        for (let i = 0; i < arabicNumbers.length; i++) {
            let quotient = Math.floor(input / arabicNumbers[i]); 
            input = input % arabicNumbers[i]; 
            
            for (let j = 0; j < quotient; j++) {
                convertedNumber.push(romanNumbers[i]);
            }
        }
        output.textContent = convertedNumber.join("");
    }
});
