const sum = require('./sum3');

test('test case passed', () => {
    expect(sum(10, 20)).toBe(30);   //passed
    expect(sum(10, 20)).not.toBe(30);   //failed
    expect(sum(10, 20)).not.toBe(300);  //passed
});