// Day 18 → Fetch API (GET & POST)

// 1. GET request using async/await
async function getPost(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    let data = await response.json();
    console.log("GET → Post Data:", data);
  } catch (error) {
    console.error("Error in GET:", error.message);
  }
}

// 2. POST request (create new post)
async function createPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My new post",
        body: "This is created using fetch POST",
        userId: 1
      })
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    let data = await response.json();
    console.log("POST → Created Data:", data);
  } catch (error) {
    console.error("Error in POST:", error.message);
  }
}

// 3. Chained Requests (Fetch user → then fetch user posts)
async function getUserAndPosts(userId) {
  try {
    let userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userRes.ok) throw new Error("User not found");
    let user = await userRes.json();

    console.log(`User Found: ${user.name} (${user.email})`);

    let postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!postsRes.ok) throw new Error("Posts not found");
    let posts = await postsRes.json();

    console.log(`Posts by ${user.name}:`);
    posts.slice(0, 3).forEach(p => console.log("-", p.title));
  } catch (err) {
    console.error("Error in User+Posts:", err.message);
  }
}

// Run functions
getPost(1);
createPost();
getUserAndPosts(1);
