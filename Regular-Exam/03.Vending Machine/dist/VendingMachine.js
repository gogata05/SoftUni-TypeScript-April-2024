"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
            return true;
        }
        return false;
    }
    removeDrink(name) {
        const index = this.drinks.findIndex(d => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        if (this.drinks.length === 0) {
            return '';
        }
        const longestDrink = this.drinks.reduce((prev, current) => (prev.volume > current.volume) ? prev : current);
        return longestDrink.toString();
    }
    getCheapest() {
        if (this.drinks.length === 0) {
            return '';
        }
        const cheapestDrink = this.drinks.reduce((prev, current) => (prev.price < current.price) ? prev : current);
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(d => d.name === name);
        return drink ? drink.toString() : '';
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        return `Drinks available:\n${this.drinks.map(drink => drink.toString()).join('\n')}`;
    }
}
exports.VendingMachine = VendingMachine;
