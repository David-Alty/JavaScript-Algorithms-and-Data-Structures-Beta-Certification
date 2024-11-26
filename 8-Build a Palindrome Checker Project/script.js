const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
    const inputStr = textInput.value.replace(/[\W_]/g, "").toLowerCase(); 

    if (inputStr === "") {
        alert("Please input a value");
        return;
    }

    
    if (inputStr === inputStr.split("").reverse().join("")) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else {
        result.innerText = `${textInput.value} is not a palindrome`;
    }
});
