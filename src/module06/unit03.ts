// using generics contraints to limit types
type ValidTypes = string | number;
function identity2<T extends ValidTypes, U>(value: T, message: U) {
  // Return type is inferred
  let result: ValidTypes = "";
  let typeValue: string = typeof value;

  if (typeof value === "number") {
    // Is it a number?
    result = value + value; // OK
  } else if (typeof value === "string") {
    // Is it a string?
    result = value + value; // OK
  }

  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`,
  );

  return result;
}

let numberValue = identity2<number, string>(100, "Hello");
let stringValue = identity2<string, string>("100", "Hello");

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
