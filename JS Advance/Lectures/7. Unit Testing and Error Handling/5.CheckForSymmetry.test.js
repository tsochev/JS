const { expect } = require('chai');
const { isSymmetric } = require('./5. Chech for Symmetry')

describe('Symmetry Checker', () => {
    it('works with symmetrical numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false with non-symmetrical numeric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false with non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('works with symmetic string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('works with symmetic odd-lenght array', () => {
        expect(isSymmetric([1, 2 ,1])).to.be.true;
    });

    it('return false with string param', () => {
        expect(isSymmetric('hello')).to.be.false;
    });

    it('return false for type mismatched elements', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
})