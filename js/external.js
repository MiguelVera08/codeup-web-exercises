"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my Website");

var userColor = prompt('What is your favorite color?');

alert("Great " + userColor + " is my favorite color too!");

// // Exercise 3

// // Part 1
var priceForDay = prompt('What is the rental fee? ');
var mermaid = prompt('How many days do you want to rent Little Mermaid for? ');
var brotherBear = prompt("How many days do you want to rent Brother Bear for? ");
var hercules = prompt("How many days do you want to rent Hercules for? ");

var day1 = parseInt(mermaid);
var day2 = parseInt(brotherBear);
var day3 = parseInt(hercules);

var totalRentDays = day1 + day2 + day3;
var totalCost = totalRentDays * parseInt(priceForDay);

alert("Total cost to rent movies is $" + totalCost );

// //Part 2
var googlePay = prompt('How many hours did you work for google? ');
var googleRate = prompt("What was the hourly pay rate? ");

var amazonPay = prompt('How many hours did you work for amazon? ');
var amazonRate = prompt('What was the hourly pay rate? ');

var facebookPay = prompt('How many hours did you work for facebook? ');
var facebookRate = prompt('What was the hourly pay rate? ');

var pay1 = parseInt(googlePay) * parseInt(googleRate);
var pay2 = parseInt(amazonPay) * parseInt(amazonRate);
var pay3 = parseInt(facebookPay) * parseInt(facebookRate);

var weekPay = pay1 + pay2 + pay3;

alert("Total income for the week " + weekPay + " dollars");

// //Part 3
var classNotFull = confirm("Is the class full? ");

if (classNotFull === true) {

    alert("Class is full no spots available.")

}else {
    var classSize = prompt('What is the maximum class size? ');
    var currClassSize = prompt('What is the current class size? ');

    if ((parseInt(currClassSize) < parseInt(classSize)) && classNotFull === false) {
        alert("You are eligible to enroll");
    } else {
        alert("Sorry class is full");
    }
}

//var classIsNotFull = confirm('Class is not full')
//var noScheduleConflict = confirm('Schedules do not conflict')

// var studentEnrolled = classNotFull && noScheduleConflict;
// alert("Student can enroll: " + studentEnrolled);

// //Part 4
var offerValid = confirm('Is the offer still valid? ');

if (offerValid === true) {

    var premiumMember = confirm('Is the customer a Premium Member? ');

    if (premiumMember === true && offerValid === true) {

        alert("Customer is eligible for product offer. ");

    } else {
        var items = prompt("How many items do they have? ");
        if ((parseInt(items) > 2) && offerValid === true) {

            alert("Customer is eligible for product offer. ");

        } else {
            alert("Not enough items for product offer eligibility")
        }
    }

}else {
    alert("Offer has expired");
}








