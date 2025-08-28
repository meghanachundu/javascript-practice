// Day 5_Scope and Closures

// 1. Global Scope
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // accessible inside function
}
showGlobal();

// 2. Function Scope (var vs let/const)
function testScope() {
  if (true) {
    var a = "I am var (function scoped)";
    let b = "I am let (block scoped)";
    const c = "I am const (block scoped)";
    console.log("Inside block:", a, b, c);
  }
  console.log("Outside block-var:", a);  // ✅ works
  // console.log(b); // ❌ Error (block scoped)
  // console.log(c); // ❌ Error (block scoped)
}
testScope();

// 3. Lexical Scope
function outer() {
  let outerVar = "I am from outer function";

  function inner() {
    console.log(outerVar); // inner can access outer
  }

  inner();
}
outer();

// 4. Closure Example
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log("Counter1:", counter1()); // 1
console.log("Counter1:", counter1()); // 2
console.log("Counter1:", counter1()); // 3

const counter2 = createCounter(); // new closure, separate count
console.log("Counter2:", counter2()); // 1
