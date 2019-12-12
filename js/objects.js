(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Miguel",
    //     lastName: "Vera",
    //
    //     sayHello: function () {
    //         return "Hello from " + person.firstName + " " + person.lastName;
    //
    //     }
    // };
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    //Method 1
    // var shoppers = [
    //     {
    //         name: 'Cameron',
    //         amount: 180,
    //         discount: function () {
    //             console.log("Shoppers name: " + this.name);
    //             if(this.amount < 200){
    //                 console.log("Total amount: " + this.amount);
    //                 console.log("Total is " + (201-this.amount) + " dollars short in order to qualify for discount." )
    //             }else{
    //                 console.log("Total amount: " + this.amount);
    //                 console.log("Discount is 12%");
    //                 console.log("Amount after discount: " + (this.amount - (this.amount * .12)).toFixed(2))
    //             }
    //         }
    //     },
    //     {
    //         name: 'Ryan',
    //         amount: 250,
    //         discount: function () {
    //             console.log("Shoppers name: " + this.name);
    //             if(this.amount < 200){
    //                 console.log("Total amount: " + this.amount);
    //                 console.log("Total is " + (201-this.amount) + " dollars short in order to qualify for discount." )
    //             }else{
    //                 console.log("Total amount: " + this.amount);
    //                 console.log("Discount is 12%");
    //                 console.log("Amount after discount: " + (this.amount - (this.amount * .12)).toFixed(2))
    //             }
    //         }
    //     },
    //     {
    //         name: 'George',
    //         amount: 320,
    //         discount: function () {
    //             console.log("Shoppers name: " + this.name);
    //             if(this.amount < 200){
    //                 console.log("Total amount: " + this.amount);
    //                 console.log("Total is " + (201-this.amount) + " dollars short in order to qualify for discount." )
    //             }else{
    //                 console.log("Total amount: " + this.amount);
    //                 console.log("Discount is 12%");
    //                 console.log("Amount after discount: " + (this.amount - (this.amount * .12)).toFixed(2))
    //             }
    //         }
    //     }
    // ];
    //
    // shoppers.forEach(function (shopper) {
    //     shopper.discount();
    // });

    //method 2
    // var shoppers = [
    //         {name: 'Cameron', amount: 180},
    //         {name: 'Ryan', amount: 250},
    //         {name: 'George', amount: 320}
    //     ];
    // var report = function(shopper) {
    //     if (shopper.amount <= 200) {
    //         console.log(shopper);
    //         console.log("You need to pay $" + (201 - shopper.amount) + " to qualify for the discount.");
    //     } else  {
    //         console.log(shopper);
    //         console.log("You qualify for the 12% discount!");
    //         console.log("The amount after discount: $" + (shopper.amount - (shopper.amount * .12)));
    //     }
    // };
    // shoppers.forEach(report);



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Walkaway",
            author: {
                firstName: "Cory",
                lastName: "Doctorow",
            }
        },
        {
            title: "A Brief History of Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking",
            }
        },
        {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville",
            }
        },
        {
            title: "Treasure Island",
            author: {
                firstName: "Robert",
                lastName: "Stevenson",
            }
        },
    ];
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (var i = 0; i < books.length; i++){

        console.log("Book # " + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }

    books.forEach(function (book, i) {
        console.log("Book # " + (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var createBook = function(title, authorFirstName, authorLastName) {
            var book = {};
            book.title = title;
            book.author = {};
            book.author.firstName = authorFirstName;
            book.author.lastName = authorLastName;
            return book;
    };
    books.push(createBook("leviathan", "Scott", "Westfield"))

    var showBookInfo = function(book, i){
        console.log("Book # " + (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    };

    books.forEach(showBookInfo);

})();

