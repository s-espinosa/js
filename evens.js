var isEven = function(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  }
  num > 0 ? num = num - 2 : num = num + 2
  return isEven(num)
}

console.log(isEven(0))
console.log(isEven(1))
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))

