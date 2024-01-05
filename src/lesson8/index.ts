// Tuples are very much like arrays but in specific order, see below

let persona: [string, number, boolean] = ["enes", 27, false];

// tuples examples
let hsla: [number, string, string, number];
hsla = [200, "100%", "57%", 1];

let xy: [number, number];
xy = [95, 35];

function useCoords(): [number, number] {
  // get coords

  const lat = 100;
  const long = 25;

  return [lat, long];
}

const [lat, long] = useCoords();
console.log([lat, long]);

// named tuples

let member: [name: string, age: number];
// member = ["apple", true] returns error
member = ["apple", 18];
console.log(member[0]);
