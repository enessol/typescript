// classes 101
// ABSTRACT CLASSES
// abstract class can be extented, implemented but you can't create new instances with them

type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - ₺${this.price}`;
  }

  abstract format(): string;
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }

  format(): string {
    let formatted = this.details + "\n";
    // base
    formatted += `Pizza on a ${this.base} base `;

    // toppings
    if (this.toppings.length < 1) {
      formatted += " with no toppings";
    } else if (this.toppings.length > 0) {
      formatted += `with ${this.toppings.join(", ")}`;
    }
    return formatted;
  }
}

const pizza: Pizza = new Pizza("enes special", 150);

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}
pizza.addTopping("mushrooms");
pizza.addTopping("peppers");
printFormatted(pizza);
