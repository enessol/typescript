"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(["id", "amount", "to", "notes"]);
paymentWriter.addRows([
    { id: 1, amount: 50, to: "Enes", notes: "you better pay me" },
    { id: 2, amount: 150, to: "Mete", notes: "what the dog doing?" },
    { id: 3, amount: 1540, to: "Hola", notes: "clear the area" },
]);
paymentWriter.save("./data/payments23.csv");
