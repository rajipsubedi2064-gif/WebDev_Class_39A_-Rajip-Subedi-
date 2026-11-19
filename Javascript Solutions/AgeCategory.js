// Q3. Age Category
// Write a JavaScript program that takes a person's age and displays:

// Below 13 → "Child"
// 13–19 → "Teenager"
// 20–59 → "Adult"
// 60 or above → "Senior Citizen"
// Use if...else if...else.

let age = 25; 

if (age < 13) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else if (age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}