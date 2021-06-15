//const sum = require('./sum');
const Car = require('./car');
const golf = new Car({
    color: 'red',
    model: 'Golf',
    year: new Date(2021),
    price: 500000,
    kmPerLt: 16.9,
    tank: 50,
    company: 'VW'
});

test('car current sale price is the same', () => {
    expect(golf.currentSalePrice()).toBe(500000);
});

test('car company to equal VW', () => {
    expect(golf.company).toBe('VW');
});

test('car model to equal golf', () => {
    expect(golf.model).toBe('Golf');
});

test('car color to equal red', () => {
    expect(golf.color).toBe('red');
});

test('car current gas to equal zero', () => {
    expect(golf.currentGas()).toBe(0);
});

test('adding gas to car', () => {
    golf.addGas(30);
    expect(golf.currentGas()).toBeLessThanOrEqual(golf.tank);
});

test('car km per lt to equal', () => {
    golf.move(10)
    expect(golf.currentGas()).toBeLessThan(30);
});

test('car km per lt to equal', () => {
    expect(golf.kmPerLt).toBe(16.9);
});

test('move car 5,000 kms', () => {
    const kmBefore = golf.kms;
    golf.move(5000);
    expect(golf.currentGas()).toBeLessThanOrEqual(golf.tank);
    expect(golf.currentGas()).toBe(0);
    expect(golf.kms).toBeGreaterThan(kmBefore);
});

test('move car 5 kms', () => {
    const kmBefore = golf.kms;
    golf.move(5);
    expect(golf.kms).toBe(kmBefore);
});

test('car current sale price is lower', () => {
    expect(golf.currentSalePrice()).toBeLessThan(golf.price);
});