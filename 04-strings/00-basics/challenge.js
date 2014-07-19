module.exports.formLetter = function(firstName, senderName, message) {
return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  // var bigString = "This is a Test"
  // var startA = 0
  // var endA = 4
  // var startB = 5
  // var endB = 7
  var partA = bigString.substring(startA, endA); // "This"
  var partB = bigString.substring(startB, endB); // "is"

  // "Thisis"

  return partA + partB;
};

// findFirstMatch("OscarOs", "Os")
module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

// substringBetweenMatches("Roses are red, apples are really red.", "red")

// findFirstMatch("Roses are red, apples are really red.", "red"); // index of first match
// firstLastMatch("Roses are red, apples are really red.", "red"); // index of last match

// "Roses are red, apples are really red.".substring(firstIndex + "red".length, lastIndex - "red".length);

module.exports.substringBetweenMatches = function(text, searchString) {
  var findFirstMatch = text.indexOf(searchString);
  var findLastMatch = text.lastIndexOf(searchString);
  var searchStringLength = searchString.length;
  var result = text.substring(findFirstMatch + searchStringLength, findLastMatch);
  return result;
};