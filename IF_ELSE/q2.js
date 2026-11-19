// Q2: Time-Based Greeting
const hour = 14; // 24-hour format (0-23)

if (hour >= 5 && hour <= 11) {
    console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}
