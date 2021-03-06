'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeLanguages = users.filter(person => person.languages.length >= 3);

//Display the users with 3 or more languages
console.log(threeLanguages);

// 2. Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(instructorsEmail => instructorsEmail.email);

//Display the users emails
console.log(usersEmail);

// 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let usersAvg = users.reduce((yearsExperience, instructor) => {
    return yearsExperience + instructor.yearsOfExperience;
}, 0);

//Display the avg total years of experience
console.log(usersAvg / users.length);

// 4. Use .reduce to get the longest email from the list of users.

let longestEmail = usersEmail.reduce((longEmail, currEmail) => {
    if (currEmail.length > longEmail.length) {
        return currEmail;
    } else {
        return longEmail
    }
}, "");

//Display the Longest Email
console.log(longestEmail);
// 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let names = users.reduce(
    (stack, user) => {
        return stack += `${user.name}` + ', ';
    }, ''
);
names = names.substring(0,names.length-1) + '.';
console.log('Your instructors are: ' + names);

//Bonus first solution
let listOfLan = (list,user) => {list.push(user.languages);
    return list
};

let languages = users.reduce(listOfLan,[]);
// turn the array to string
languages = languages.flat();
// take unique value and creates a list of object
languages = new Set(languages);
// making array
languages = Array.from(languages);
console.log(languages);

//2nd solution
let uniqueLang = users
    .reduce((languages, usersLang) => {
        usersLang.languages.forEach(function (language) {
            if (languages.includes(language)){
            } else {
                languages.push(language);
            }
        });
        return languages
    }, []);

console.log(uniqueLang);