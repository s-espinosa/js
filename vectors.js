function Vector(x, y)  {
  this.x = x;
  this.y = y;
  this.constructor.prototype.minus = function(vector2) {
    var newX = this.x - vector2.x;
    var newY = this.y - vector2.y;
    return new Vector(newX, newY);
  }
}

Vector.prototype.plus = function(vector2) {
  var newX = this.x + vector2.x;
  var newY = this.y + vector2.y;
  return new Vector(newX, newY);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
console.log(new Vector(5, 12).length);
var a = new Vector(3, 4);
var b = new Vector(5, 12);
console.log(a.plus === b.plus);
console.log(a.minus === b.minus);
console.log(a.length);
console.log(b.length);
console.log(a.length === b.length);
