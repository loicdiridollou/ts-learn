"use strict";
// static properties of class
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }
    // accessors
    get make() {
        return this._make;
    }
    get color() {
        return this._color;
    }
    get doors() {
        return this._doors;
    }
    static getNumberOfCars() {
        return this.numberOfCars;
    }
}
// Properties
Car.numberOfCars = 0; // New static property
let car1 = new Car("make1", "color1", 2);
let car2 = new Car("make2", "color2", 4);
console.log(Car.getNumberOfCars());
