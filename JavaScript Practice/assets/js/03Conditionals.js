/* 
  Developer: Anthony Bojkovski
  Purpose: Performing conditionals in JavaScript
*/

// Implement the if / else logic based on the following conditions
// Variable is monthNumber
// if monthNumber is equal to 12 or 1 or 2
// Display on the console "WINTER"
// if monthNumber is equal to 3 or 4 or 5
// Display on the console "SPRING"
// if monthNumber is equal to 6 or 7 or 8
// Display on the console "SUMMER"
// if monthNumber is equal to 9 or 10 or 11
// Display on the console "FALL"

let monthNumber = 4; // You can change this value to test different cases

if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    console.log("WINTER");
} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    console.log("SPRING");
} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    console.log("SUMMER");
} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    console.log("FALL");
} else {
    console.log("Invalid month number");
}


// Implement the logic above to use switch statement

