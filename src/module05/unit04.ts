// instantiate a class

import { Car } from "./unit03";

let myCar = new Car("Cool Company", "red", 2);

console.log(myCar.color);
console.log(myCar._color);

let myCar2 = new Car("Galaxy", "blue", 4);
console.log(myCar2.make);

// testing the optional field
let myCar3 = new Car("Galaxy", "blue");
console.log(myCar3.doors);

// testing the methods
console.log(myCar.accelerate(35));
console.log(myCar.brake());
console.log(myCar.turn("right"));
