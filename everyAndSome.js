var every = function(array, condition) {
  var returnValue = true;
  for (var i = 0; i < array.length; i++) {
    if (!condition(array[i])) {returnValue = false;}
  }
  return returnValue;
}

var some = function(array, condition) {
  var returnValue = false;
  for (var i = 0; i < array.length; i++) {
    if (condition(array[i])) {returnValue = true;}
  }
  return returnValue;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
