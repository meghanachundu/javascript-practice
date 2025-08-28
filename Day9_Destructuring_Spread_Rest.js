// Day 9_Destructuring, Spread & Rest Operators

// 1. Array Destructuring
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...restNums] = numbers;
console.log("First:", first);  // 10
console.log("Second:", second); // 20
console.log("Rest Numbers:", restNums); // [30, 40, 50]

// 2. Object Destructuring
const user = {
  name: "Meghana",
  age: 25,
  role: "QA Automation Tester",
};
const { name, age, role } = user;
console.log("Name:", name);
console.log("Age:", age);
console.log("Role:", role);

// 3. Nested Destructuring
const employee = {
  id: 101,
  personal: {
    firstName: "John",
    lastName: "Doe",
  },
};
const {
  personal: { firstName, lastName },
} = employee;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);

// 4. Spread Operator (copying and merging arrays/objects)
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedArr = [...arr1, ...arr2];
console.log("Merged Array:", mergedArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObj);

// 5. Rest Operator (function arguments)
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("Sum:", sum(10, 20, 30, 40));

// 6. Default Values with Destructuring
const [x = 5, y = 10] = [7];
console.log("x:", x); // 7
console.log("y:", y); // 10