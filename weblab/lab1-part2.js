/* Assignment 1: Convert a Regular Function to Arrow Function
Objective: Practice using arrow function syntax.
Task:
Convert the following function to an arrow function. Test the arrow function by adding  5  and  3 :
function add(a, b) {
return a + b;
}
*/

function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
const result = addArrow(5, 3);
console.log(result); // Output: 8