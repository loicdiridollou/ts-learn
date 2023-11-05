// any and unknown types

let randomValue: any = 10;
console.log(randomValue);
randomValue = "Mateo"; // OK
console.log(randomValue);
randomValue = true; // OK
console.log(randomValue);

randomValue = "Mateo"; // OK
console.log(typeof randomValue);

if (typeof randomValue === "string") {
  console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}
