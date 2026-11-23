// ===== Question 2: Student Result Processing System =====
const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

// callback receives the average and returns the division
const processResult = (name, m1, m2, m3, callback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = callback(average);
  console.log(`Student: ${name}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Division: ${division}`);
};

console.log("--- Q2 ---");
processResult("Sita", 80, 75, 70, getDivision);