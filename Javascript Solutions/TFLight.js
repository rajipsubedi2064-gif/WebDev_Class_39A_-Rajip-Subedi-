// Q4. Traffic Light
// Write a JavaScript program that takes a traffic light color ("red", "yellow", or "green") and displays:

// "Stop" for red
// "Get Ready" for yellow
// "Go" for green
// "Invalid color" for any other input
// Use a switch statement.

let color = "yellow";

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}