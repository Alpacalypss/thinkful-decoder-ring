// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar")

describe("errors, and faulty inputs", () => {
    it("Should return false if the shift value is equal to 0", () => {
        const input = "Hello World"
        const shift = 0
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })
    it("Should return false if the shift value is greater than 25", () => {
        const input = "Hello World"
        const shift = 26
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })
    it("Should return false if the shift value is less than -25", () => {
        const input = "Hello World"
        const shift = 26
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })
    it("Should return false if the shift value does not exist or is undefined", () => {
        const input = "Hello World"
        const actual = caesar(input)
        expect(actual).to.be.false
    })
})
describe("Encoding the inputs", () => {
    it("Should ignore capital letters when shifting an input", () => {
        const input = "ABCDE"
        const shift = 1
        const actual = caesar(input, shift)
        const expected = "bcdef"
        expect(actual).to.equal(expected)
    })
    it("Should reach z and continue shift back through to a", () => {
        const input = "zebra"
        const shift = 3
        const actual = caesar(input, shift)
        const expected = "cheud"
        expect(actual).to.equal(expected)
    })
    it("Should loop the alphabet back to z from a negative shift value at a", () => {
        const input = "another"
        const shift = -3
        const actual = caesar(input, shift)
        const expected = "xklqebo"
        expect(actual).to.equal(expected)
    })
    it("Should maintain spaces and special characters the way they are", () => {
        const input = "Hello! Welcome."
        const shift = 1
        const actual = caesar(input, shift)
        const expected = "ifmmp! xfmdpnf."
        expect(actual).to.equal(expected)
    })
})
describe("Decoding the inputs", () => {
    it("Should decode an input by reversing the value of shift wrapping from z to a for a negative value", () => {
        const input = "xklqebo"
        const shift = -3
        const actual = caesar(input, shift, false)
        const expected = "another"
        expect(actual).to.equal(expected)
    })
    it("Should maintain spaces and special characters the way they are", () => {
        const input = "ifmmp! xfmdpnf."
        const shift = 1
        const actual = caesar(input, shift, false)
        const expected = "hello! welcome."
        expect(actual).to.equal(expected)
    })
    it("Should decode input by reversing the value of shift to reach z and continue shift back through to a", () => {
        const input = "cheud"
        const shift = 3
        const actual = caesar(input, shift, false)
        const expected = "zebra"
        expect(actual).to.equal(expected)
    })
    it("Should ignore capital letters when shifting an input", () => {
        const input = "BCDEF"
        const shift = 1
        const actual = caesar(input, shift, false)
        const expected = "abcde"
        expect(actual).to.equal(expected)
    })
})