// Day 13 → DOM Basics (querySelector, getElementById) 

// 1. getElementById
const heading = document.getElementById("mainHeading");
heading.style.color = "blue";
heading.textContent = "Updated Heading using getElementById";

// 2. querySelector (selects first match)
const firstPara = document.querySelector(".para");
firstPara.style.fontWeight = "bold";
firstPara.textContent = "This is updated using querySelector";

// 3. querySelectorAll (selects all matches)
const allParas = document.querySelectorAll(".para");
allParas.forEach((p, index) => {
  p.style.color = "green";
  console.log(`Paragraph ${index + 1}:`, p.textContent);
});

// 4. Changing attributes
const img = document.querySelector("#demoImg");
img.setAttribute("alt", "Updated Image Alt Text");
img.src = "https://via.placeholder.com/150";

// 5. Creating and appending elements
const newDiv = document.createElement("div");
newDiv.textContent = "I was created dynamically!";
newDiv.style.background = "yellow";
newDiv.style.padding = "10px";
document.body.appendChild(newDiv);
