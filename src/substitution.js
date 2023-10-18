// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*The input could include spaces and letters as well as special characters such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
All the characters in the alphabet parameter must be unique. Otherwise, it should return false.*/

const substitutionModule = (function () {
  const aToZ = "abcdefghijklmnopqrstuvwxyz".split("");
  const result = [];

  function substitution(input, alphabet, encode = true) {
    const subAlphabet = new Set(alphabet) //new set() eliminates repeat characters (a set value can only occur once)
    if (!alphabet || alphabet.length !== 26 || [...subAlphabet].length !== 26) return false
    
    alphabet.split(""); //splitting the cipher alphabet into an itteratable array
    if(encode) {
      for (let i = 0; i < aToZ.length; i++) {
        result[aToZ[i]] = alphabet[i] //looping the created arrays and setting char position of a-z equal to the position of the cipher alphabet for encode 
        } 
      } else {
        for (let i = 0; i < aToZ.length; i++) {
          result[alphabet[i]] = aToZ[i] //looping the created arrays and setting char position of cipher alphabet equal to a-z for decode
        }
      }
      let solution = input.toLowerCase().split("").map((char) => { //takes the input, converts it to lower case, splits it into an array, and maps that array per character
        if (char === " ") return " "; //preserves spaces
        return result[char] //returns the mapped array for each character to be used later
      })
      return solution.join("") //returns the mapped array as a single joined string
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
