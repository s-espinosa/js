var deepEqual = function (obj1, obj2) {
      debugger;
  if (obj1 === obj2) {
    return true
  } else if (Object.keys(obj1).length == Object.keys(obj2).length) {
    returnValue = true
    var key;
    var recursiveEqual = function (obj1, obj2) {
      for (key in obj1) {
        if (typeof obj1[key] == "object") {
          recursiveEqual(obj1[key], obj2[key]);
        } else if (Object.keys(obj2).indexOf(key) == -1) {
          returnValue = false;
        } else if (obj1[key] != obj2[key]) {
          returnValue = false
        }
      }
    }
    recursiveEqual(obj1, obj2);
    return returnValue;
  } else {
    return false
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
