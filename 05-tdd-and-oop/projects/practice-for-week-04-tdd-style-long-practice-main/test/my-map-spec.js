const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);
const { myMap } = require("../problems/my-map");// Your code here

describe("myMap", ()=>{
    let array, cb;
    beforeEach(() => {
        array = [100, 25, 81, 64];
        cb = Math.sqrt
    });

    it("should not mutate the original array", ()=>{

        myMap(array,cb)

        expect(array).to.eql([100, 25, 81, 64]);

    });

    it("should not call the built-in Array#map", () => {
        const mapSpy = chai.spy.on(Array.prototype, "map");
        myMap(array, cb);
        expect(mapSpy).to.have.not.been.called();
      });


    it("callback should be invoked once for each element", () => {
        let arrLen = array.length;
        const cbFn = chai.spy(cb);

        expect(cbFn).to.have.been.called.exactly(arrLen);

    });


});
