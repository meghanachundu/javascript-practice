// Day6_Arrays in JavaScript

// 1. Create an Array
let testCases = ["Login Test", "Signup Test", "Profile Update"];
console.log("Initial Array:", testCases);

// 2. push() → add at end
testCases.push("Logout Test");
console.log("After push:", testCases);

// 3. pop() → remove last
testCases.pop();
console.log("After pop:", testCases);

// 4. unshift() → add at beginning
testCases.unshift("Dashboard Test");
console.log("After unshift:", testCases);

// 5. shift() → remove first
testCases.shift();
console.log("After shift:", testCases);

// 6. map() → transform each element
let lengths = testCases.map(tc => tc.length);
console.log("Lengths of test case names:", lengths);

// 7. filter() → filter based on condition
let filtered = testCases.filter(tc => tc.includes("Login"));
console.log("Filtered test cases:", filtered);

// 8. reduce() → accumulate values
let nums = [10, 20, 30, 40];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum of nums:", sum);

// 9. for...of loop → iterate array
for (let tc of testCases) {
  console.log("Test case:", tc);
}
