// Type assertion
// .. as something

import { PizzaProps, Pizza } from "./models/Pizza";

const titleInput = document.querySelector(
  'input[name="title"]'
) as HTMLInputElement;

// here it already know that this is an HTMLTextAreaElement
// therefore just using exclamation in the end is sufficient
// use as especially when using class selectors, if it is not an element name
// ts will not determine its type
const description = document.querySelector("textarea")!;

const form = document.querySelector(".create") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const newPizza: PizzaProps = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    toppings: data.getAll("toppings") as string[],
    price: parseInt(data.get("price") as string),
  };

  const res = await Pizza.save(newPizza);

  if (!res.ok) {
    console.log("could not save pizza");
  }
  if (res.ok) {
    window.location.href = "/";
  }
});
