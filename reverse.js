var reverseArray = function(array) {
  reversed = []
  iterations = array.length
  for (var i = 0; i < iterations; i++) {
    reversed[i] = array.pop();
  }
  return reversed
}

console.log(reverseArray(["A", "B", "C", "D"]))
console.log(reverseArray(["A", "B", "C", "D", "E"]))

var reverseArrayInPlace = function(array) {
  iterations = array.length/2
  for (var i = 0; i < iterations; i++) {
    beginning = array[i];
    end       = array[array.length - (i + 1)];
    array[i]  = end;
    array[array.length - (i + 1)] = beginning;
  }
  return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4]))
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))
