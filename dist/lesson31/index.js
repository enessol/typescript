"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
// CSV Writer Project Part II
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(";") + "\n";
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
    formatRow(value) {
        return this.columns.map((col) => value[col]).join(";");
    }
}
exports.CSVWriter = CSVWriter;
