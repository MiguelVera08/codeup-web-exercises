"use strict";


// //Problem 1
// var i = 2;
//
// while(i <= 65536){
//     console.log(i);
//     i *= 2;
// }

//Problem 2


// This is how you get a random number between 50 and 100 representing the amount of cones to sell
//     var allCones = Math.floor(Math.random() * 50) + 50;
//
//
// do {
//     // This expression will generate a random number between 1 and 5 simulating the amount of cones being bought by the clients.
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//
//     if(conesSold > allCones){
//        console.log("Cannot sell you " + conesSold + " cones I only have " + allCones + "...")
//     }else{
//         allCones -= conesSold;
//
//         console.log(conesSold + " cones sold ..." + allCones + " cones left.");
//     }
//
//
// }while(allCones > 0);
//
// console.log("Yay! I sold them all!");