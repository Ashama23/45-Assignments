"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Atif Aslam", "Zafar Ali", "Osama"];
let copy_magicians_names = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
console.log("Original Arrary");
show_magicians(magicians_names);
console.log("Copied Array");
show_magicians(copy_great_magicians);
