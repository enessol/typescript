// type guards

type Identification = number | string;

// after type guarding we are able to use specific methods
function changeIdType(id: Identification) {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const idOne = changeIdType(12);
const idTwo = changeIdType("12");

console.log(idOne, idTwo);

// tagget interfaces
interface MyUser {
  type: "user";
  username: string;
  email: string;
  id: Identification;
}
interface ThePerson {
  type: "person";
  firstName: string;
  age: number;
  id: Identification;
}

function logDetails(value: MyUser | ThePerson): void {
  if (value.type === "user") {
    console.log(value.email, value.username);
  } else if (value.type === "person") {
    console.log(value.firstName, value.age);
  }
}
