// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*When encoding, it translates the letters i and j to 42.

When decoding, it translates 42 to (i/j).

It ignores capital letters. (For example, the results of A Message and a message should be the same.)

It maintains spaces in the message, before and after encoding or decoding.*/

const polybiusModule = (function () {
  // creating opposite keys for encoding and decoding values, with decoded values equaling a string
  const encoderKey = {
    a:11, b:21, c:31, d:41, e:51,
    f:12, g:22, h:32, i:42, j:42, k:52,
    l:13, m:23, n:33, o:43, p:53,
    q:14, r:24, s:34, t:44, u:54,
    v:15, w:25, x:35, y:45, z:55
  }
  const decoderKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z" 
  }


  function polybius(input, encode = true) {

    input = input.toLowerCase(); //sets input to not be case sensitive
    let shift; //creating an undefined variable to be declared for specific cases
    let key = encoderKey;
    if (encode) {
      shift = input.split(""); //creates an array in the undefined variable that seperates each letter of an input to be encoded
    } else {
      key = decoderKey;
      shift = input.split(" "); //creates an array in the undefined variable that seperates each number of an input to be decoded (needs to be 2 numbers per value, case created below)
      const oddValue = shift.reduce((accumulator, message) => accumulator + message.length, 0) % 2 //finds cases where input values are odd to return false value
    if (oddValue) {
      return false 
    }
    shift = shift.map(result => { //maps the results of the created array of split values
      return result.split("").reduce((result, letter, index, valuePair) => { //creates an array seperated by each valuePair and reduces it back down to a string of values
        if (letter === " ") { 
          result.push(" "); //case preserving spaces (could also be updated to include other special characters)
        } else if (!(index % 2)) { 
          result.push(letter + valuePair[index + 1]) //creates a way for the number being decoded to shift every 2 values
        }
        return result; //returns the array that has been "decoded"
      }, [])
    }).reduce((a, b) => a.concat(" ", b)) //reduces the resulting array and concatenates the values, into a word
  }
  return shift.map(number => key[number] || " ").join("") //returns encoded values while preserving spaces(no other special characters could be updated by adding more characters after ||)
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
