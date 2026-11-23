// ===== Question 7: ATM Withdrawal System =====
const WITHDRAWAL_FEE = 25;

// returns an object so the caller gets both the result and the reason
const validateWithdrawal = (amount, balance) => {
  if (amount <= 0 || amount % 500 !== 0) {
    return { valid: false, message: "Amount must be a positive multiple of 500." };
  }
  if (amount + WITHDRAWAL_FEE > balance) {
    return { valid: false, message: "Insufficient balance." };
  }
  return { valid: true, message: "Withdrawal Successful!" };
};

// returns the new balance; unchanged if the transaction fails
const withdrawMoney = (amount, balance, callback) => {
  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);
  const result = callback(amount, balance);
  console.log(result.message);
  if (!result.valid) {
    console.log(`Remaining Balance: Rs. ${balance}`);
    return balance;
  }
  const newBalance = balance - amount - WITHDRAWAL_FEE;
  console.log(`Transaction Fee: Rs. ${WITHDRAWAL_FEE}`);
  console.log(`Remaining Balance: Rs. ${newBalance}`);
  return newBalance;
};

console.log("--- Q7 ---");
withdrawMoney(3000, 10000, validateWithdrawal);
withdrawMoney(3200, 10000, validateWithdrawal);
withdrawMoney(20000, 10000, validateWithdrawal);