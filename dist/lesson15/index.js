"use strict";
const customer = {
    id: 1,
    format() {
        return `This customer has an id of ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: "hanife",
    format() {
        return `Bill with id ${this.id} has ${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBillFormatted(bill) {
    console.log(`server:`, bill.server);
    console.log(bill.format());
}
printFormatted(customer);
printFormatted(bill);
// printBillFormatted(user) returnts error cause user lacks other types
printBillFormatted(bill);
