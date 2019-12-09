'use strict';


//Problem 1
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

do {
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));

    if (userNumber % 2 === 0) {
        alert(userNumber + " is not odd, please pick again")
    }else if (userNumber < 1 || userNumber > 50) {


        alert(userNumber + " is not between 1 and 50, please pick again");

    }else if (isNaN(userNumber)) {

        alert(userNumber + " is not a number, please pick again");

    }else {

        alert("congrats you picked the right number");
        break;
    }
} while (true);

for(var i = 1; i <= 50; i+=2){

    if(i === userNumber){
        console.log("Yikes! Skipping number " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}