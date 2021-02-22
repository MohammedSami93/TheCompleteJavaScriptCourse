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

// Function decleration
function calcMyAge1(thisYear){
    return thisYear - 1993;
}
const age1 = calcMyAge1(2021);

// Function expression
const calcMyAge2 = function (thisYear){
    return thisYear - 1993
}
const age2 = calcMyAge2(2021);

console.log(age1, age2);