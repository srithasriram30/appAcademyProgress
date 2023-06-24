const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");


describe("returnsThree", ()=>{

    it("should return a three", ()=> {
        let num = returnsThree();
        expect(num).to.equal(3);
    });

});

describe("reciprocal", ()=> {
    context("argument is valid", () => {
        it("should return 1/2 when the number is 2 ", ()=> {
            let val = reciprocal(2);
            expect(val).to.equal(0.5);
        });

        it("should return 1/7 when the number is 7", () => {
            let val = reciprocal(7);
            expect(val).to.equal(1/7);
        });
    });

    context("argument is invaild", ()=> {
        it("should throw an error when number is less than 1", ()=>{
            const num = -3;
            expect(() => reciprocal(num)).to.throw(Error);
        });

        it("should throw an error when number is greater than 1000000", ()=>{
            const num = 1000001;
            expect(() => reciprocal(num)).to.throw(Error);
        });
    });

});
