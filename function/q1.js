// ===== Question 1: Smart Electricity Bill Calculator =====
const calculateBill = (units) => {
  const serviceFee = 50;
  let charge = 0;
  if (units <= 20) {
    charge = units * 5;
  } else if (units <= 50) {
    charge = 20 * 5 + (units - 20) * 7;
  } else {
    charge = 20 * 5 + 30 * 7 + (units - 50) * 10;
  }
  return charge + serviceFee;
};

// displayBill is responsible for display; the callback does the calculation
const displayBill = (name, units, callback) => {
  const amount = callback(units);
  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${amount}`);
};

console.log("--- Q1 ---");
displayBill("Ram", 65, calculateBill);