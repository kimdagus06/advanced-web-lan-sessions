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

// Sheet 1p2 Assignment 7
//-- Javascript Code (if necessary split it up into server and client code)-----
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount); // Output should be: { apple: 3, banana: 2, cherry: 1 }

// Sheet 1p2 Assignment 8
//-- Javascript Code (if necessary split it up into server and client code)-----
const numList = [10, 20, 30, 40];
const sum = numList.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output should be: 100

// Sheet 2p1 Assignment 9
//-- Javascript Code (if necessary split it up into server and client code)-----
// [Client Side]
const threeParagraphs = document.createElement("div");
const paragraph1 = document.createElement("p");
paragraph1.textContent = "First paragraph";
const paragraph2 = document.createElement("p");
paragraph2.textContent = "Second paragraph";
const paragraph3 = document.createElement("p");
paragraph3.textContent = "Third paragraph";

threeParagraphs.appendChild(paragraph1);
threeParagraphs.appendChild(paragraph2);
threeParagraphs.appendChild(paragraph3);
document.body.appendChild(threeParagraphs);
const secondParagraph = threeParagraphs.children[1];

console.log(secondParagraph);
