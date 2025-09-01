// Day 17 → async/await, error handling in async

// -------------------------------------------------
// Basic async/await example
// async functions always return a Promise
async function greet() {
  return "Hello, Async World!";
}

// Using .then()
greet().then((msg) => console.log("Using .then():", msg));

// Using await (inside another async function)
async function callGreet() {
  const message = await greet();
  console.log("Using await:", message, "\n");
}
callGreet();

// -------------------------------------------------
// 2️⃣ Async/await with setTimeout (simulate async task)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedMessage() {
  console.log("⏳ Please wait 2 seconds...");
  await delay(2000);
  console.log("✅ Thanks for waiting!\n");
}
delayedMessage();

// -------------------------------------------------
// 3️⃣ Handling errors with try/catch in async
function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("📦 Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data!");
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData(true); // change to false to test error
    console.log("Resolved:", data);
  } catch (error) {
    console.error("Caught Error:", error);
  } finally {
    console.log("👉 Data fetch attempt finished\n");
  }
}
getData();

// -------------------------------------------------
// 4️⃣ Sequential vs Parallel execution
async function sequentialDemo() {
  console.log("Sequential Start");
  const t1 = await fetchData(true);
  console.log("Step 1:", t1);

  const t2 = await fetchData(true);
  console.log("Step 2:", t2);

  console.log("Sequential End\n");
}

async function parallelDemo() {
  console.log("Parallel Start");
  const [t1, t2] = await Promise.all([fetchData(true), fetchData(true)]);
  console.log("Step 1:", t1);
  console.log("Step 2:", t2);
  console.log("Parallel End\n");
}

sequentialDemo();
parallelDemo();
