// ===== Question 4: Movie Ticket Booking System =====
const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const calculateTotal = (price, quantity) => price * quantity;

// returns the discount amount (10% when 5 or more tickets)
const applyDiscount = (total, quantity) => (quantity >= 5 ? total * 0.1 : 0);

const bookTicket = (name, age, quantity, callback) => {
  const price = getTicketPrice(age);
  const total = calculateTotal(price, quantity);
  const discount = callback(total, quantity);
  console.log(`Customer: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${total}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${total - discount}`);
};

console.log("--- Q4 ---");
bookTicket("Hari", 25, 5, applyDiscount);