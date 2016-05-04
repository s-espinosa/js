var arrayToList = function(array) {
  var recursiveList = function (array, rest) {
    var rest = rest || null
    if (array.length == 0) {
      return rest
    } else {
      value = array.pop();
      node  = {value: value, rest: rest};
      return recursiveList(array, node);
    }
  }
  return recursiveList(array);
}

var prepend = function(value, list) {
  return {value: value, rest: list};
}

var nth = function(list, position) {
  var recursiveNth = function(list, position) {
    position -= 1
    if (list.rest == null) {
      return undefined
    } else if (position == 0) {
      return list.value
    } else {
      return (recursiveNth(list.rest, position));
    }
  }
  return recursiveNth(list, position);
}

var listToArray = function(list) {
  var recursiveArray = function (array, rest) {
    if (rest == null) {
      return array;
    } else {
      array.push(rest.value)
      rest  = rest.rest;
      return recursiveArray(array, rest);
    }
  }
  return recursiveArray([], list);
}

oldArray = [1, 2, 3, 4, 5];
var newList = arrayToList(oldArray);
console.log(newList);
var new_array = listToArray(newList);
console.log(new_array);
console.log(prepend(0, newList));
console.log(nth(newList, 3));
var lettersArray = ["A", "B", "C", "D"]
var letters = arrayToList(lettersArray);
console.log(nth(letters, 3));
console.log(nth(letters, 5));
