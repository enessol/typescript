// GENERICS
function logAndReturnString(val: string): string {
  console.log(val);
  return val;
}
function logAndReturnNumber(val: number): number {
  console.log(val);
  return val;
}
function logAndReturnBoolean(val: boolean): boolean {
  console.log(val);
  return val;
}

// function logAndReturnValue(val: any): any {
//   console.log(val);
//   return val;
// }

// const results = logAndReturnValue("hello");
// when we use any ts cant determine the type of results

// T stands for T. However feel free to name it whatever  hell you want
// the type of argument must match the generic name
function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val;
}

// now it knows the type
const resultsOne = logAndReturnValue<string>("enes");
const resultsTwo = logAndReturnValue<number>(1);

// example 2
function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);

  return values[i];
}

interface Users {
  name: string;
  score: number;
}

const users: Users[] = [
  { name: "Enes", score: 100 },
  { name: "Ahmet", score: 98 },
  { name: "Mete", score: 29 },
  { name: "Mustafa", score: 67 },
];

const randomUser = getRandomArrayValue<Users>(users);
console.log(randomUser);
