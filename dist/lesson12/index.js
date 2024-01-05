"use strict";
// type guards
// after type guarding we are able to use specific methods
function changeIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = changeIdType(12);
const idTwo = changeIdType("12");
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    else if (value.type === "person") {
        console.log(value.firstName, value.age);
    }
}
