// create interface
interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

class Car implements Vehicle {
  make: string;
  color: string;
  doors: number;
  speed: number;

  constructor(make: string, color: string, doors = 4) {
    this.make = make;
    this.color = color;
    this.doors = doors;
    this.speed = 0;
  }

  // methods
  accelerate(speed: number) {
    this.speed += speed;
    return this.speed.toString();
  }
  brake() {
    this.speed--;
    return this.speed.toString();
  }
  turn(direction: "left" | "right") {
    return `Turning ${direction}`;
  }
}
