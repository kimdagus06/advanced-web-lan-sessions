/* 1. Variables and Data Types
Task: Create variables of different data types as well as array, set and objectand log them to the console. 
*/

const name = "Dasha";
let age = 32;
let isStudent = true;

let hobbies = ["playing", "coding", "traveling"];
let animals = new Set(["cat", "dog", "tiger"]);
let user = {
  name: "Dasha",
  age: 32,
  isStudent: true,
};

console.log(name, age, isStudent);
console.log(hobbies);
console.log(animals);
console.log(user);

/* 2. Loops
Task: Print all numbers from 1 to 10 using a for and also as a while loop. 
*/
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

/* 3. Find the Largest Number in an Array
Task: Write a JavaScript function findLargestNumber(numbers) that takes an array of numbers and
returns the largest number in that array. 
*/
function findLargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

/* 4. Functions
Task: Write a function to calculate the factorial of a number.
*/
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/* 5. Objects
Task: Create an object to represent a car and log its properties and values.
*/
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "red",
};

console.log(car);

/* 6. foreach with Callback
Task: Create an array of fruits and print each fruit using a forEach with a callback function.
*/
let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});

/* 7. Capitalize the First Letter of Each Word
Task: Write a function capitalizeWords(sentence) that takes a sentence as an input and
capitalizes the first letter of each word in the sentence. Return the modified sentence.
*/

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

/* 8. Merge Two Objects
Task: Write a function mergeObjects(obj1, obj2) that merges the properties of obj2 into obj1 . If
a property already exists in obj1 , it should be overwritten by the corresponding property in obj2 .
Return the merged object.
*/

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

/* 9. Count Character Frequency in a String
Task: Write a function charFrequency(str) that takes a string and returns an object where the keys
are characters and the values are the frequency of those characters in the string.
*/

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

/* 10. Create a Simple Class (ES6 Classes)
Task: Use ES6 classes to model a Rectangle . The class should have:
A constructor taking width and height .
A method getArea() that returns the area of the rectangle.
A static method isSquare(rectangle) that returns true if the rectangle is a square, otherwise false.
*/

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
console.log(Rectangle.isSquare(rect)); // Check if it prints false

const square = new Rectangle(4, 4);
console.log(square.getArea()); // Check if it prints 16
console.log(Rectangle.isSquare(square));
