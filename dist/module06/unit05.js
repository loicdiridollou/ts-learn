"use strict";
// implement generics with custom types and classes
class CleanCar {
    constructor() {
        this.make = "Generic Car";
        this.doors = 4;
    }
}
class CleanElectricCar extends CleanCar {
    constructor() {
        super(...arguments);
        this.make = "Electric Car";
        this.doors = 4;
    }
}
class CleanTruck extends CleanCar {
    constructor() {
        super(...arguments);
        this.make = "Truck";
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new CleanElectricCar();
accelerate(myElectricCar);
let myTruck = new CleanTruck();
accelerate(myTruck);
