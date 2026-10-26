// Week 4 - Day 2: Control Flow (Conditionals & Loops)
// Logic Practice: write pseudocode first, then code.
// Run with: node day2.js

// ---------------------------------------------------------------
// 1. Even or odd
// ---------------------------------------------------------------
// PSEUDOCODE
//   set a number
//   if number modulo 2 is 0, print "even"
//   otherwise, print "odd"
console.log("--- 1. Even or odd ---");
const num = 7;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// ---------------------------------------------------------------
// 2. Grade calculator with guard clause
// ---------------------------------------------------------------
// PSEUDOCODE
//   for each score:
//     if score is below 0 or above 100, print "Invalid score"
//     otherwise assign A/B/C/D/F using the grading ranges
console.log("\n--- 2. Grade calculator ---");
const scores = [95, 74, 61, 52, 30, 100, 105, -5];
for (const score of scores) {
  if (score < 0 || score > 100) {
    console.log(`${score}: Invalid score (must be 0-100)`);
    continue;
  }

  let grade;
  if (score >= 80) {
    grade = "A";
  } else if (score >= 70) {
    grade = "B";
  } else if (score >= 60) {
    grade = "C";
  } else if (score >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`${score}: ${grade}`);
}

// ---------------------------------------------------------------
// 3. Ticket price
// ---------------------------------------------------------------
// PSEUDOCODE
//   for each visitor:
//     if age > 65, price = 0
//     else if age < 12, price = 2000
//     else if visitor is a student, price = 3000
//     otherwise, price = 5000
console.log("\n--- 3. Ticket price ---");
const visitors = [
  { age: 8, isStudent: false },
  { age: 20, isStudent: true },
  { age: 35, isStudent: false },
  { age: 70, isStudent: false },
  { age: 68, isStudent: true }
];
for (const { age, isStudent } of visitors) {
  let price;
  if (age > 65) {
    price = 0;
  } else if (age < 12) {
    price = 2000;
  } else if (isStudent) {
    price = 3000;
  } else {
    price = 5000;
  }
  console.log(`Age ${age}, student: ${isStudent} -> ${price} RWF`);
}

// ---------------------------------------------------------------
// 4. Day planner using switch
// ---------------------------------------------------------------
// PSEUDOCODE
//   for each day:
//     switch on the day name
//     Monday-Friday: print the class activity
//     Saturday/Sunday: print "No class"
//     otherwise: print "Unknown day"
console.log("\n--- 4. Day planner ---");
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Xyz"];
for (const day of days) {
  switch (day) {
    case "Mon":
      console.log("Mon: Introduction and lecture");
      break;
    case "Tue":
      console.log("Tue: Hands-on coding lab");
      break;
    case "Wed":
      console.log("Wed: Logic practice and pair programming");
      break;
    case "Thu":
      console.log("Thu: Project work and code review");
      break;
    case "Fri":
      console.log("Fri: Demonstrations and quiz");
      break;
    case "Sat":
    case "Sun":
      console.log(`${day}: No class`);
      break;
    default:
      console.log(`${day}: Unknown day`);
  }
}

// ---------------------------------------------------------------
// 5. Countdown
// ---------------------------------------------------------------
// PSEUDOCODE
//   start at 10
//   while the number is at least 1, print it and subtract 1
//   print "Liftoff!"
console.log("\n--- 5. Countdown ---");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Liftoff!");

// ---------------------------------------------------------------
// 6. Sum and average
// ---------------------------------------------------------------
// PSEUDOCODE
//   set a list of marks and sum = 0
//   add every mark to sum
//   average = sum / number of marks
//   print sum and average
console.log("\n--- 6. Sum and average ---");
const marks = [45, 78, 90, 62, 88];
let sum = 0;
for (const mark of marks) {
  sum += mark;
}
const average = sum / marks.length;
console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);

// ---------------------------------------------------------------
// 7. Find the first number greater than 100
// ---------------------------------------------------------------
// PSEUDOCODE
//   inspect numbers one by one
//   when a number is greater than 100, save it and stop the loop
//   print the found number, or say none was found
console.log("\n--- 7. First number greater than 100 ---");
const values = [12, 45, 99, 130, 250, 7];
let found;
for (const value of values) {
  if (value > 100) {
    found = value;
    break;
  }
}
console.log(found !== undefined
  ? `First number greater than 100: ${found}`
  : "No number greater than 100");

// ---------------------------------------------------------------
// 8. Skip negative numbers
// ---------------------------------------------------------------
// PSEUDOCODE
//   for each number:
//     if it is negative, skip it
//     otherwise print it
console.log("\n--- 8. Skip negatives ---");
const mixed = [5, -2, 8, -9, 0, 14, -1];
for (const value of mixed) {
  if (value < 0) continue;
  console.log(value);
}

// ---------------------------------------------------------------
// 9. Multiplication table
// ---------------------------------------------------------------
// PSEUDOCODE
//   for i from 1 through 12, print 7 multiplied by i
console.log("\n--- 9. Multiplication table for 7 ---");
for (let i = 1; i <= 12; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// ---------------------------------------------------------------
// 10. FizzBuzz with Kigali variation
// ---------------------------------------------------------------
// PSEUDOCODE
//   for each number from 1 to 100:
//     start with empty output
//     if divisible by 3, add "Fizz"
//     if divisible by 5, add "Buzz"
//     if divisible by 7, add "Kigali"
//     if output is empty, print the number; otherwise print output
console.log("\n--- 10. FizzBuzz + Kigali (1-100) ---");
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Kigali";
  console.log(output || i);
}

// Challenge: right-angled triangle
// PSEUDOCODE
//   for row from 1 to 5:
//     create an empty line
//     add one star for each column up to the row number
//     print the line
console.log("\n--- Challenge: triangle ---");
for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);
}
