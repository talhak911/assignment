"use strict";
//Write a program that uses filter to remove all negative numbers from an array of numbers
let array = [1, -2, 3, -4, 5, 6, -7, 8];
let updatedArray = array.filter((Number) => {
    if (Number > 0) {
        return true;
    }
});
console.log(updatedArray);
console.log("new program start");
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let array1 = [1, 2, 3, 4, 5];
let updatedArray1 = array.map((Num) => {
    {
        return 2 * Num;
    }
});
console.log("Array = ", array1);
console.log("UpupdatedArray = ", updatedArray1);
console.log("new program start");
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let array3 = ["apple", "banana", "cherry", "date", "grape"];
let updatedArray3 = array3.filter((num) => {
    if (num.length > 5)
        return true;
});
console.log("Array = ", array3);
console.log("UpupdatedArray containing more than 5 characters = ", updatedArray3);
console.log("new program start");
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = array4.filter((Num) => {
    if (Num % 2 === 0) {
        return 1;
    }
});
let squareArray = evenArray.map((Num) => Num * Num);
console.log("Array = ", array4);
console.log("Square of even Numbers  = ", squareArray);
console.log("new program start");
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let array5 = [0, 10, 20, 30, 40];
let ctoFaArray = array5.map((Num) => {
    return (Num * (9 / 5) + 32);
});
console.log("Array = ", array5);
console.log(" Celsius to fahrenheit = ", ctoFaArray);
console.log("new program start");
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let array6 = [3, 6, 9, 12, 15, 18];
let oddArray = array6.filter((Num) => {
    if (Num % 2 != 0)
        return true;
});
let doubleOdd = oddArray.map((Num) => { return Num * 2; });
console.log("Array = ", array6);
console.log("Odd Array = ", oddArray);
console.log("Double of odd = ", doubleOdd);
console.log("new program start");
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let array7 = ["Alice", "Bob", "Charlie", "David", "Emily"];
array7.forEach((str) => {
    console.log(`${str}!`);
});
