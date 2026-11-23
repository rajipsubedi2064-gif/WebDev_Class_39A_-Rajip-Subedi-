// ===== Question 9: Mobile Recharge System =====
// returns an actual monetary amount, which makes the next step a simple addition
const calculateRechargeBonus = (amount) => {
  if (amount >= 1000) return amount * 0.15;
  if (amount >= 500) return amount * 0.1;
  if (amount >= 100) return amount * 0.05;
  return 0;
};

const calculateTotalBalance = (amount, bonus) => amount + bonus;

const recharge = (number, amount, callback) => {
  const bonus = calculateRechargeBonus(amount);
  const total = callback(amount, bonus);
  console.log(`Mobile Number: ${number}`);
  console.log(`Recharge Amount: Rs. ${amount}`);
  console.log(`Bonus Received: Rs. ${bonus}`);
  console.log(`Total Balance: Rs. ${total}`);
};

console.log("--- Q9 ---");
recharge("9800000000", 1000, calculateTotalBalance);