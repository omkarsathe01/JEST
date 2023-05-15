const testObject = require('./object');

test('object test case', () => {
    expect(testObject()).toEqual({name: 'Omkar'});
});