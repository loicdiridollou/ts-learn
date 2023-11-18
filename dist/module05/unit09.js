"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit07_1 = require("./unit07");
// extending a class with inheritance
class ElectricCar extends unit07_1.NewCar {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.");
    }
    // Overrides the brake method of the Car class
    brake() {
        return `${this.worker()} is braking with the regenerative braking system.`;
    }
    // This function performs work for the other method functions
    worker() {
        return this.make;
    }
}
let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
