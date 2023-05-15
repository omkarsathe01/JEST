const sum = require('./string-as-var');

test('Testing string as a variable', () => {
    expect(sum).toMatch("Hello");
});