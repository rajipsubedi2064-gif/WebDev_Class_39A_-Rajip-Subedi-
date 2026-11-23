// ===== Question 5: Employee Salary Processing System =====
const calculateBonus = (salary) =>
  salary >= 40000 ? salary * 0.1 : salary * 0.05;

const calculateTax = (salary) => salary * 0.05;

// receives two callbacks that both contribute to the result
const calculateNetSalary = (salary, bonusCallback, taxCallback) =>
  salary + bonusCallback(salary) - taxCallback(salary);

const generatePayslip = (name, salary, callback) => {
  const net = callback(salary, calculateBonus, calculateTax);
  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${calculateBonus(salary)}`);
  console.log(`Tax: Rs. ${calculateTax(salary)}`);
  console.log(`Net Salary: Rs. ${net}`);
};

console.log("--- Q5 ---");
generatePayslip("Ram", 50000, calculateNetSalary);