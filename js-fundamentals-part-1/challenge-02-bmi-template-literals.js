/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
   "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.
*/

// Data 1
const heightMark = 1.69;
const massMark = 78;
const heightJohn = 1.95;
const massJohn = 92;

// Data 2 (uncomment to test)
// const heightMark = 1.88;
// const massMark = 95;
// const heightJohn = 1.76;
// const massJohn = 85;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
