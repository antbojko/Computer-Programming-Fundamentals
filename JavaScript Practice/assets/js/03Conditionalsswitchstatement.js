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

// Implement the logic above to use switch statement

let monthNumber = 4; // You can change this value to test different cases

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("WINTER");
        break;
    case 3:
    case 4:
    case 5:
        console.log("SPRING");
        break;
    case 6:
    case 7:
    case 8:
        console.log("SUMMER");
        break;
    case 9:
    case 10:
    case 11:
        console.log("FALL");
        break;
    default:
        console.log("Invalid month number");
        break;
}
 

