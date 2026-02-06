/* Assignment 1: Access Parent Element
Objective: Use  parentElement  to navigate up the DOM tree.
Task:
1. Create a  <section>  containing a  <div>  and a  <p> .
2. Write JavaScript to select the  <p>  and log its parent  <div>  to the console.
HTML:
JavaScript: 
*/

// HTML structure
const section = document.createElement("section");
const div = document.createElement("div");
const p = document.createElement("p");
p.textContent = "This is a paragraph.";
div.appendChild(p);
section.appendChild(div);
document.body.appendChild(section);

// JavaScript to select the <p> and log its parent <div>
const paragraph = document.querySelector("p");
const parentDiv = paragraph.parentElement;
console.log(parentDiv); // Output: <div>...</div>

/* Assignment 2: Access Children of an Element
Objective: Use  children  to get child elements.
Task:
1. Create a  <div>  with three  <span>  elements as children.
2. Write JavaScript to log the  <span>  elements as an HTMLCollection.
HTML:
JavaScript:
*/

// HTML structure
const parentDiv2 = document.createElement("div");
const span1 = document.createElement("span");
span1.textContent = "Span 1";
const span2 = document.createElement("span");
span2.textContent = "Span 2";
const span3 = document.createElement("span");
span3.textContent = "Span 3";

parentDiv2.appendChild(span1);
parentDiv2.appendChild(span2);
parentDiv2.appendChild(span3);
document.body.appendChild(parentDiv2);

// JavaScript to log the <span> elements as an HTMLCollection
const spanElements = parentDiv2.children;
console.log(spanElements); // Output: HTMLCollection(3) [span, span, span]

