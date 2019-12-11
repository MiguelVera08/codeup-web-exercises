'use strict';


var car = {
    make: "Chrysler",
    engine: "four-cylinder",
    model: "Sebring",
    year: 2002,
    option: "convertible",

};

console.log('The car make is: ' + car["make"]);
console.log('The car make is: ' + car.model);

car.logMakeModel = function () {
    console.log("Car make/model is: " + this.make + " " + this.model);

};

car.logMakeModel();


var cars = [
    car,
    {
        make:"Dodge",
        model:"Challenger",
        year: 2015,
        report: function () {
            console.log(this.year + " " + this.make + " " + this.model);
        }
    },

    {
        make:"Ford",
        model:"Shelby GT 500",
        year: 1969,
        report: function () {
            console.log(this.year + " " + this.make + " " + this.model);
        }
    },

    {
        make:"Cadillac",
        model:"Escalade",
        year: 2019,
        report: function () {
            console.log(this.year + " " + this.make + " " + this.model);
        }
    },
];


// cars.forEach(function (car) {
//     console.log(car.year + " " + car.make + " " + car.model)
//
// });

car.report = function() {
    console.log(this.year + " " + this.make + " " + this.model);
}

cars.forEach(function (car) {
    car.report();

});