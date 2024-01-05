"use strict";
// Arrays
// let names: string[] = ["Ahmet", "Enes", "Söl", 6];
// returns error
let names = ["Ahmet", "Enes", "Söl"];
let ages = [3, 5, 7];
// let ages: number[] = [3, 5, 7, true];
// returns error
// ages.push("yedi") returns error;
// names.push(7) returns error
// type inference with arrays
let fruits = ["elma", "armut"];
// fruits.push(9); returns error
// const f = fruits[0]; infers
let things = [1, true, "hello"];
const t = things[0];
// when hover over t says it can be one of three
// object literals
let user = {
    firstName: "Enes",
    age: 27,
    id: 1,
};
// user.firstName = 25; returns error
user.firstName = "mete";
user.id = 2;
// user.email = "enes.com"; returnts error because it is not defined in type
// type inference with object literals
let person = {
    name: "enes",
    score: 145,
};
// person.name = true; returns error
person.name = "Emre";
person.score = 56;
// person.id = 3; returnts error cuz not defined
const score = person.score;
// score is a number, inferred the type
