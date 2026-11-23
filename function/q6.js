// ===== Question 6: Food Delivery Charge Calculator =====
const calculateDelivery = (distance) =>
  distance <= 2 ? 30 : 30 + (distance - 2) * 15;

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

// callback only runs when delivery is NOT free
const processOrder = (customer, distance, orderAmount, callback) => {
  const charge = checkFreeDelivery(orderAmount) ? 0 : callback(distance);
  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${charge}`);
};

console.log("--- Q6 ---");
processOrder("Shyam", 5, 800, calculateDelivery);
processOrder("Gita", 5, 1200, calculateDelivery);