"use strict";
// GENERICS
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
// function logAndReturnValue(val: any): any {
//   console.log(val);
//   return val;
// }
// const results = logAndReturnValue("hello");
// when we use any ts cant determine the type of results
// T stands for T. However feel free to name it whatever  hell you want
// the type of argument must match the generic name
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
// now it knows the type
const resultsOne = logAndReturnValue("enes");
const resultsTwo = logAndReturnValue(1);
// example 2
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: "Enes", score: 100 },
    { name: "Ahmet", score: 98 },
    { name: "Mete", score: 29 },
    { name: "Mustafa", score: 67 },
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser);
