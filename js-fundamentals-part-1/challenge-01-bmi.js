/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Mark weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
§ Data 2: Mark weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.
*/

const heightMark = 1.69;
const massMark = 78;
const heightJohn = 1.95;
const massJohn = 92;

//const heightMark = 1.88;
//const massMark = 95;
//const heightJohn = 1.76;
//const massJohn = 85;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);




