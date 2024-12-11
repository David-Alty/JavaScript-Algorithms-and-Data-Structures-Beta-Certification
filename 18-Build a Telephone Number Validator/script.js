const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener("click", validate);

function validate()  {
    console.log("check button clicked!");
    if(userInput.value === "") {
        alert("Please provide a phone number");
    } else {
        resultsDiv.textContent = "Phone number is valid!";
    }
};

clearBtn.addEventListener("click", clearResults);

function clearResults() {
    userInput.value = "";  
    resultsDiv.textContent = "";  
};
