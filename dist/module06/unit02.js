"use strict";
// introduction to generics
function getArray(items) {
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
function getArrayTyped(items) {
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
