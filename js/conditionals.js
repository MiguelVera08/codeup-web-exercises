"use strict";
// console.log('Hello from conditionals.js');
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// var choice = confirm("Would you like to enter a number? ");
//
// if(choice === true){
//     var number = parseFloat(prompt("Please enter a number: "));
//     if(isNaN(number)){
//         alert("You did not enter a number!");
//     }else{
//         if(number % 2 === 0){
//             alert(number + " is even.")
//         }else{
//             alert(number + " is odd.")
//         }
//         var oneHundred = number + 100;
//
//         alert("Here is your number plus 100: " + oneHundred);
//         if(number < 0){
//             alert(number + " is negative.")
//         }else{
//             alert(number + " is positive.")
//         }
//     }
// } else{
//     alert("Goodbye, have a nice day.");
// }


// function askNumber(num){
//
//     var choice = confirm("Would you like to enter a number? ")
//
//     if(choice === true) {
//         var number = parseFloat(prompt("Please enter a number: "));
//
//         if (isNaN(number)) {
//             console.log("You did not enter a number!");
//         } else {
//             console.log(oddOrEven(number));
//             console.log(hundred(number));
//             console.log(posOrNeg(number));
//         }
//     }else{
//         alert("Goodbye, have a nice day.");
//     }
// }
//
// function oddOrEven(number){
//     if(number % 2 === 0){
//         return number + " is even.";
//     }else{
//         return number + " is odd.";
//     }
// }
//
// function hundred(number){
//     return "Here is your number plus 100: " + (number + 100);
// }
//
// function posOrNeg(number){
//     if(number < 0){
//         return number + " is negative.";
//     }else{
//         return number + " is positive.";
//     }
// }

// askNumber();
/* ########################################################################## */
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if(color === "blue" ){
//         return color + " is the color of the sky";
//     }else if(color === "red"){
//         return "Strawberries are " + color;
//     }else if(color === "orange"){
//         return "Carrots are " + color;
//     }else if(color === "yellow"){
//         return "Bananas are " + color;
//     }else if(color === "indigo"){
//         return "Some eggplants are " + color;
//     }else if(color === "violet") {
//         return "Plums are " + color;
//     }else if(color === "green"){
//         return "Pine-trees are " + color;
//     }else{
//         return "I don't know anything about " + color;
//     }
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("orange"));
// console.log(analyzeColor("yellow"));
// console.log(analyzeColor("green"));
// console.log(analyzeColor("indigo"));
// console.log(analyzeColor("violet"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColorSwitch(color){
//
//     switch (color) {
//         case "blue":
//             return color + " is the color of the sky";
//             break;
//         case "red":
//             return "Strawberries are " + color;
//             break;
//         case "orange":
//             return "Carrots are " + color;
//             break;
//         case "yellow":
//             return "Bananas are " + color;
//             break;
//         case "indigo":
//             return "Some eggplants are " + color;
//             break;
//         case "violet":
//             return "Plums are " + color;
//             break;
//         case "green":
//             return "Pine-trees are " + color;
//             break;
//         default:
//             return "I don't know anything about " + color;
//             break;
//     }
// }
//
// console.log(analyzeColorSwitch(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var pickColor = prompt("Enter a color: ");
//
// alert(analyzeColorSwitch(pickColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total){
    if(luckyNumber === 0){
        return total;
    }else if(luckyNumber === 1){
        return total - (total * 0.10);
    }else if(luckyNumber === 2){
        return total - (total * 0.25);
    }else if(luckyNumber === 3){
        return total - (total * 0.35);
    }else if(luckyNumber === 4) {
        return total - (total * 0.50);
    }else{
        return total - total;
    }
}

// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalPrice = parseFloat(prompt("Enter the total bill: "));

alert("Your lucky number is: " + luckyNumber);
alert("Total before the applied discount is: $" + totalPrice.toFixed(2));
alert("The total after the applied discount is: $" + calculateTotal(luckyNumber, totalPrice).toFixed(2));
