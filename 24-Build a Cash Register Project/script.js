let price = 1.87; 
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const inputCash = document.getElementById("cash"); 
const change = document.getElementById("change-due"); 
const purchaseBtn = document.getElementById("purchase-btn"); 

let currentUnits = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];

purchaseBtn.addEventListener("click", () => {
  const inputCashValue = parseFloat(inputCash.value);
  const changeDue = inputCashValue - price;

  if (inputCashValue < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  
  if (inputCashValue === price) {
    change.innerText = "No change due - customer paid with exact cash"
  }
});

const getChange = (changeDue, cid) => {
  let totalCid = parseFloat(cid.reduce((sum, [_,amount]) => sum + amount, 0).toFixed(2))
}
