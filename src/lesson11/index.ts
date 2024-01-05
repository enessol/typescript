// Union types
// değerin birkaç türde olabileceği durumlarda kullanılır

let someId: number | string;

someId = 1;
someId = "5";

let email: string | null = null;

email = "enes@enes.com";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "flksaflsa";
anotherId = 4214;

// Union type pitfall

function swapIdType(id: Id): Id {
  // can only use props and methods common to both
  // number and string types
  // string method parseInt(id) is not allowed here
  // as typescript does not which type in belongs to
  // parseInt(id) returnts error
  return id;
}
swapIdType("5");
