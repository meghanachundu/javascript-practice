// Day 10 → Template Literals, Dates, Error Handling

// 1. Template Literals (backticks)
const firstName = "Meghana";
const job = "Frontend Developer";
const message = `Hello, my name is ${firstName} and I work as a ${job}.`;
console.log(message);

// Multi-line strings
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// 2. Dates
const now = new Date();
console.log("Current Date:", now);
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // 0-based
console.log("Date:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// Custom date
const birthday = new Date("1998-05-15");
console.log("Birthday:", birthday.toDateString());

// Date formatting example
console.log("Locale Date:", now.toLocaleDateString());
console.log("Locale Time:", now.toLocaleTimeString());

// 3. Error Handling (try...catch)
try {
  const num = 10;
  if (num > 5) {
    throw new Error("Number is greater than 5!");
  }
  console.log("This will not run if error is thrown");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("Finally block always runs (cleanup code here).");
}

// Example: safe JSON parsing
const jsonString = '{"name":"John","age":30}';
try {
  const parsed = JSON.parse(jsonString);
  console.log("Parsed JSON:", parsed);
} catch (err) {
  console.log("Invalid JSON:", err.message);
}
