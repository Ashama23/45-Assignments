"use strict";
//creating variable
let apple = "apple";
// Test for equality
console.log("apple is equal to apple");
console.log(apple == "apple");
//Test for inequality
console.log("apple is not equal to apple");
console.log(apple != "apple");
//Tests using the lower case function
let uppercaseApple = "APPLE";
//Equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
//Not equal to
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");
let ten = 10;
let fifteen = 15;
//Equal to
console.log("ten is equal to fifteen");
console.log(ten == fifteen);
//Not equal to
console.log("ten is not to fifteen");
console.log(ten != fifteen);
//Greater than
console.log("fifteen is greater than ten");
console.log(fifteen > ten);
//Less than
console.log("fifteen is less than ten");
console.log(fifteen < ten);
//Greater than or equal to
console.log("fifteen is greater than or equal to ten");
console.log(fifteen >= ten);
//less than or equal to
console.log("fifteen is less than or equal to");
console.log(fifteen <= ten);
//using && (and)
console.log("fifteen is not equal to ten and fifteen is greater than ten");
console.log(fifteen != ten && fifteen > ten);
console.log("fifteen is not equal to ten and ten greater than fifteen");
console.log(fifteen != ten && ten > fifteen);
//using || (or)
console.log("fifteen is greater than ten or fifteen is not equal to fifteen");
console.log(fifteen > ten || fifteen != fifteen);
console.log("fifteen is less than ten or ten is not equal to ten");
console.log(fifteen < ten || ten != ten);
//Test whether an item is in a array
let vegetables = ["tomatoes", "ladyfinger", "lemons"];
console.log("tomatoes is included in my vegetable array");
console.log(vegetables.includes("tomatoes"));
//Test whether an item is not in a array
console.log("tomatoes is not included in my vegetable array");
console.log(vegetables.includes("tomatoes"));
