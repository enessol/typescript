// classes 101
// CLASSES AS TYPES
// when its private, values are accessible inside the class but not outside the scope

// type Base = "classic" | "thick" | "thin" | "garlic";

// class Pizza {
//   constructor(private title: string, private price: number) {
// constructorda argüman olarak alıp private yapabilirim böylece aşağıda setterlarını koyup
// tekrar private almama gerek kalmaz
// yukarıda private yazıp kapalı yapabilirim, ancak açık yapmak için public yazmak zorundayım
// this.title = title;
// this.price = price;
//   }

//   private title: string;
//   private price: number;
//   private base: Base = "classic";
//   private toppings: string[] = [];

//   addTopping(topping: string): void {
//     this.toppings.push(topping);
//   }

//   removeTopping(topping: string): void {
//     this.toppings = this.toppings.filter((t) => t !== topping);
//   }

//   selectBase(b: Base): void {
//     this.base = b;
//   }
// }

// const pizzaOne: Pizza = new Pizza("enes special", 150);
// we can also add classname as type here but we do not need to do that as we're already creating an instance of pizza class
// const pizzaTwo = new Pizza("Turkish special", 280);

// function addMushroomToPizza(pizzas: Pizza[]): void {
//   for (const p of pizzas) {
//     p.addTopping("mushrooms");
//   }
// }
// addMushroomToPizza([pizzaOne, pizzaTwo]);
// console.log(pizzaOne, pizzaTwo);
