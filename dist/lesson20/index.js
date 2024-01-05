"use strict";
// classes 101
// INHERITANCE IN CLASSES
// type Base = "classic" | "thick" | "thin" | "garlic";
// class MenuItem {
//   constructor(private title: string, private price: number) {}
//   get details(): string {
//     return `${this.title} - ₺${this.price}`;
//   }
// }
// class Pizza extends MenuItem {
//   constructor(title: string, price: number) {
//     super(title, price);
//   }
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
// const pizza: Pizza = new Pizza("enes special", 150);
// function printMenuItem(item: MenuItem): void {
//   console.log(item.details);
// }
// printMenuItem(pizza);
