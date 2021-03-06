"use strict";

// problem 1
// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the numbers 1
// through 10)

// function showMultiplicationTable(number) {
//
//     for(var i = 1; i <= 10; i++){
//
//         var times = number * i;
//
//         console.log(number + " x " + i + " = " + times )
//
//     }
// }
// showMultiplicationTable(7);

// problem 2
// Use a for loop and the code from the previous lessons to generate 10 random
// numbers between 20 and 200 and output to the console whether each number is odd
// or even. For example:

// for (var i = 0; i < 10; i++) {
//
//     var random = Math.floor(Math.random() * 180) + 20;
//
//     if(random % 2 === 0){
//         console.log(random + " is even")
//     }else{
//         console.log(random + " is odd")
//     }
// }

// problem 3
// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var i = 1; i <= 9; i++) {
//
//     console.log(i.toString().repeat(i));
//
// }


//problem 4
// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for(var i = 100; i >= 5; --i){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }