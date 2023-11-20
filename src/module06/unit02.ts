// introduction to generics

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25); // OK
stringArray.push("Rabbits"); // OK
numberArray.push("This is not a number"); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]

// with a single type
function getArrayTyped<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numberArrayTyped = getArrayTyped([5, 10, 15, 20]);
let stringArrayTyped = getArrayTyped(["Cats", "Dogs", "Birds"]);
numberArrayTyped.push(25); // OK
stringArrayTyped.push("Rabbits"); // OK
// numberArrayTyped.push("This is not a number"); // OK
// stringArrayTyped.push(30); // OK
console.log(numberArrayTyped); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArrayTyped); // ["Cats", "Dogs", "Birds", "Rabbits", 30]

// with multiple types
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");

console.log(typeof returnNumber);
console.log(typeof returnString);
console.log(typeof returnBoolean);

returnNumber = returnNumber * 100; // OK
console.log(returnNumber);
// returnString = returnString * 100; // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
