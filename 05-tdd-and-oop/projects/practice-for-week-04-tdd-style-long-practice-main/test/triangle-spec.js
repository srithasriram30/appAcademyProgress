const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);
const  {Triangle, Scalene, Isosceles } = require("../problems/triangle");// Your code here

describe("Triangle class", ()=>{

    let triangle1;
    let triangle2;
    let consoleSpy;

    beforeEach(()=> {
        triangle1 = new Triangle(3,4,5);
        triangle2 = new Triangle(1,2,1);

        consoleSpy = chai.spy.on(console, 'log');
    });

    afterEach(() =>{
        chai.spy.restore(console);
    });

    describe("Triangle constructor", ()=>{

        it("should set side1 property", ()=>{

            expect(triangle1).to.have.property("side1");
            expect(triangle1.side1).to.eql(3);

        });

        it("should set side2 property", ()=>{

            expect(triangle1).to.have.property("side2");
            expect(triangle1.side2).to.eql(4);

        });

        it("should set side3 property", ()=>{

            expect(triangle1).to.have.property("side3");
            expect(triangle1.side3).to.eql(5);

        });

    });

    describe("getPerimeter instance method", () =>{
        it("should return the correct perimeter",()=>{
            triangle1.getPerimeter();
            let perimeter = 12;
            expect(consoleSpy).to.have.been.called.once.with(perimeter);
        });



    });

    describe("hasValidSideLengths intance method", () =>{
        it("should return true if triangle is valid", ()=>{
            triangle1.hasValidSideLengths();
            let isVaild1 = true;
            expect(consoleSpy).to.have.been.called.once.with(isVaild1);
        });

        it("should return false if triangle is not valid", ()=>{
            triangle2.hasValidSideLengths();
            let isVaild2 = false;
            expect(consoleSpy).to.have.been.called.once.with(isVaild2);
        });
    });

    describe("validate instance method", () =>{
        it("should call the hasValidLengths function", ()=>{

            const fnSpy = chai.spy.on(triangle1, 'hasValidSideLengths');
            triangle1.validate();
            expect(fnSpy).to.have.been.called.once;

        });

        it("should add a isValid property to the triangle instance", () => {
            triangle1.validate();
            expect(triangle1).to.have.property("isValid");
        });

    });

    describe("getValidTriangles static method", ()=>{
        let triangle3 = new Triangle(3,3,3);
        it("should invoke hasValidSideLengths for each triangle passed", () =>{
            
            const triSpy1 = chai.spy.on(triangle1, 'hasValidSideLengths');
            const triSpy2 = chai.spy.on(triangle2, 'hasValidSideLengths');
            const triSpy3 = chai.spy.on(triangle3, 'hasValidSideLengths');
            const result = Triangle.getValidTriangles([triangle1, triangle2, triangle3]);
            expect(triSpy1).to.have.been.called.once;
            expect(triSpy2).to.have.been.called.once;
            expect(triSpy3).to.have.been.called.once;
        });

        it("should return an array of responses", () => {

            let expected = [true, false, true];
            
            const result = Triangle.getValidTriangles([triangle1, triangle2, triangle3]);
            expect(result).to.eql(expected);

        });
    })

});


describe("Scalene Class", () =>{

    let triangle1;
    let triangle2;
    let triangle3;
    let consoleSpy;

    beforeEach(()=> {
        triangle1 = new Scalene(3,4,5);
        triangle2 = new Scalene(1,2,1);
        triangle3 = new Scalene(4,4,7);

        consoleSpy = chai.spy.on(console, 'log');
    });

    afterEach(() =>{
        chai.spy.restore(console);
    });

    describe("Scalene class", ()=>{
        it("should be a child class of Triangle", ()=>{
            expect(Scalene.prototype instanceof Triangle).to.be.true;
        });
    
        describe("Scalene constructor", () =>{
            it("should have 3 side length properties and isVaildTriangle property", ()=>{
                expect(triangle1).to.have.property("side1");
                expect(triangle1.side1).to.eql(3);

                expect(triangle1).to.have.property("side2");
                expect(triangle1.side2).to.eql(4);

                expect(triangle1).to.have.property("side3");
                expect(triangle1.side3).to.eql(5);

                expect(triangle1).to.have.property("isValidTriangle");
                expect(triangle1.isVaildTriangle).to.eql(true);
            });
        });

        describe("isScalene instance method", () =>{
            it("should return true if a triangle is scalene", () =>{
                triangle1.isScalene();
                let expected = true;
                expect(consoleSpy).to.have.been.called.once.with(expected);

            });

            it("should return false if triangle is not scalene",() =>{
                triangle3.isScalene();
                let expected = false;
                expect(consoleSpy).to.have.been.called.once.with(expected);
            });
        });

        describe("validate property for scalene", () =>{
            it("should call the isScalene function", ()=>{

                const fnSpy = chai.spy.on(triangle1, 'isScalene');
                triangle1.validate();
                expect(fnSpy).to.have.been.called.once;
    
            });
    
            it("should add a isValidScalene property to the triangle instance", () => {
                triangle1.validate();
                expect(triangle1).to.have.property("isValidScalene");
            });
        });
    });

});


describe("Isosceles Class", () =>{

    let triangle1;
    let triangle2;
    let triangle3;
    let consoleSpy;

    beforeEach(()=> {
        triangle1 = new Isosceles(3,4,5);
        triangle2 = new Isosceles(1,2,1);
        triangle3 = new Isosceles(4,4,7);

        consoleSpy = chai.spy.on(console, 'log');
    });

    afterEach(() =>{
        chai.spy.restore(console);
    });

    describe("Isosceles Class", ()=>{
        it("should be a child class of Triangle", ()=>{
            expect(Isosceles.prototype instanceof Triangle).to.be.true;
        });
    
        describe("Isosceles constructor", () =>{
            it("should have 3 side length properties and isVaildTriangle property", ()=>{
                expect(triangle3).to.have.property("side1");
                expect(triangle3.side1).to.eql(4);

                expect(triangle3).to.have.property("side2");
                expect(triangle3.side2).to.eql(4);

                expect(triangle3).to.have.property("side3");
                expect(triangle3.side3).to.eql(7);

                expect(triangle1).to.have.property("isValidTriangle");
                expect(triangle1.isVaildTriangle).to.eql(true);
            });
        });

        describe("isIsosceles instance method", () =>{
            it("should return true if a triangle is isosceles", () =>{
                triangle3.isIsosceles();
                let expected = true;
                expect(consoleSpy).to.have.been.called.once.with(expected);

            });

            it("should return false if triangle is not isosceles",() =>{
                triangle1.isIsosceles();
                let expected = false;
                expect(consoleSpy).to.have.been.called.once.with(expected);
            });
        });

        describe("validate property for isosceles", () =>{
            it("should call the isIsosceles function", ()=>{

                const fnSpy = chai.spy.on(triangle3, 'isIsosceles');
                triangle3.validate();
                expect(fnSpy).to.have.been.called.once;
    
            });
    
            it("should add a isValidIsosceles property to the triangle instance", () => {
                triangle3.validate();
                expect(triangle3).to.have.property("isValidIsosceles");
            });
        });
    });

    
});