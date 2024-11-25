const msg = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");


checkBtn.addEventListener("click", () => {
    if (msg.value === "") {
      alert("Giriş yapın lütfen!");
    }
  });
  