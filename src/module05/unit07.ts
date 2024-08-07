// static properties of class
export class NewCar {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
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

  public static getNumberOfCars(): number {
    return this.numberOfCars;
  }
}

function main() {
  let _c = new NewCar("make2", "color2", 4);
  let _d = new NewCar("make2", "color2", 4);

  console.log(NewCar.getNumberOfCars());
}

if (require.main === module) {
  main();
}
