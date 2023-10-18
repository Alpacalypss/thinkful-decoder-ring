// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.

It ignores capital letters. (For example, the results of A Message and a message should be the same.)

When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.*/
const caesarModule = (function () {
  //creating a string of letters able to be indexed by value
  const letters = "abcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
    //first give conditions of a false return to end process if conditions arent met early
    //loop the string of letters for place value and adjust by shift > -25 to shift < 25 using indexOf()
    //use .toLowerCase to remove case sensitivity
    //set condition if index > 25 or < 0 to wrap to the other side of the index by shifting the full length of the string
    //if value is not of an indexed letter store it and leave it as is
    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    let result = "";
    if (encode === false) {
      shift *= -1
    }
    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toLowerCase()
      if (letters.includes(letter)) {
        const letterIndex = letters.indexOf(letter);
        let shifted = letterIndex + shift;
        if (shifted > 25) {
          shifted += -26
        }
        if (shifted < 0 && shifted > -25) {
          shifted += 26
        }
        const newLetter = letters[shifted];
        result += newLetter
      } else {
        result += letter
      }
    }
    return result
  }
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
