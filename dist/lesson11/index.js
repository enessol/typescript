"use strict";
// Union types
// değerin birkaç türde olabileceği durumlarda kullanılır
let someId;
someId = 1;
someId = "5";
let email = null;
email = "enes@enes.com";
email = null;
let anotherId;
anotherId = "flksaflsa";
anotherId = 4214;
// Union type pitfall
function swapIdType(id) {
    // can only use props and methods common to both
    // number and string types
    // string method parseInt(id) is not allowed here
    // as typescript does not which type in belongs to
    // parseInt(id) returnts error
    return id;
}
swapIdType("5");
