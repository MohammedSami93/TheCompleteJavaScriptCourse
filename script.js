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


// const friends = ['Amer', 'Mujtaba', 'Ali'];

// // to add element to the first of the array
// friends.unshift('Abdullah');
// console.log(friends);

// // By the defult push function and unshift return the arrays length
// console.log(friends.push('Muneer'));

// // remove elements
// friends.pop(); // remove lase element
// friends.pop();
// console.log(friends);

// // pop function return the removed element ...
// console.log(friends.pop());

// // shift() is to remove the first element
// friends.shift();
// console.log(friends);

// // indexOf() is to return the position of element in the array
// console.log(friends.indexOf('Amer'));
// console.log(friends.indexOf('bgfdhngng')); // we'll get -1 if the element is NOT in the array

// // to check if the element in the array or not, that mean the result will be True or False
// console.log(friends.includes('Amer'));
// console.log(friends.includes('bgfdhngng'));

// // example
// if (friends.includes('Amer')){
//     console.log('you have friends called Amer');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////

/* Coding Challenge #2 */

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

GOOD LUCK 😀
*/

// const calcTip = function(bill) {
//     if(bill >= 50 && bill <= 300){
//         const tip = bill * 0.15;
//         //console.log(tip);
//         return tip;
//     } else {
//         const tip = bill * 0.2;
//         //console.log(tip);
//         return tip;
//     }
// }
// // calcTip(100)

// // // another function
// // calcTip = function(bill) {
// //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // }

// const bills = [125, 555, 44];
// console.log(`bill1: ${bills[0]}
// bill2: ${bills[1]}
// bill3: ${bills[2]}`);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(`tip1: ${tips[0]}
// tip2: ${tips[1]}
// tip3: ${tips[2]}`);

// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(`total1: ${total[0]}
// total2: ${total[1]}
// total3: ${total[2]}`);

////////////////////////////////////////////////////////////////////////////////

/* Objects */

// // the Array
// const mohammedArray = [
//     'Mohammed',
//     'Sami',
//     2021 - 1993,
//     'IT Support',
//     ['Amer', 'Mujtaba', 'Ali']
// ];

// // the Object
// const mohammed = {
//     firstName: 'Mohammed',
//     lastName: 'Sami',
//     age: 2021 - 1993,
//     job: 'IT Support',
//     friends: ['Amer', 'Mujtaba', 'Ali']
// }

// console.log(mohammed.lastName);
// console.log(mohammed['lastName']);


// const nameKey = 'Name';
// console.log(mohammed['first' + nameKey])
// console.log(mohammed['last' + nameKey])

// const interestedIn = prompt('What do you want to know about Mohammed? Choose one of the following: firstName, lastName, age, job, and friends');


// // this way it will NOT work
// // console.log(mohammed.interestedIn); 

// console.log(mohammed[interestedIn]);


// // try somthing different - object inside another object
// const mohammedSami = {
//     firstName: 'Mohammed',
//     lastName: 'Sami',
//     age: 2021 - 1993,
//     job: 'IT Support',
//     friends: {workFriend: 'Amer', 
//               bestFriend: 'Mujtaba', 
//               friend: 'Ali'
//             }
// }

// console.log(mohammedSami.friends.workFriend);


// // adding new proparty and its value
// mohammed.location = 'Khobar';
// mohammed['car'] = 'Camrey';

// console.log(mohammed);


// // Challenge
// // "Mohammed has 3 friends, and his best friend is called Mujtaba"
// console.log(`${mohammed.firstName} has ${mohammed.friends.length} friends, and his best friend is called ${mohammed['friends'][0]}`);
// // also we can do it like this
// console.log(`${mohammed.firstName} has ${mohammed.friends.length} friends, and his best friend is called ${mohammed.friends[0]}`);

///////////////////////////////////////////////////////////////////////////////////////////////////


// // we can add any type of value in object, even if it's function
// const mohammed = {
//     firstName: 'Mohammed',
//     lastName: 'Sami',
//     birthYear: 1993,
//     job: 'IT Support',
//     friends: ['Amer', 'Mujtaba', 'Ali'],
//     hasDriverLicense: true,
//     calcAge: function (birthYear){
//         return 2021 - birthYear;
//     }
// }

// console.log(mohammed.calcAge(1993));
// console.log(mohammed['calcAge'](1993));
// console.log(mohammed['calcAge'](mohammed.birthYear));



// // exercise 2: 
// const mohammed = {
//     firstName: 'Mohammed',
//     lastName: 'Sami',
//     birthYear: 1993,
//     job: 'IT Support',
//     friends: ['Amer', 'Mujtaba', 'Ali'],
//     hasDriverLicense: true,
//     // way #1
//     // calcAge: function (){
//     //     return 2021 - this.birthYear; // this is to call the value of the parameter that in the same object
//     // }

//     // way #2
//     calcAge: function (){
//         this.age = 2021 - this.birthYear;
//         return  this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${(this.hasDriverLicense) ? 'a' : 'NO'} driver's license`
//     }
// }

// console.log(mohammed.calcAge());
// console.log(mohammed['calcAge']());
// console.log(mohammed.age);


// // Challenge
// // "Mohammed is a 46-year old IT Support, and he has a driver's license"

// // this's through the console
// console.log(`${mohammed.firstName} is a ${mohammed.age}-year old ${mohammed.job}, and he has ${mohammed.hasDriverLicense ? 'a' : 'NO'} driver's license`);

// // here through new function getSummary() and using this
// console.log(mohammed.getSummary())

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

GOOD LUCK 😀
*/

const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.mass / (this.height ** 2);
    }
}

const john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.mass / (this.height ** 2);
    }
}

if (mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
} else {
    console.log(`No Winner...`);
}