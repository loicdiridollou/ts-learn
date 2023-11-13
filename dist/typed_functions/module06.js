"use strict";
// Module 6 - Define function types
Object.defineProperty(exports, "__esModule", { value: true });
const module01_1 = require("../module01");
let subtractNumbers = (x, y) => x - y;
console.log((0, module01_1.addNumbers)(1, 2));
console.log(subtractNumbers(1, 2));
let doCalculation = (operation) => {
    if (operation === "add") {
        return module01_1.addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation("add")(2, 3));
