"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let n = 10;
let sum = 0;
function sumOfEven(n) {
    for (let i = 1; i <= n; i++) {
        sum = sum + (i * 2);
    }
    return sum;
}
console.log(`If n= ${n} sun of first ${n} even numbers is =` + sumOfEven(n));
console.log("new program start");
console.log("");
//-- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array2 = [2, 3, 4, 6, 5, 9, 10];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        console.log(array2[i]);
    }
}
console.log("new program start");
console.log("");
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array11 = [8, 2, 3, 4, 6, 5, 9, 10];
console.log("Array = ", array11);
for (let i = 0; i < array11.length; i++) {
    if (array11[i] % 2 === 0) {
        array11.splice(i, 1);
        i--;
    }
}
console.log("Array without even numbers= ", array11);
console.log("new program start");
console.log("");
// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
const pi = 3.14159;
let radius = 5;
function areaOfCircle(n) {
    let area = pi * (n * n);
    return area.toFixed(2);
}
console.log(`Area of circle with radius ${radius} is`, areaOfCircle(radius));
console.log("new program start");
console.log("");
// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let grades = [20, 30, 50, 60, 70, 40];
console.log("Grades are ", grades);
for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
        i--;
    }
}
console.log("Updated grades are ", grades);
console.log("new program start");
console.log("");
//- Write a program that uses a function to find the largest element in an array of numbers.
let array12 = [100, 12, 13, 12, 102];
function largestE(arr) {
    let largestEle = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestEle) {
            largestEle = arr[i];
        }
    }
    return largestEle;
}
console.log(largestE(array12));
