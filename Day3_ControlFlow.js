// Day 3: Control Flow in JavaScript

// 1. if / else
let num = -3;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. switch statement
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 3. for loop
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 4. while loop
console.log("While loop:");
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

// 5. do...while loop
console.log("Do...while loop:");
let j = 5;
do {
  console.log(j);
  j--;
} while (j > 0);