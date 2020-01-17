'use strict';


var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

var reindeerList = [
    {
        name: "Dot",
        age: 5,
        isGold: false
    },
    {
        name: "Dasher",
        age: 8,
        isGold: true
    },
    {
        name: "Patch",
        age: 2,
        isGold: false
    },
    {
        name: "Rocket",
        age: 6,
        isGold: false
    },
    {
        name: "Dancer",
        age: 9,
        isGold: true
    },
    {
        name: "Prancer",
        age: 5,
        isGold: true
    },
    {
        name: "Groot",
        age: 9,
        isGold: false
    },
    {
        name: "Vixen",
        age: 9,
        isGold: true
    },
    {
        name: "Comet",
        age: 11,
        isGold: true
    },
    {
        name: "Archie",
        age: 3,
        isGold: false
    },
    {
        name: "Cupid",
        age: 13,
        isGold: true
    },
    {
        name: "Donder",
        age: 16,
        isGold: true
    },
    {
        name: "Boots",
        age: 16,
        isGold: false
    },
    {
        name: "Blizten",
        age: 16,
        isGold: true
    }
];


let furColors = [];
hamsters.map(hamster => {
    hamster.fur.map(color =>furColors.push(color));
});

console.log(furColors);

let goldReindeer = reindeerList.filter(deer => deer.isGold);
let goldReindeerNames = reindeerList.
    filter(deer => deer.isGold).
    map(deer => deer.name);

console.log(goldReindeer);
console.log(goldReindeerNames);

let totalHamsterHeight = hamsters.reduce((hamsterStack, hamster ) => {
    return hamsterStack + hamster.heightInMM;
}, 0);

console.log(totalHamsterHeight);

let hamsterStack = 0;
for(let hamster of hamsters){
    hamsterStack += hamster.heightInMM;
}

console.log(hamsterStack);