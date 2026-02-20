// Sheet 1p1 Assignment 9
//-- Javascript Code (if necessary split it up into server and client code)-----
function charFrequency(str) {
  let frequency = {};
  for (let char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

// Sheet 1p1 Assignment 10
//-- Javascript Code (if necessary split it up into server and client code)-----
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  static isSquare(rectangle) {
    return rectangle.width === rectangle.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // Check if it prints 50
console.log(Rectangle.isSquare(rect)); // false

const square = new Rectangle(4, 4);
console.log(square.getArea()); // Check if it prints 16
console.log(Rectangle.isSquare(square)); // true
