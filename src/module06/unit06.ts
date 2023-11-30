/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {
  private _data: Array<T> = new Array(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    } else {
      console.log("Index is greater than 10");
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return;
    }
  }
}

let cities = new DataStore<string>();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
// cities.AddOrUpdate(6, 8);

console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
console.log(cities.GetData(6));

// TODO Test items as numbers.
let items = new DataStore<number>();
items.AddOrUpdate(0, 34);
// items.AddOrUpdate(1, "Londin");

console.log(items.GetData(0));
console.log(items.GetData(1));

// TODO Test items as objects.
type Animal = { name: string; wild: boolean };
let animals = new DataStore<Animal>();
animals.AddOrUpdate(2, { name: "cow", wild: false });

console.log(animals.GetData(2));
