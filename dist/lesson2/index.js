"use strict";
// let age = 30;
// thanks to type inference ts knows it is already a number, however you can also explicitly declare
let age = 30;
let firstName = "Enes";
let isAvailable;
// age = "hello";
// returns error
age = 25;
firstName = "Mete";
isAvailable = true;
// isAvailable = "false"
// returns error
// Type inference another example
let planet = "Earth";
let moons = 1;
let isLarge = false;
planet = "Saturn";
moons = 152;
isLarge = true;
// undefined is unintetional null is more often than not intentional
//  null & undefined
let something;
let another;
// something = 10;
// returns error
// another = "hello";
//  returns error
