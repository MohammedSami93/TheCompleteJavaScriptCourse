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

function cutFruitPices(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPices(apples);
    const orangePieces = cutFruitPices(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2,3));
