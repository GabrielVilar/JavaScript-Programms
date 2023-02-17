/*
Implement a function using JS that takes a string and returns an array 
containing the distance from each letter in the original string to the 
nearest vowel in the alphabet.
Example: 
If the word "uva" is passed, the expected return is [0,1,0] 
because "u" and "a" are vowels so the distance is 0. The closest vowel 
to "v" is the letter "u" which is 1 letter away.
Example: If the word "faz" is passed, the expected return is [1,0,5]. 
The vowel closest to "f" is the letter "e" which is 1 letter away. 
The letter "a" is already a vowel, so the distance is 0. The closest 
vowel to the letter "z" is the letter "u" which is 5 letters away from 
"z".
*/
const prompt = require('prompt-sync')();
var word = prompt("What's the word? ");

function distanceToNearestVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = [];
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        result.push(0);
      } else {
        let distanceToPrevVowel = 0;
        let distanceToNextVowel = 0;
        for (let j = i - 1; j >= 0; j--) {
          distanceToPrevVowel++;
          if (vowels.includes(str[j])) {
            break;
          }
        }
        for (let j = i + 1; j < str.length; j++) {
          distanceToNextVowel++;
          if (vowels.includes(str[j])) {
            break;
          }
        }
        result.push(Math.min(distanceToPrevVowel, distanceToNextVowel));
      }
    }
    return result;
  }
  console.log(distanceToNearestVowel(word));