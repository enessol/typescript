"use strict";
// Generic Interfaces
const collectionOne = {
    data: ["MUSTAFA", "KEMAL", "ATATÜRK"],
    name: "world leaders",
};
const collectionTwo = {
    data: [1923, 2023, 1071],
    name: "important years",
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const myResultOne = randomCollectionItem(collectionOne);
const myResultTwo = randomCollectionItem(collectionTwo);
// don't event need to add generics here, ts already infers the type from collectionOne and collectionTwo objects
console.log(myResultOne, myResultTwo);
