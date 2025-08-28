// Day 7_Objects in JavaScript

// 🔹 1. Creating a simple object
const book = {
    title: "JavaScript Basics",
    author: "Meghana",
    pages: 120
};

console.log("Book title:", book.title);   // Dot notation
console.log("Book author:", book["author"]); // Bracket notation

// 🔹 2. Adding & Updating properties
book.year = 2025;        // Add new property
book.pages = 150;        // Update existing property
console.log("Updated book:", book);

// 🔹 3. Deleting properties
delete book.year;
console.log("After deleting year:", book);

// 🔹 4. Object with a method
const student = {
    name: "Sam",
    marks: 85,
    hasPassed: function () {
        return this.marks >= 90; // 'this' refers to current object
    }
};

console.log("Student passed?", student.hasPassed()); // true

// 🔹 5. Object with multiple methods
const calculator = {
    num1: 10,
    num2: 5,
    add: function () {
        return this.num1 + this.num2;
    },
    subtract: function () {
        return this.num1 - this.num2;
    },
    multiply: function () {
        return this.num1 * this.num2;
    },
    divide: function () {
        return this.num1 / this.num2;
    }
};

console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());
console.log("Divide:", calculator.divide());

// 🔹 6. Looping through object keys
for (let key in book) {
    console.log(`${key} → ${book[key]}`);
}

// 🔹 7. Object utility methods
console.log("Keys:", Object.keys(student));     // [ 'name', 'marks', 'hasPassed' ]
console.log("Values:", Object.values(student)); // [ 'Sam', 85, [Function: hasPassed] ]
console.log("Entries:", Object.entries(student));
// [ [ 'name', 'Sam' ], [ 'marks', 85 ], [ 'hasPassed', [Function: hasPassed] ] ]

// 🔹 8. Using spread with objects (copy & update)
const user = { id: 1, role: "Tester" };
const updatedUser = { ...user, role: "QA Engineer", active: true };
console.log("Updated user:", updatedUser);
