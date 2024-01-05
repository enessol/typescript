// functions
// parantezden sonraki iki nokta ile return'ün tipini kontrol ediyorum. number harici örneğin true return edersem hata verir
function sum(a: number, b: number): number {
  return a + b;
}

const substract = (a: number, b: number): number => {
  return a - b;
};

sum(2, 6);
// sum(2, "6")  returns error

substract(10, 7);
// substract(10, true); returns error

// bir değer return etmiyorsak void yazabiliriz
function totalSum(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

totalSum([5, 7, 9, 91, 21, 5]);

// return type inference
function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}

// I did not specify return type above but typescript knows that constant result is a string, it infers, a lot of the time we dont need to specify return types
//  I can say return 10 if I don't specify return type, so sometimes its beneficial to specify type
const result = formatGreeting("Enes", "selamlar selamlar");
