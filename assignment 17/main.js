"use strict";
let guestList = ["Sara", "Owais", "Saniya", "Ali", "Sahar", "Ashama"];
console.log("Unfortunately! there's a bad news that the table didn't arrive on time so we invite only two guest");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you.`);
    }
}
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for the dinner.`);
});
guestList.splice(0, guestList.length);
console.log("Updated list of guest", guestList);
