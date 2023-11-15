import { NewCar } from "./unit07";

// extending a class with inheritance

class ElectricCar extends NewCar {
  // Properties
  private _range: number; // Properties unique to ElectricCar
  // Constructor
  /// Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }
  // Accessors
  // Methods
  charge() {
    console.log(this.worker() + " is charging.");
  }
  // Overrides the brake method of the Car class
  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`;
  }
  // This function performs work for the other method functions
  worker(): string {
    return this.make;
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
