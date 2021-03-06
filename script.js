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
// const age = '18';
// if(age === 18)
// console.log('You just became an adult 😄 (Strict)');

// if(age == 18)
// console.log('You just became an adult 😄 (Loose)');


// const favNumber = Number(prompt('what is your favorite number?')); // without Number function prompt is a String
// console.log(favNumber);
// console.log(typeof favNumber);

// if(favNumber === 10){
//     console.log('10 is a cool number!');
// } else if(favNumber === 15){
//     console.log('15 is a cool number!');
// } else {
//     console.log('number is not 10 or 15!');
// }

// // !== -> strict equaion, != -> loose
// if(favNumber !== 15){
//     console.log("why NOT 15?");
// }

////////////////////////////////////////

// Coding Challenge #3
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// let dolphinScore1 = Number(prompt('Score #1 for Dolphin team:'));
// let dolphinScore2 = Number(prompt('Score #2 for Dolphin team:'));
// let dolphinScore3 = Number(prompt('Score #3 for Dolphin team:'));
// let dolphinAvrage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

// let koalaScore1 = Number(prompt('Score #1 for Koala team:'));
// let koalaScore2 = Number(prompt('Score #2 for Koala team:'));
// let koalaScore3 = Number(prompt('Score #3 for Koala team:'));
// let koalaAvrage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// console.log(`Dolphin Team Score is ${dolphinAvrage}
// Koala Team Score is ${koalaAvrage}`)


// if(dolphinAvrage > koalaAvrage){
//     console.log('Dolphin Team is the WINNER. 🎉');
// } else if(koalaAvrage > dolphinAvrage){
//     console.log('Koala Team is the WINNER. 🎉');
// } else if (dolphinAvrage === koalaAvrage && dolphinAvrage >= 100 && koalaAvrage >= 100) {
//     console.log('Both teams are Winners, they have the same score. 🎉');
// } else {
//     console.log("No Winners")
// }


/////////////////////////////////////////////////////

// Switch

// const day = 'sunday';

// switch (day) {
//     case 'sunday':
//         console.log('we are on sunday');
//         console.log('we still on sunday');
//         break;
//     case 'monday':
//         console.log('we are on monday');
//         break;
//     case 'tuesday':
//     case 'wednesday':
//         console.log('we are on Tuesday and wednesday');
//         break;
//     case 'thursday':
//         console.log('prepare for weekend');
//         break;
//     case 'friday':
//     case 'saturday':
//         console.log('have a nice weekend');
//         break;
//     default:
//         console.log('invalid value!');
//         break;
// }


// if (day === 'sunday'){
//     console.log('we are on sunday');
//     console.log('we still on sunday');
// } else if(day === 'monday'){
//     console.log('we are on monday');
// } else if(day === 'tuesday' || day === 'wednesday'){
//     console.log('we are on Tuesday and wednesday');
// } else if(day === 'thursday'){
//     console.log('prepare for weekend');
// } else if(day === 'friday' || day === 'saturday'){
//     console.log('have a nice weekend');
// } else {
//     console.log('invalid value!');
// }

//////////////////////////////////////////////////////////

// The Conditional (Ternary) Operator

// const age = 28;
// // age >= 18 ? console.log("I am adult") : console.log("I am still young");

// const drive = age >= 15 ? 'have lisen 🚗' : "don't have lisen 🛑";
// console.log(drive);

// console.log(`I have a car and I ${age >= 15 ? 'have lisen 🚗' : "don't have lisen 🛑"}`);


/////////////////////////////////////////////////////////


// Coding Challenge #4

/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 1000;
const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);






