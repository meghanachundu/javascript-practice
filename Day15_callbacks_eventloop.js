// Day 15 → Callbacks & Event Loop Intro

// 1️⃣ Callback Example
function user(name) {
  console.log("User name:", name);
}

function fetchUserData(name, callback) {
  console.log("Fetching user:", name);
  callback(name); // Call the callback after "fetching"
}

fetchUserData("Meghana", user);

// 2️⃣ Nested setTimeout Example (Callback Hell)
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// 3️⃣ Event Loop Example
console.log("Start");

setTimeout(() => console.log("Timeout callback (0ms)"), 0);

console.log("End");

// Explanation: 
// Even with 0ms, setTimeout is asynchronous. "Start" and "End" execute first. 
// Then the timeout callback runs after the synchronous code completes.

// 4️⃣ Optional: Cleaner Async using Promises
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSteps() {
  await wait(1000);
  console.log("Step A");
  await wait(1000);
  console.log("Step B");
  await wait(1000);
  console.log("Step C");
}

runSteps();
