// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution")

describe("errors, and faulty inputs", () => {
    it("Should return false if cipher alphabet is not given", () => {
        const input = "hello world"
        const actual = substitution(input)
        expect(actual).to.be.false
    })
    it("Should return false if cipher alphabet is not 26 characters", () => {
        const input = "hello world"
        const alphabet = "abcdefgheijklmnopqrstuvwxyz12345"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    it("Should return false if cipher alphabet contains repeating letters", () => {
        const input = "hello world"
        const alphabet = "ababababababababababababab"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
})

describe("encoded messages", () => {
    it("Should encode a message given a substitution alphabet", () => {
        const input = "hello"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const actual = substitution(input, alphabet)
        const expected = "svool"
        expect(actual).to.equal(expected)
    })
    it("Should encode a message with any characters", () => {
        const input = "hello"
        const alphabet = "zyxw!utsrqponmlkjihgfedcba"
        const actual = substitution(input, alphabet)
        const expected = "s!ool"
        expect(actual).to.equal(expected)
    })
    it("Should preserve spaces", () => {
        const input = "h e l l o"
        const alphabet = "zyxwvutsrqponmlkjhigfedcba"
        const actual = substitution(input, alphabet)
        const expected = "s v o o l"
        expect(actual).to.equal(expected)
    })
})

describe("decoded messages", () => {
    it("Should decode a message given a substitution alphabet while ignoring case sensitivity", () => {
        const input = "Svool"
        const alphabet = "zyxwvutsrqponmlkjhigfedcba"
        const actual = substitution(input, alphabet, false)
        const expected = "hello"
        expect(actual).to.equal(expected)
    })
    it("Should work with any characters", () => {
        const input = "s!ool"
        const alphabet = "zyxw!utsrqponmlkjhigfedcba"
        const actual = substitution(input, alphabet, false)
        const expected = "hello"
        expect(actual).to.equal(expected)
    })
    it("Should preserve spaces", () => {
        const input = "s v o o l"
        const alphabet = "zyxwvutsrqponmlkjhigfedcba"
        const actual = substitution(input, alphabet, false)
        const expected = "h e l l o"
        expect(actual).to.equal(expected)
    })
})