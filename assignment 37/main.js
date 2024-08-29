"use strict";
function make_shirt(size = "Large", printMessage = "I love Typescript") {
    console.log(`creating a ${size} shirt with ${printMessage} on the shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love javascript");
