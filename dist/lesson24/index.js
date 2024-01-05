"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CSV Writer Project Part II
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    save(fileName) {
        (0, fs_1.appendFileSync)(fileName, this.csv);
        this.csv = "\n";
        console.log("file saved to", fileName);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
}
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([
    { id: 1, amount: 50, to: "Enes", notes: "you better pay me" },
    { id: 2, amount: 150, to: "Mete", notes: "what the dog doing?" },
]);
// writer.save("./data/payments.csv");
