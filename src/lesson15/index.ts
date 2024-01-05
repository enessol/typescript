// extending interface
interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const customer = {
  id: 1,
  format(): string {
    return `This customer has an id of ${this.id}`;
  },
};

const bill = {
  id: 2,
  amount: 50,
  server: "hanife",
  format(): string {
    return `Bill with id ${this.id} has ${this.amount} to pay`;
  },
};

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}
function printBillFormatted(bill: Bill): void {
  console.log(`server:`, bill.server);
  console.log(bill.format());
}

printFormatted(customer);
printFormatted(bill);
// printBillFormatted(user) returnts error cause user lacks other types
printBillFormatted(bill);
