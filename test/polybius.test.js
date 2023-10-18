// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius")

describe("Encoded messages", () => {
    it("Should encode a message into number pairs", () => {
        const input = "hello"
        const actual = polybius(input)
        const expected = "3251131343"
        expect(actual).to.equal(expected)
    })
    it("should translate bot 'i' and 'j' to 42", () => {
        const input = "jingle"
        const actual = polybius(input)
        const expected = "424233221351"
        expect(actual).to.equal(expected)
    })
    it("Should preserve spaces", () => {
        const input = "h e l l o"
        const actual = polybius(input)
        const expected = "32 51 13 13 43"
        expect(actual).to.equal(expected)
    })
})

describe("Decoded messages", () => {
    it("Should decode an input into number pairs by character", () => {
        const input = "3251131343"
        const actual = polybius(input, false)
        const expected = "hello"
        expect(actual).to.equal(expected)
    })
    it("Should translate 42 into both 'i' and 'j'", () => {
        const input = "424233221351"
        const actual = polybius(input, false)
        const expected = "(i/j)(i/j)ngle"
        expect(actual).to.equal(expected)
    })
    it("Should preserve spaces", () => {
        const input = "32 51 13 13 43"
        const actual = polybius(input, false)
        const expected = "h e l l o"
        expect(actual).to.equal(expected)
    })
    it("Should return false if there is an odd amount of numbers", () => {
        const input = "323"
        const actual = polybius(input, false)
        expect(actual).to.be.false
    })
})