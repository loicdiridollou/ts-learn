"use strict";
class Car {
    constructor(make, color, doors = 4) {
        this.make = make;
        this.color = color;
        this.doors = doors;
        this.speed = 0;
    }
    // methods
    accelerate(speed) {
        this.speed += speed;
        return this.speed.toString();
    }
    brake() {
        this.speed--;
        return this.speed.toString();
    }
    turn(direction) {
        return `Turning ${direction}`;
    }
}
