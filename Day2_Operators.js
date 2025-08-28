// Day2_Operators in JavaScript

// 1. Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);      // 13
console.log("Subtraction:", a - b);   // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);      // 3.333...
console.log("Modulus:", a % b);       // 1
console.log("Exponent:", a ** b);     // 1000

// 2. Assignment Operators
let x = 5;
x += 2;   // x = x + 2
x *= 3;   // x = x * 3
console.log("After += and *= :", x);  // 21

// 3. Comparison Operators
console.log("5 == '5' :", 5 == "5");   // true (loose equality)
console.log("5 === '5' :", 5 === "5"); // false (strict equality)
console.log("a > b :", a > b);         // true
console.log("a <= b :", a <= b);       // false

// 4. Logical Operators
let isTester = true;
let knowsJS = false;
console.log("AND (&&):", isTester && knowsJS); // false
console.log("OR (||):", isTester || knowsJS);  // true
console.log("NOT (!):", !isTester);            // false

// 5. Ternary Operator
let age = 20;
let status = age >= 18 ? "Major" : "Minor";
console.log("Status:", status);