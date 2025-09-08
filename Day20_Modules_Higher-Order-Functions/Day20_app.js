
// ---------- FILE: app.js ----------
import multiply, { add, subtract } from "./Day20_calc.js";

console.log("Add:", add(5, 3));          // 8
console.log("Subtract:", subtract(10, 4)); // 6
console.log("Multiply:", multiply(6, 7));  // 42


// ---------- Higher-Order Functions ----------

// 1. Using Array HOFs
let numbers = [10, 20, 30, 40];

let doubled = numbers.map(n => n * 2);        // [20,40,60,80]
let filtered = numbers.filter(n => n > 25);   // [30,40]
let sum = numbers.reduce((a, b) => a + b, 0); // 100

console.log("Doubled:", doubled);
console.log("Filtered:", filtered);
console.log("Sum:", sum);


// 2. Custom HOF - takes function as argument
function greetUser(greetFn) {
  console.log("Starting...");
  greetFn("Meghana");
  console.log("Finished...");
}

function hello(name) {
  console.log("Hello " + name);
}

greetUser(hello);


// 3. HOF - returns function
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15);


// 4. Real-world tester example → Retry Mechanism
function retry(operation, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return operation(...args);
      } catch (e) {
        console.log(`Attempt ${i + 1} failed`);
      }
    }
    throw new Error("All attempts failed ❌");
  };
}

// Flaky function (sometimes fails)
function flakyTask() {
  if (Math.random() > 0.5) throw new Error("Random Failure");
  return "✅ Success!";
}

let safeTask = retry(flakyTask, 3);
console.log(safeTask());
