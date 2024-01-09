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


      it("call the passed callback once for each element in the passed-in array argument", function () {
        const sqrtSpy = chai.spy.on(Math, 'sqrt', () => { });
        myMap([100, 25, 81, 64], Math.sqrt);
        expect(sqrtSpy).to.have.been.called.exactly(4);
      });


});// Your code here