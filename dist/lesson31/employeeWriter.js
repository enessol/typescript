"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter([
    "id",
    "name",
    "role",
    "salary",
]);
employeeWriter.addRows([
    { id: 1, name: "Enes", role: "CEO", salary: 1140000 },
    { id: 2, name: "Mete", role: "CFO", salary: 140000 },
    { id: 3, name: "Hola", role: "CTO", salary: 130000 },
]);
employeeWriter.save("data/employees.csv");
