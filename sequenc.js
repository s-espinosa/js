// Your code here.
var sequence = function (array, beginning, end, func) {
  if (array.length < end) {end = array.length}
  for (var i = beginning; i < end; i++) {
    func(array[i]);
  }
}


var logFive = function(array) {
  sequence(array, 0, 5, console.log);
}

var ArraySeq = function(array) {
  return array;
}

var RangeSeq = function(beginning, end) {
  var returnArray = []
  for (var i = beginning; i < end; i++) {
    returnArray.push(i);
  }
  return returnArray;
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
