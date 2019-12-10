'use strict';

// var pets = [];
// pets[1] = "Toby";
// pets[2] = "Princess";
// pets[3] = "Samson";
// pets[4] = "Jill";
// pets[5] = "Bubbles";
// pets[6] = "Malu";

var pets = ["Toby","Princess","Samson","Jill","Bubbles","Malu","Lily"];
console.log(pets);
// for (var i = 0; i <pets.length; i++){
//     console.log(pets[i]);
// }

//Add "Dante" to the beginning of the pets array
pets.unshift("Dante");
console.log(pets);

//Add "Ruby" to the end of the week
pets.push("Ruby");
console.log(pets);

//Remove "Ruby" from last spot of the array
pets.pop();
console.log(pets);

//Remove "Dante" from first spot of the array
pets.shift();
console.log(pets);

//Locate the index of the third item of the array
console.log(pets.indexOf("Samson"));

//Console log what the third item of the array is
console.log(pets[pets.indexOf("Samson")]);

//Show the third and fourth elements of the array
console.log(pets.slice(3,5));

//Reverse the the order of the pets array
pets.reverse();
console.log(pets);

//Sort the the pets array by their value order
pets.sort();
console.log(pets);

//Variable fruitsString that contains a string with naming a bunch of fruits
var fruitsString = "Mango,Banana,Pine-apple,Peach,Watermelon,Orange,Grapes";

//Display fruitsString before .splitt
console.log(fruitsString);

//Convert the string fruitsString to an array
var fruitsArray = fruitsString.split(',');
console.log(fruitsArray);

//Array holding a bunch of numbers
var numbers = [1,2,3,4,5,6];
console.log(numbers);

var numbersString = numbers.join(',');
console.log(numbersString);