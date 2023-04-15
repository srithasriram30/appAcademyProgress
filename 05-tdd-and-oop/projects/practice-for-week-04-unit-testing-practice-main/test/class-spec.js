const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

let word;

describe("Word", function () {
  beforeEach(() => {
    word = new Word("helloWorld");
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("helloWorld");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let noVowels = word.removeVowels();

      expect(noVowels).to.equal("hllWrld");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let noCons = word.removeConsonants();

      expect(noCons).to.equal("eoo");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let pigLatin = word.pigLatin();

      expect(pigLatin).to.equal("elloWorldhay");
    });
  });
});
