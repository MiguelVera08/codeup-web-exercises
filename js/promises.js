'use strict';





// 1. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
function wait(num) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if(!isNaN(num)){
                resolve()
            }else {reject()}

        },num)
    }).then(() => console.log(`You\'ll see this after ${num/1000} second`)).catch(() => console.log(`rejected!`));
}

// wait(1000);
// wait(3000);
// wait(10000);

// 1.Walk-through


// 2. Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.



function lastCommit(user) {

    return fetch(`https://api.github.com/users/${user}/events/public`, {headers: {'Authorization': "token " + gitKey}})

        .then((data) => {
            console.log(data);
            return data.json()
        }).then((jsonData) => {
            console.log(jsonData);
            return "Date of last commit: " + jsonData[0].created_at + " user name is: " + jsonData[0].actor.display_login
        })

}



lastCommit('MiguelVera08').then((data)=> console.log(data));