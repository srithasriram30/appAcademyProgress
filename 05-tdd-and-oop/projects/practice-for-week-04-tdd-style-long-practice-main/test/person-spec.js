const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);
const  Person  = require("../problems/person");// Your code here

describe("Person class", ()=>{

    let person;
    let person2;
    let consoleSpy;

    beforeEach(() => {

        person = new Person("Alice", 23);
        person2 = new Person("Bob", 29);

        consoleSpy = chai.spy.on(console, 'log');
    });

    afterEach(() =>{
        chai.spy.restore(console);
    });

    describe("Person constructor", ()=>{
        it("should set the name property", ()=>{
            expect(person).to.have.property("name");
            expect(person.name).to.eql("Alice");
        });

        it("should set the age property", ()=>{
            expect(person).to.have.property("age");
            expect(person.age).to.eql(23);
        });
    });

    describe("sayHello instance method", ()=>{
        it("should call sayHello method", () =>{
            person.sayHello();
            let expected = `Hi, I'm Alice`;
            expect(consoleSpy).to.have.been.called.once.with(expected);
        });
    });

    describe("visit instance method", ()=>{
        it("should return the correct string when visit() is invoked", ()=>{
            expect(person.visit(person2)).to.eql("Alice visited Bob");
        });
    });

    describe("switchVisit instance method", ()=>{
        it("should return the correct string when switchVisit() is invoked", ()=>{
            expect(person.switchVisit(person2)).to.eql("Bob visited Alice");
        });
    });

    describe("update instance method", () => {
        it("should throw a TypeError if the object doesn't have name and age", () => {
          expect(() => person.update('Charlie')).to.throw(TypeError);
          expect(() => person.update({ name: 'Charlie' })).to.throw(TypeError);
          expect(() => person.update({ age: 12 })).to.throw(TypeError);
        });
        it("should update the Person if an appropriate object is passed", () => {
          person.update({ name: "Charlie", age: 23 });
          expect(person.name).to.eql("Charlie");
          expect(person.age).to.eql(23);
        });
      });
      describe("tryUpdate instance method", () => {
        it("should return false if invalid input is passed", () => {
          expect(person.tryUpdate({ name: "Charlie" })).to.be.false;
          expect(person.tryUpdate({ age: 23 })).to.be.false;
          expect(person.tryUpdate(null)).to.be.false;
        });
        it("should update the Person if an appropriate object is passed", () => {
          expect(person.tryUpdate({ name: "Charlie", age: 23 })).to.be.true;
        });
      });
      describe("greetAll static method", () => {
        it("should invoke sayHello for each person passed", () => {
          let first = `Hi, I'm Alice`;
          let second = `Hi, I'm Bob`;
          const personSpy = chai.spy.on(person, 'sayHello');
          const person2Spy = chai.spy.on(person2, 'sayHello');
          const result = Person.greetAll([person, person2]);
          expect(personSpy).to.have.been.called.once;
          expect(person2Spy).to.have.been.called.once;
        });
        it("should return an array of responses", () => {
          let expected = [`Hi, I'm Alice`, `Hi, I'm Bob`];
          const result = Person.greetAll([person, person2]);
          expect(result).to.eql(expected);
        });
      });

});