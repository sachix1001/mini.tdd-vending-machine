// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

class VendingMachine {
  constructor() {
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.balance = 0;
    this.selectedRow;
    this.selectedColumn;
    const juice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const tea = { name: `Grean tee`, price: 150, count: 2 };
    const banana = { name: "Banana", price: 250, count: 4 };
    this.inventory = [
      [juice, coffee, tea, banana],
      [juice, coffee, tea, banana],
      [juice, coffee, tea, banana],
      [juice, coffee, tea, banana],
    ];
  }
  insertCoin(num) {
    this.balance += num;
    return this.till[num]++;
  }
  selectButton(btn) {
    if (typeof btn === "string") {
      if (this.selectedRow === undefined) {
        const rowNum = {
          A: 1,
          B: 2,
          C: 3,
          D: 4,
        };
        this.selectedRow = rowNum[btn];
        console.log("row: ", this.selectedRow);
      }
    } else if (typeof btn === "number") {
      if (this.selectedColumn === undefined) {
        this.selectedColumn = btn;
      }
      const item = this.inventory[this.selectedRow - 1][
        this.selectedColumn - 1
      ];
      if (this.balance > item.price) {
        item.count--;
        console.log("item", item);
        console.log(`row: ${this.selectedRow}
          column: ${this.selectedColumn}
          Here is your ${item.name}`);
      }
    }
  }

  changeReturn() {
    this.balance = 0;
    console.log("till: ", this.till);
  }
}

module.exports = { VendingMachine };
