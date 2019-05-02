const {expect} = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it("Doesn't break the line in the middle of a word", () => {
        expect(wrap('Lorem ipsum dolor sit eu amet', 14)).to.equal(
            'Lorem ipsum' + '\n' +
            'ipsum dolor' + '\n' +
            'sit eu amet'
        );
    });
    xit('', () => {
        expect().to.equal(' ');
    });
    xit('', () => {
        expect().to.equal(' ');
    });
    xit('', () => {
        expect().to.equal(' ');
    });
    xit('', () => {
        expect().to.equal(' ');
    });
    describe('edge cases', () => {
        it ('Returns empty string if empty string was provided', () => {
            expect(wrap('', 10)).to.equal('');
        });
        it('Returns original string if maxLen <= 0', () => {
            expect(wrap('abcdefghijkl', 0)).to.equal('abcdefghijkl');
            expect(wrap('abcdefghijkl', -1)).to.equal('abcdefghijkl');
        });
    });
});