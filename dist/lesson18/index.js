"use strict";
// classes 101
// access modifiers
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
// const pizza = new Pizza("mario special", 150);
// pizza.addTopping("mushrooms");
// pizza.addTopping("pepperoni");
// pizza.selectBase("garlic");
// pizza.toppings not accessible because it is private
// console.log(pizza);
