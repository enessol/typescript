"use strict";
// Reusable interfaces
const element = { quantity: 50 };
function printQuantity(item) {
    console.log(`the quantity of the item is ${item.quantity}`);
}
const fruit = {
    name: "mango",
    quantity: 50,
};
const vehicle = {
    type: "car",
    quantity: 3,
};
const aPerson = {
    name: "enes",
    age: 27,
};
printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(aPerson);
// fruit and vehicle can be send event if they have much more arguments as they satisfy the requirement of HasQuantity wherease aPerson cant
// however you can not send more than required with direct objects because ts react as if we are trying to create some new elements using HasQuantity interface
// printQuantity({ quantity: 50, title: "some title" }); returns error
