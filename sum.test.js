// const { test } = require('node:test')
const sum = require('./sum')

test('test case', () => {
    expect(sum()).toBe(3);
});