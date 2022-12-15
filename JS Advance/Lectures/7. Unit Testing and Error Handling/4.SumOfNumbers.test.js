const { expect } = require('chai')
const { sum } = require('./4. Sum of Numbers')

describe('Sum Array', () => {

    it('works correct when sum array', () => {
        expect(sum([1, 2, 5])).to.equal(8);
    });

    it('return false if an element isn\'t a number', () => {
        expect(sum([1, 2, 'a'])).to.be.NaN;
    });

    it('return false when is a string', () => {
        expect(sum('aall')).to.be.NaN;
    });
    

   
});