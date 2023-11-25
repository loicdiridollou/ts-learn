// lab on generics with interfaces and classes
interface Identity<T, U> {
  value: T;
  message: U;
}

let returnNumber2: Identity<number, string> = {
  value: 25,
  message: "Hello!",
};
let returnString2: Identity<string, number> = {
  value: "Hello!",
  message: 25,
};

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "Hello!"); // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

interface ProcessIdentity2<T, U> {
  value: T;
  message: U;
  process(): T;
}

class processIdentity2<X, Y> implements ProcessIdentity2<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value;
  }
}

let processor2 = new processIdentity2<number, string>(100, "Hello");
processor2.process(); // Displays 'Hello'
// processor2.value = "100"; // Type check error
