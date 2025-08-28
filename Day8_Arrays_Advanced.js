// Day 8_Arrays Advanced (find, some, every, sort)

// 1. find → returns first element that matches
let numbers = [10, 20, 30, 40, 50];
let found = numbers.find(num => num > 25);
console.log("find:", found); // 30

// 2. some → checks if any element passes condition
let hasAbove40 = numbers.some(num => num > 40);
console.log("some:", hasAbove40); // true

// 3. every → checks if all elements pass condition
let allAbove5 = numbers.every(num => num > 5);
console.log("every:", allAbove5); // true

// 4. sort → sorts array (lexicographical by default)
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log("After sorting:", fruits); // ["apple", "banana", "cherry"]

// Sorting numbers correctly
let nums = [100, 5, 25, 1];
nums.sort((a, b) => a - b);
console.log("numbers after sorting:", nums); // [1, 5, 25, 100]
