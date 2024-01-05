"use strict";
// any type
// its  type can change in the future
let myAge;
myAge = 27;
myAge = false;
myAge = null;
// any kullanmak kodu typescriptten çıkarmak gibidir. çok sık kullanırsak typescriptin özelliklerinden faydalanmıyor oluruz
// if not predefined, it is also any type
let title;
title = 25;
title = {
    hello: "world",
};
// any type in arrays
let somethings = ["hello", true, 30, null];
// functions and any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
const resultTwo = addTogether(3);
console.log(resultOne, resultTwo);
// useful when migrating from js to ts. because using any wont cause any errors. Until you solve your types tho.
