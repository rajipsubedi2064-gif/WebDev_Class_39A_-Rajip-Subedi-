// ===== Question 8: Restaurant Order Management System =====
const getFoodPrice = (foodName) => {
  const menu = { burger: 250, pizza: 500, momo: 150, chowmein: 180 };
  return menu[foodName.toLowerCase()]; // undefined if invalid
};

const calculateServiceCharge = (total) => total * 0.05;

// callback gets the food name and returns its price
const calculateOrder = (foodName, quantity, callback) => {
  const price = callback(foodName);
  if (price === undefined) return null;
  return price * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = callback(foodName, quantity, getFoodPrice);
  if (foodAmount === null) {
    console.log(`Sorry ${customerName}, "${foodName}" is not on the menu.`);
    return;
  }
  const serviceCharge = calculateServiceCharge(foodAmount);
  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${foodAmount + serviceCharge}`);
};

console.log("--- Q8 ---");
generateReceipt("Suman", "Burger", 2, calculateOrder);
generateReceipt("Suman", "Sushi", 1, calculateOrder);