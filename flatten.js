var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));

function flatten (array) {
  var newArray = array.reduce(function (previous, current) {
    return previous.concat(current)
  }, []);
  return newArray;
}
