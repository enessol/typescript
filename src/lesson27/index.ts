// Generic Interfaces

interface Collection<T> {
  data: T[];
  name: string;
}

const collectionOne: Collection<string> = {
  data: ["MUSTAFA", "KEMAL", "ATATÜRK"],
  name: "world leaders",
};

const collectionTwo: Collection<number> = {
  data: [1923, 2023, 1071],
  name: "important years",
};

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);

  return c.data[i];
}

const myResultOne = randomCollectionItem<string>(collectionOne);
const myResultTwo = randomCollectionItem(collectionTwo);
// don't event need to add generics here, ts already infers the type from collectionOne and collectionTwo objects
console.log(myResultOne, myResultTwo);
