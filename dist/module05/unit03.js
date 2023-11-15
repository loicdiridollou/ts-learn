"use strict";
// create class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    // constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if (doors % 2 == 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number");
        }
    }
    // accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return "The color of the car is " + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number");
        }
    }
    // methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
exports.Car = Car;
