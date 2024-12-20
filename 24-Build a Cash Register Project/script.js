let cashInput = document.getElementById("cash");
let displayChangeDue = document.getElementById("change-due");
let purchaseBtn = document.getElementById("purchase-btn");

let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const checkRegister = () => {
  let cashInt = parseFloat(cashInput.value);
  let change = Number((cashInt - price).toFixed(2));
  let totalCid = Number(cid.reduce((total, sum) => total + sum[1], 0).toFixed(2));

  if (cashInput.value === "") {
    return;
  } else if (cashInt < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cashInt === price) {
    displayChangeDue.innerText = "No change due - customer paid with exact cash";
    return;
  }

  if (change > totalCid) {
    displayChangeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const denominationNames = [
    "ONE HUNDRED",
    "TWENTY",
    "TEN",
    "FIVE",
    "ONE",
    "QUARTER",
    "DIME",
    "NICKEL",
    "PENNY",
  ];
  let changeArr = [];
  let cidCopy = [...cid];

  for (let i = 0; i < denominations.length; i++) {
    let totalDenom = 0;

    while (change >= denominations[i] && cidCopy[cidCopy.length - 1 - i][1] > 0) {
      const updatedChange = Number((change - denominations[i]).toFixed(2));
      const updatedCid = Number((cidCopy[cidCopy.length - 1 - i][1] - denominations[i]).toFixed(2));

      if (updatedChange < 0 || updatedCid < 0) break;

      cidCopy[cidCopy.length - 1 - i][1] = updatedCid;
      change = updatedChange;
      totalDenom += denominations[i];
    }

    if (totalDenom > 0) {
      changeArr.push([denominationNames[i], totalDenom]);
    }
  }

  if (change > 0) {
    displayChangeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let remainingCid = cidCopy.reduce((total, sum) => total + sum[1], 0);
  if (remainingCid === 0) {
    displayChangeDue.innerHTML =
      "Status: CLOSED " +
      changeArr.map((cash) => `${cash[0]}: $${cash[1].toFixed(2)}`).join(" ");
    cid = cid.map((denom) => [denom[0], 0]);
  } else {
    displayChangeDue.innerHTML =
      "Status: <b>OPEN</b><br><br>" +
      changeArr
        .map((cash) => `<b>${cash[0]}</b>: $${cash[1].toFixed(2)}<br>`)
        .join(" ");
    cid = cidCopy;
  }

  displayCashInDrawer();
};

const displayCashInDrawer = () => {
  const changeDrawer = document.getElementById("change-drawer");
  const cidDisplay = cid
    .map(
      (cash) =>
        `<p>${cash[0]}: $${cash[1].toFixed(2)}</p>`
    )
    .join("");

  changeDrawer.innerHTML = `<h2>Change in Drawer:</h2>${cidDisplay}`;
};

window.onload = displayCashInDrawer;

purchaseBtn.addEventListener("click", checkRegister);

cashInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkRegister();
  }
});
