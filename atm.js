var checkingBalance = document.querySelector("#checkingBalanceDiv");
var checkingAmount = document.querySelector("#checkingAmount");
var checkDepButton = document.querySelector("#checkingDepositButton");
var checkWithButton = document.querySelector("#checkingWithdrawalButton");

var savingsBalance = document.querySelector("#savingsBalanceDiv");
var savingsAmount = document.querySelector("#savingsAmount");
var savingsDepButton = document.querySelector("#savingsDepositButton");
var savingsWithButton = document.querySelector("#savingsWithdrawalButton");


function checkingDeposit() {
  var balance = checkingBalance.innerHTML;
  balance = parseInt(balance.replace("$", ""));
  var checkingInput = parseInt(checkingAmount.value);
  var total = balance + checkingInput;
  checkingBalance.innerHTML = "$" + total;
  checkingAmount.value = "";
}

function checkingWithdrawal() {
  var savingsBal = savingsBalance.innerHTML;
  savingsBal = parseInt(savingsBal.replace("$", ""));
  var checkingBal = checkingBalance.innerHTML;
  checkingBal = parseInt(checkingBal.replace("$", ""));
  var checkingInput = parseInt(checkingAmount.value);

  if(checkingBal < checkingInput) {
    var overDraftAmount = checkingInput - checkingBal;
    checkingBalance.innerHTML = "$0";
    savingsBalance.innerHTML = "$" + (savingsBal - overDraftAmount);

  } else {
    var total = checkingBal - checkingInput;
    checkingBalance.innerHTML = "$" + total;
    checkingAmount.value = "";
  }
}

function savingsDeposit() {
  var balance = savingsBalance.innerHTML;
  balance = parseInt(balance.replace("$", ""));
  var savingsInput = parseInt(savingsAmount.value);
  var total = balance + savingsInput;
  savingsBalance.innerHTML = "$" + total;
  savingsAmount.value = "";
}

function savingsWithdrawal() {
  var balance = savingsBalance.innerHTML;
  balance = parseInt(balance.replace("$", ""));
  var savingsInput = parseInt(savingsAmount.value);
  var total = balance - savingsInput;
  savingsBalance.innerHTML = "$" + total;
  savingsAmount.value = "";
}


checkWithButton.addEventListener("click", checkingWithdrawal);
checkDepButton.addEventListener("click", checkingDeposit);

savingsWithButton.addEventListener("click", savingsWithdrawal);
savingsDepButton.addEventListener("click", savingsDeposit);
