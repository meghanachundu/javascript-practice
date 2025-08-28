// Day 11 → JSON, LocalStorage, SessionStorage

// 1. JSON.parse & JSON.stringify
const user = {
  name: "Meghana",
  age: 25,
  role: "Frontend Developer",
};

// Convert object to JSON string
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// Convert JSON string back to object
const parsedUser = JSON.parse(jsonString);
console.log("Parsed Object:", parsedUser);

// 2. LocalStorage
// Save data
localStorage.setItem("username", "Meghana");
localStorage.setItem("user", JSON.stringify(user)); // object must be stringified

// Get data
const storedName = localStorage.getItem("username");
console.log("Stored Name:", storedName);

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log("Stored User Object:", storedUser);

// Remove single item
localStorage.removeItem("username");

// Clear all storage
// localStorage.clear();

// 3. SessionStorage
// Works same as localStorage, but only for one browser session
sessionStorage.setItem("sessionId", "ABC123");
console.log("Session ID:", sessionStorage.getItem("sessionId"));

// Remove session storage item
// sessionStorage.removeItem("sessionId");

// Clear all session storage
// sessionStorage.clear();
