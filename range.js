var range = function(start, end, step) {
  var array = []
  step = step || 1
  for (var i = 0; i < (end - start + 1) / step; i++) {
    array[i] = (i * step) + start;
  }
  return array
}

var sum = function(array) {
  total = 0
  for (var i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

console.log(range(5, 10));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2))
console.log(range(1, 11, 2))
