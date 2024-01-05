"use strict";
// extending type aliases
const personOne = {
    id: 1,
    firstName: "Enes",
};
const personTwo = {
    id: 2,
    firstName: "Mustafa",
    email: "mustafa@mustafa.com",
};
const personThree = {
    email: "mete@mete.com",
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne); wont work cuz lacks email
printUser(personTwo);
// printUser(personThree);  wont work cuz lacks id and name
