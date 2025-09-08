// Basic reusable helpers
function clickElement(selector) {
  console.log(`Clicking element: ${selector}`);
}

function typeText(selector, text) {
  console.log(`Typing '${text}' into ${selector}`);
}

function waitFor(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Login & Logout
function login(username, password) {
  console.log("---- LOGIN START ----");
  typeText("#username", username);
  typeText("#password", password);
  clickElement("#loginBtn");
  console.log("Login successful");
  console.log("---- LOGIN END ----\n");
}

function logout() {
  console.log("---- LOGOUT START ----");
  clickElement("#profile");
  clickElement("#logoutBtn");
  console.log(" Logged out");
  console.log("---- LOGOUT END ----\n");
}

// Assertions
function assertEqual(actual, expected, message) {
  if (actual === expected) {
    console.log("", message);
  } else {
    console.error(` ${message}: Expected ${expected}, but got ${actual}`);
  }
}

function assertContains(text, keyword, message) {
  if (text.includes(keyword)) {
    console.log("", message);
  } else {
    console.error(`${message}: '${keyword}' not found in '${text}'`);
  }
}

// Reusable navigation
function navigateTo(page) {
  console.log(`Navigating to ${page} page...`);
}

// Example: Test flow
async function testAddToCart() {
  console.log("===== TEST START: Add to Cart =====");
  navigateTo("Home");
  login("Meghana", "1234");
  console.log("Searching for product: Laptop");
  clickElement("#addToCartBtn_Laptop");
  console.log("Verifying cart...");
  assertContains("Cart: Laptop, Phone", "Laptop", "Laptop is in cart");
  logout();
  console.log("===== TEST END =====\n");
}

// Run the test
testAddToCart();

//  Extra practice: waitFor example
(async () => {
  console.log("Waiting for 2 seconds before next test...");
  await waitFor(2000);
  console.log("Wait complete, running another login test...\n");
  login("TesterUser", "abcd");
})();
