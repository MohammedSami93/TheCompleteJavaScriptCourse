// alert('hello world!');
// console.log(10 + 20 + 30 + 40);


// let lastName = "mohammed";
// console.log(lastName);

// lastName = "sami";
// console.log(lastName);


// Undefined data type
// let year;
// console.log(year);
// console.log(typeof year);


// Concatenation
// const firstName = 'Mohammed';
// const lastName = "Sami";
// console.log(firstName + " " + lastName)


// let x = 10 + 5;
// x *= 2;
// console.log(x)

////////////////////////////////////////////////////////////////////

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

let markMass = 95;
let johnMass = 85;

let markHight = 1.88;
let johnHight = 1.76;

let markBMI = markMass / markHight ** 2;
let johnBMI = johnMass / (johnHight * johnHight);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);