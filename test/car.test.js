//const sum = require('./sum');
const Car = require('./../app/car')
const golf = new Car("vw", "red", 16.9, 50)

test('car model to equal vw', () => {
    expect(golf.model).toBe('vw');
});

test('car color to equal red', () => {
    expect(golf.color).toBe('red');
});

test('car current gas to equal zero', () => {
    expect(golf.currentGas()).toBe(0);
});

test('adding gas to car', () => {
    golf.addGas(30);
    expect(golf.currentGas()).toBe(30);
});

test('car km per lt to equal', () => {
    golf.move(10)
    expect(golf.currentGas()).toBeLessThan(30);
});