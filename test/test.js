const { VendingMachine } = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
  it("should store selected row", () => {
    const machine = new VendingMachine();

    machine.selectButton("A");

    expect(machine.selectedRow).to.equal(1);
  });

  it("should store selected column", () => {
    const machine = new VendingMachine();

    machine.selectButton("A");
    machine.selectButton(2);

    expect(machine.selectedColumn).to.equal(2);
  });

  it("should only store a row if no column is selected", () => {
    const machine = new VendingMachine();

    machine.selectButton("A");
    machine.selectButton(3);
    machine.selectButton(1);

    expect(machine.selectedColumn).to.equal(3);
  });

  it("should reset balance and logs coins", () => {
    const machine = new VendingMachine();

    machine.changeReturn();
    expect(machine.balance).to.equal(0);
  });

  it("should decrease the selected item's count by 1", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);
    machine.selectButton("A");
    machine.selectButton(1);
    const item = machine.inventory[0][0].count;
    expect(item).to.equal(4);
  });
});
