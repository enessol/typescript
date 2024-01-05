// function signatures on type aliases
type Calculator = (numOne: number, numTwo: number) => number;

function addTwoNumbers(a: number, b: number) {
  return a + b;
}
function multiplyTwoNumbers(first: number, second: number) {
  return first * second;
}
function squareNumber(num: number) {
  return num * num;
}
function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`;
}

let calcs: Calculator[] = [];

calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
// calcs.push(squareNumber); this one works because it is not obligated to include all or some of the
// function signature. Rather it just needs to return the same type. But it can not exceed the amount of arguments tho.
// calcs.push(joinTwoNumbers); is not assignable cuz it returns string

// function signatures on interfaces
interface HasArea {
  name: string;
  calcArea: (a: number) => number;
}

const shapeOne: HasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};

console.log(shapeOne.calcArea(6));

const shapeTwo: HasArea = {
  name: "circle",
  calcArea(r: number) {
    return Math.PI * (r ^ 2);
  },
};

console.log(shapeTwo.calcArea(5));
