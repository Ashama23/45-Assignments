"use strict";
let userNames = ["Osama", "Ali", "Ashan", "Ashama", "Sahar"];
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userNames}, thank you for logging in again `);
    }
});
