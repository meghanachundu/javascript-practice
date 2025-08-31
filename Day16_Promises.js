// Day 16 → Promises (resolve, reject, chaining)

// 1️⃣ Creating a simple Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Operation successful!");
    } else {
      reject("❌ Operation failed!");
    }
  }, 1000);
});

myPromise
  .then((msg) => console.log("Resolved:", msg))
  .catch((err) => console.error("Rejected:", err))
  .finally(() => console.log("👉 Promise finished\n"));

// -------------------------------------------------

// 2️⃣ Promise chaining
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Login success");
      resolve("User Token");
    }, 1000);
  });
}

function step2(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: Fetched user profile with token:", token);
      resolve("Profile Data");
    }, 1000);
  });
}

function step3(profile) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3: Dashboard loaded with", profile);
      resolve("Dashboard Ready");
    }, 1000);
  });
}

// Execute in sequence
step1()
  .then(step2)
  .then(step3)
  .then((final) => console.log("✅ Final Result:", final, "\n"))
  .catch((err) => console.error("Error:", err));

// -------------------------------------------------

// 3️⃣ Promise.all (run multiple async tasks together)
const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 Done"), 1000)
);
const task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 Done"), 2000)
);
const task3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 Done"), 1500)
);

Promise.all([task1, task2, task3]).then((results) => {
  console.log("👉 Promise.all Results:", results, "\n");
});

// -------------------------------------------------

// 4️⃣ Promise.race (whichever finishes first)
Promise.race([task1, task2, task3]).then((fastest) => {
  console.log("👉 Promise.race Winner:", fastest, "\n");
});
