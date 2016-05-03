var countBs = function(someString) {
  return countChar(someString, "B");
}

var countChar = function (someString, someLetter) {
  counter = 0
  for (var i=0; i < someString.length; i++) {
    if (someString.charAt(i) == someLetter) counter ++;
  }
  return counter
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
