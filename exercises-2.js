// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
    if (a > b) {
      return a
    } else if(a < b){
      return b
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if ((x > y) && (x > z)) {
      return x
    } else if ((y > x) && (y > z)) {
      return y
    } else if ((z > x) && (z > y)) {
      return z
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true
  }
  else {
    return false
  }
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var newArray = phrase.split('');
  var newStuff = []
  if (newArray.indexOf('a', 'e', 'i', 'o', 'u', ' ') > -1) {
//     var y = newStuff;
//   } else {
//     var y = "o" + newStuff;
//   };
// };






  // var str = phrase;
  // var vowels = ['a', 'e', 'i', 'o', 'u', ' ']
  // var x = ''


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){
  var str = x.split('');
  var newStuff = str.reverse();
  var joinStuff = newStuff.join('');
  return joinStuff.toString();  
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

// function findLongestWord(words){
//   newArray = words
//   newArray.filter(function doStuff(word) {
//   return word.length > 3;
//   });
// };
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}
