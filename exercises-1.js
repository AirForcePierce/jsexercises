///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var answer = function sum(a, b) {
  return a + b;
};

answer(2, 6);

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function(x, y, z) {
  var total = x + y + z;
  return total / 3;
}

avg(3, 6, 9);

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var lengthAnswer = function getLength(name) {
  return name.length;
}

lengthAnswer("Jontae");

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function(a, b) {
  if (a > b) {
    return false;
  }
  else if (a < b) {
    return true;
  }
};

greaterThan(3, 6);


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greet = function(name) {
  return "Hello " + name + "!";
}

greet("Jontae");

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function(word1, word2, word3, word4) {
  return "I had a " + word1 + " that jumps into a " + word2 + " to get to the other side of a " + word3 + " to see the " + word4; 
}

madlib("apple", "beanbag", "river", "sand");


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
