const chai = require('chai');
const assert =  chai.assert;

const calc = require ('../calc.js');

// describe('Testing assert function: ', function() {
//     describe('Checking plus function', function(){
//         it('Result must be equal to num1 num2 sum', function() {
//             result = calc.plus(1, 4)
//             assert.equal(result, 3)
//         })
//     })
// })


describe('Testing assert function: ', function() {
    describe('Checking plus function', function(){
        it('Result must be equal to num1 num2 sum', function() {
            result = calc.plus(1, 4)
            assert.equal(result, 3)
        })
    })
})