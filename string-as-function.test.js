const stringAsFunction = require('./string-as-function');

test('testing string function', () => {
    expect(stringAsFunction('Hello')).toMatch('Hello');
});