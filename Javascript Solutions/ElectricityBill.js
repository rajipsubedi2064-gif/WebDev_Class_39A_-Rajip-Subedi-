// Q2. Electricity Bill
// Write a JavaScript program that takes the number of electricity
//  units consumed and calculates the bill according to these rules:
// Up to 50 units → Rs. 5 per unit
// 51–100 units → Rs. 7 per unit
// 101–200 units → Rs. 10 per unit
// Above 200 units → Rs. 12 per unit
// Use if...else if...else.


let units = 51

    let bill = 0;

    if (units <= 50) {
        // First 50 units charged at Rs. 5 per unit
        bill = units * 5;
    } 
    else if (units <= 100) {
        // First 50 units at Rs. 5 + remaining units (up to 100) at Rs. 7
        bill = (50 * 5) + ((units - 50) * 7);
    } 
    else if (units <= 200) {
        // First 50 at Rs. 5 + next 50 at Rs. 7 + remaining units (up to 200) at Rs. 10
        bill = (50 * 5) + (50 * 7) + ((units - 100) * 10);
    } 
    else {
        // First 50 at Rs. 5 + next 50 at Rs. 7 + next 100 at Rs. 10 + units above 200 at Rs. 12
        bill = (50 * 5) + (50 * 7) + (100 * 10) + ((units - 200) * 12);
    }

console.log("Electricity Bill = Rs. " + bill);