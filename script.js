 'use strict';

// function logger() {
//     console.log('My name is Mohammed');
// }

// // calling, running, invoking function
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//////////////////////////////////////////////////////////////////////////////

// // Function decleration
// function calcMyAge1(thisYear){
//     return thisYear - 1993;
// }
// const age1 = calcMyAge1(2021);

// // Function expression
// const calcMyAge2 = function (thisYear){
//     return thisYear - 1993
// }
// const age2 = calcMyAge2(2021);
// console.log(age1, age2);

// // Arrow Function
// const calcMyAge3 = thisYear => thisYear - 1993;
// const age3 = calcMyAge3(2021);

// console.log(age3);

// // Example #1
// const yearsUntilRetirement = birthYear => {
//     const age = 2021 - birthYear
//     const retirement = 60 - age
//     return retirement;
// }
// console.log(yearsUntilRetirement(1993));

// // Example #2
// const yearsUntilRetirements = (birthYear, firstName) => {
//     const age = 2021 - birthYear
//     const retirement = 60 - age
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirements(1993, 'Mohammed'));
// console.log(yearsUntilRetirements(1988, 'Amer'));


/////////////////////////////////////////////////////////////////////////

// function calling other function

// function cutFruitPices(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPices(apples);
//     const orangePieces = cutFruitPices(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));


///////////////////////////////////////////////////////////////////////////

/* Coding Challenge #1 */

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

GOOD LUCK 😀
*/

// My solution //
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(dolphinScore1, dolphinScore2, dolphinScore3, KoalaScore1, KoalaScore2, KoalaScore3){
    const avgDolhins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
    const avgKoalas = calcAverage(KoalaScore1, KoalaScore2, KoalaScore3);
    if (avgDolhins >= avgKoalas*2){
        console.log(`Dolhins win ${avgDolhins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= avgDolhins*2) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolhins}`);
    } else {
        console.log(`NO WINNER!`);
    }
}

checkWinner(60, 60, 60, 50, 50, 50);
*/


// // Instructure Solytion //

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// //console.log(calcAverage(3,4,5));

// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// //console.log(scoreDolphin, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas){
//     if (avgDolphins >= avgKoalas*2){
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins*2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log(`NO WINNER...`);
//     }
// }
// checkWinner(scoreDolphin, scoreKoalas);


///////////////////////////////////////////////////////////////////////////

/* ARRAYS */


// const friends = ['Amer', 'Mujtaba', 'Ali'];
// console.log(friends);

// // another way of decleration the array
// const year = new Array(1991, 1993, 1941, 5642);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); /* to define how many elements it has */
// console.log(friends[friends.length - 1]);

// // change the element value
// friends[2] = 'Hassan';
// console.log(friends);

// // add elements to the array
// friends.push('new');
// console.log(friends);
// console.log(friends.length);

// // the flixability of array
// const firstName = 'Mohammed'
// const personalInformation = [firstName, 'Sami', 2021 - 1993, 'IT Support', friends];

// console.log(personalInformation);
// console.log(personalInformation.length);


// // Exercise //
// const calcAge = function(birthYear){
//     return 2021 - birthYear;
// }

// // want to calculate the ages
// const years = [1991, 1993, 2015, 2000];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);
// console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]))


/////////////////////////////////////////////////////////////////////////////////////////


/* Arrays methods */


const friends = ['Amer', 'Mujtaba', 'Ali'];

// to add element to the first of the array
friends.unshift('Abdullah');
console.log(friends);

// By the defult push function and unshift return the arrays length
console.log(friends.push('Muneer'));

// remove elements
friends.pop(); // remove lase element
friends.pop();
console.log(friends);

// pop function return the removed element ...
console.log(friends.pop());

// shift() is to remove the first element
friends.shift();
console.log(friends);

// indexOf() is to return the position of element in the array
console.log(friends.indexOf('Amer'));
console.log(friends.indexOf('bgfdhngng')); // we'll get -1 if the element is NOT in the array

// to check if the element in the array or not, that mean the result will be True or False
console.log(friends.includes('Amer'));
console.log(friends.includes('bgfdhngng'));

// example
if (friends.includes('Amer')){
    console.log('you have friends called Amer');
}