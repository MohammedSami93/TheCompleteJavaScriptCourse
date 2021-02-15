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

// let markMass = 95;
// let johnMass = 85;

// let markHight = 1.88;
// let johnHight = 1.76;

// let markBMI = markMass / markHight ** 2;
// let johnBMI = johnMass / (johnHight * johnHight);

// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

//////////////////////////////////////////////////////////////////////////


// // the ways of writing a string
// const firstName = "Mohammed";
// const job = "IT";
// const birthYear = 1993;
// const year = 2021;

// // way # 1
// const mohammed = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(mohammed);

// // way # 2
// const newMohammed = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(newMohammed);


// // the multiple lines...

// // way # 1
// console.log('String with \n\
// multiple \n\
// lines');

// // way # 2
// console.log(`String with
// multiple
// lines`);

/////////////////////////////////////////////////////

// Coding Challenge #2
/* 
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let markMass = 95;
// let johnMass = 50;

// let markHight = 1.88;
// let johnHight = 1.76;

// let markBMI = markMass / markHight ** 2;
// let johnBMI = johnMass / (johnHight * johnHight);

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

/////////////////////////////////////////////////////

// let money = 10;
// if(money){  /* here it's mean.. IF money is True */
//     console.log(`you have ${money} SR.`)
// } else {
//     console.log(`you have NOTHING`)
// }

////////////////////////////////////////////////////

// === vs. ==
//const age = 18;
const age = '18';
if(age === 18)
console.log('You just became an adult 😄 (Strict)');

if(age == 18)
console.log('You just became an adult 😄 (Loose)');


const favNumber = Number(prompt('what is your favorite number?')); // without Number function prompt is a String
console.log(favNumber);
console.log(typeof favNumber);

if(favNumber === 10){
    console.log('10 is a cool number!');
} else if(favNumber === 15){
    console.log('15 is a cool number!');
} else {
    console.log('number is not 10 or 15!');
}

// !== -> strict equaion, != -> loose
if(favNumber !== 15){
    console.log("why NOT 15?");
}