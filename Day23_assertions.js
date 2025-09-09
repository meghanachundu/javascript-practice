// Import Node.js built-in assertion module
const assert = require("assert");

//  Example 1: Basic equality check
function testAddition() {
  const result = 2 + 2;
  assert.strictEqual(result, 4, "2 + 2 should equal 4");
  console.log(" testAddition passed");
}

//  Example 2: Deep equality for objects
function testUserObject() {
  const user = { name: "Meghana", role: "Tester" };
  const expected = { name: "Meghana", role: "Tester" };
  assert.deepStrictEqual(user, expected, "User object should match expected");
  console.log(" testUserObject passed");
}

//  Example 3: Throws error
function testErrorThrow() {
  function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }

  assert.throws(() => divide(10, 0), /Division by zero/, "Should throw division by zero error");
  console.log(" testErrorThrow passed");
}

//  Example 4: Not strict equal
function testInequality() {
  const actual = "Hello";
  const expected = "World";
  assert.notStrictEqual(actual, expected, "Strings should not be equal");
  console.log(" testInequality passed");
}

//  Example 5: Contains (custom check)
function testContains() {
  const cart = ["Laptop", "Phone", "Tablet"];
  assert.ok(cart.includes("Laptop"), "Cart should contain Laptop");
  console.log(" testContains passed");
}

// -------------------------
// Run all test functions
// -------------------------
function runTests() {
  console.log("===== Running Assertions Tests =====");
  testAddition();
  testUserObject();
  testErrorThrow();
  testInequality();
  testContains();
  console.log("===== All Tests Passed Successfully =====");
}

runTests();
