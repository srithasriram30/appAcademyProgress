// Your code here
const chai = require("chai");
const expect = chai.expect;
const { reverseString } = require("../problems/reverse-string");

describe("reverseString", () =>{
    it("should reverse a string", () => {
        let reversed = reverseString("fun");

        expect(reversed).to.equal("nuf");
    });
});
