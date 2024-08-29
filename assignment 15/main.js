"use strict";
let guestList = ["Owais", "Ali", "Ahsan"];
let unabletoAttend = guestList.splice(0, 1)[0];
console.log(`${unabletoAttend} not invited for dinner.`);
guestList.push("Ashama");
guestList.forEach(list => {
    console.log(`Dear ${list}, you are invited to the dinner party.`);
});
