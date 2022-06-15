// --- Variables
// Calculate area of a rectangle

let rec_length = 23;
let rec_width = 12;
console.log("The area of the rectangle is: " + rec_length * rec_width);

//++++++++++++++++//

// The Temperature Converter
let t_celsius = 29;
let t_fahrenheit = 90;

let conv_to_c = ((t_fahrenheit - 32) * 5) / 9;
let conv_to_f = (t_celsius * 9) / 5 + 32;

// Math.floor() to round up and remove decimals
console.log(
  t_celsius + "C" + " to Fahrenheit is: " + Math.floor(conv_to_f) + "F"
);
console.log(
  t_fahrenheit + "F" + " to Celsius is: " + Math.floor(conv_to_c) + "C"
);

// ------------------------------------------------ //

// --- For loop

//Numbers' summations

let numbersSum = [23, 54, 32, 87, 47];
let n_sum = 0;

for (let i = 0; i < numbersSum.length; i++) {
  n_sum += numbersSum[i];
}
console.log("Sum of all numbers in this array is: " + n_sum);

//++++++++++++++++//

// Maximum number
let numbersMax = [16, 4, 2, 0, 19, 6];
for (let i = 0; i < numbersMax.length; i++) {
  var arrMax = Math.max(...numbersMax);
}
console.log("Max numbers in this array is: " + arrMax);

//++++++++++++++++//

// Reverse Array

let numbersReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersReverse1 = [];
for (let i = numbersReverse.length - 1; i >= 0; i--) {
  numbersReverse1.push(numbersReverse[i]);
}
console.log("Revers numbers in this array are: " + numbersReverse1);

// ------------------------------------------------ //

// --- Nested for loop
//stars pattern

let counts = 5;
let stars = "";
for (i = 0; i < counts; i++) {
  stars += "*";
  console.log(stars);
}
