var dimension = 9

for (var i = 0; i < dimension; i++) {
  if (i % 2 == 0) {
    var row = ""
    for (var j = 0; j < dimension; j++) {
      if (j % 2 == 0) {
        row = row + " ";
      } else {
        row = row + "#";
      }
    }
    console.log(row)
  } else {
    var row = ""
    for (var j = 0; j < dimension; j++) {
      if (j % 2 == 0) {
        row = row + "#"
      } else {
        row = row + " "
      }
    }
    console.log(row)
  }
}
