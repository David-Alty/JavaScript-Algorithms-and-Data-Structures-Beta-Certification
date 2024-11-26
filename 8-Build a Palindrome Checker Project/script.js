const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");
console.log(textInput);

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
      alert("Please input a value");
    }
      });

const inputStr = textInput.value.replace(/[\W_]/g,"").toLowerCase();


console.log(inputStr);
