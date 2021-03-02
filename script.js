// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// // finding the maximun and the minimum value of the array
// let temps = [10, 15, 1, "error", 5, 50, 30];

// const calcTemp = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }

//   console.log(`maximum value: ${max}`);
//   console.log(`minimum value: ${min}`);
// };

// calcTemp(temps);

/////////////////////////////////////////////////////////////////

/* Coding Challenge #1 */
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. 

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

GOOD LUCK 😀
*/

const printForecast = function (arr) {
  let concat = "";
  let day = "";
  for (let i = 0; i < arr.length; i++) {
    day = `... ${arr[i]}C in ${i + 1} days`;
    concat += day + " ";
  }
  console.log(`${concat} ...`);
};

printForecast([12, 5, -5, 0, 4]);
