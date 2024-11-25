const msg = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");

console.log("this is valie pf input: " + msg.value)

checkBtn.addEventListener("click", () => {
    if (msg.value === "") {
      alert("Giriş yapın lütfen!");
    }
  });
  