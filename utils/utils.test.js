var utils = require('./utils');

// Test case for adding two numbers 'a' and 'b'.
it('Should add two numbers', () =>{
    var res = utils.add(33, 11);
    
    if (res != 44)
    {
        throw new Error('Expected 44, but got ' + res);
    }
});

// Test case for squaring a number 'x'.
it('Should square a number', () => {
    var res = utils.square(5);

    if(res != 25)
    {
        throw new Error('Expected 25, but got ' + res);
    }
});