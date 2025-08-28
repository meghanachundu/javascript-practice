// Day 4_Functions in JavaScript

// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Meghana"));

// 2. Function Expression (stored in variable)
const square = function (num) {
  return num * num;
};
console.log("Square of 5:", square(5));

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log("Multiply 4*6:", multiply(4, 6));

// 4. Default Parameters
function welcome(user = "Guest") {
  return `Welcome, ${user}`;
}
console.log(welcome());       // Welcome, Guest
console.log(welcome("Megha"));// Welcome, Megha

// 5. Function with Multiple Parameters
function sum(a, b, c) {
  return a + b + c;
}
console.log("Sum:", sum(2, 3, 4));

// 6. Function Returning Another Function (closure intro)
function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const increment = outer();
console.log("Counter:", increment()); // 1
console.log("Counter:", increment()); // 2
