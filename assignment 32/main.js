"use strict";
let current_user = ["Osama", "Ali", "Ashama", "Ahsan", "Bilal"];
let new_user = ["Bilal", "Ali", "Owais", "Adnan", "Sahar"];
new_user.forEach(new_one_user => {
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
