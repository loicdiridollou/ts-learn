// implement generics with custom types and classes

class CleanCar {
  make: string = "Generic Car";
  doors: number = 4;
}
class CleanElectricCar extends CleanCar {
  make = "Electric Car";
  doors = 4;
}
class CleanTruck extends CleanCar {
  make = "Truck";
  doors = 2;
}
function accelerate<T extends CleanCar>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myElectricCar = new CleanElectricCar();
accelerate<CleanElectricCar>(myElectricCar);
let myTruck = new CleanTruck();
accelerate<CleanTruck>(myTruck);
