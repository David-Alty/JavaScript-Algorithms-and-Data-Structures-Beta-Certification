const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", validate);

const validate = () => {
    if(userInput.value === "") {
        alert("Please provide a phone number");
    }
}

clearBtn.addEventListener("click", clearResults);

const clearResults = () => {
    resultsDiv.textContent = "";
}