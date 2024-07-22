"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCar = void 0;
// static properties of class
class NewCar {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        NewCar.numberOfCars++; // Increments the value of the static property
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
exports.NewCar = NewCar;
// Properties
NewCar.numberOfCars = 0; // New static property
function main() {
    let _c = new NewCar("make2", "color2", 4);
    let _d = new NewCar("make2", "color2", 4);
    console.log(NewCar.getNumberOfCars());
}
if (require.main === module) {
    main();
}
