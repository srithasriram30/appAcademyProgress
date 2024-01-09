const chai = require("chai");
const expect = chai.expect;
const { reverseString } = require("../problems/reverse-string");

describe("reverseString", () =>{
    it("should reverse a string", () => {
        let reversed = reverseString("fun");

        expect(reversed).to.equal("nuf");
    });

    it("should throw an error if input is not string", () =>{
        const num = 86;
        const object = {1:"A", 2:"B"};
        const bool = false;
        const array = [1,2,3];

        expect(() => reverseString(num)).to.throw(TypeError);
        expect(() => reverseString(object)).to.throw(TypeError);
        expect(() => reverseString(array)).to.throw(TypeError);
        expect(() => reverseString(bool)).to.throw(TypeError);
    });
});