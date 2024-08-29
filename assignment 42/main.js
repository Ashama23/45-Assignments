"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Atif Aslam", "Zafar Ali", "Osama"];
let great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
console.log(great_magicians);
