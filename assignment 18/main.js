"use strict";
let placesToVisit = ["Pakistan", "Canada", "Sweden", "Bangladesh", "Russia"];
//print in original order
console.log("Original order:", placesToVisit);
//print array in alphabetical order
console.log("Alphabetical order:", placesToVisit.slice().sort());
//array still in its original order
console.log("Original order after sorting:", placesToVisit);
// Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());
//array still in its original order
console.log("Original order after reverse sorting:", placesToVisit);
//Reverse the order of the list
placesToVisit.reverse();
console.log("Reverse order:", placesToVisit);
//Reverse the order of the list again
placesToVisit.reverse();
console.log("Back to the original order:", placesToVisit);
//Sort your array so it’s stored in alphabetical order
console.log("Sorted in alphabetical order:", placesToVisit.slice().sort());
//Sort to change your array so it’s stored in reverse alphabetical order
console.log("Sorted in reverse alphabetical order:", placesToVisit.slice().sort().reverse());
