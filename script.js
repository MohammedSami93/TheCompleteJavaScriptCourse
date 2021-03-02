// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// finding the maximun and the minimum value of the array
let temps = [10, 15, 1, "error", 5, 50, 30];

const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log(`maximum value: ${max}`);
  console.log(`minimum value: ${min}`);
};

calcTemp(temps);
