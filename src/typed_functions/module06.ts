// Module 6 - Define function types

import { addNumbers } from "../module01";

// type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: "add" | "subtract"): Calculator => {
  if (operation === "add") {
    return addNumbers;
  } else {
    return subtractNumbers;
  }
};

console.log(doCalculation("add")(2, 3));
