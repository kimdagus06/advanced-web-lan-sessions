/* Assignment 1: Access Parent Element
Objective: Use  parentElement  to navigate up the DOM tree.
Task:
1. Create a  <section>  containing a  <div>  and a  <p> .
2. Write JavaScript to select the  <p>  and log its parent  <div>  to the console.
*/

// HTML structure
const section = document.createElement("section");
const div = document.createElement("div");
const p = document.createElement("p");
p.textContent = "This is a paragraph.";
div.appendChild(p);
section.appendChild(div);
document.body.appendChild(section);

// JavaScript
const paragraph = document.querySelector("p");
const parentDiv = paragraph.parentElement;
console.log(parentDiv);

/* Assignment 2: Access Children of an Element
Objective: Use  children  to get child elements.
Task:
1. Create a  <div>  with three  <span>  elements as children.
2. Write JavaScript to log the  <span>  elements as an HTMLCollection.
*/

// HTML structure
const parentDiv2 = document.createElement("div");
const span1 = document.createElement("span");
span1.textContent = "Span 1";
const span2 = document.createElement("span");
span2.textContent = "Span 2";
const span3 = document.createElement("span");
span3.textContent = "Span 3";

// JavaScript
parentDiv2.appendChild(span1);
parentDiv2.appendChild(span2);
parentDiv2.appendChild(span3);
document.body.appendChild(parentDiv2);

/* Assignment 3: Access Sibling Elements
Objective: Use  nextElementSibling  and  previousElementSibling .
Task:
1. Create a  <ul>  with three  <li>  items.
2. Select the second  <li>  and log its previous and next siblings.
*/

// HTML structure
{
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.textContent = "Item 1";
  const li2 = document.createElement("li");
  li2.textContent = "Item 2";
  const li3 = document.createElement("li");
  li3.textContent = "Item 3";
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  document.body.appendChild(ul);

  // JavaScript
  const secondLi = li2;
  const previousSibling = secondLi.previousElementSibling;
  const nextSibling = secondLi.nextElementSibling;

  console.log("Previous:", previousSibling);
  console.log("Next:", nextSibling);
}

/* Assignment 4: Access All Child Nodes
Objective: Use  childNodes  to retrieve all child nodes, including text nodes.
Task:
1. Create a  <div>  with the id container for a  <p>  and some text.
2. Write JavaScript to log all child nodes of the  <div> .
*/

// HTML structure
const container4 = document.createElement("div");
container4.id = "container4";

const textNode4 = document.createTextNode("This is text.");
const paragraph4 = document.createElement("p");
paragraph4.textContent = "This is a paragraph.";

container4.appendChild(textNode4);
container4.appendChild(paragraph4);
document.body.appendChild(container4);

// JavaScript
const nodes4 = container4.childNodes;
console.log("Assignment 4 Nodes:", nodes4);

/* Assignment 5: Access First and Last Child
Objective: Use  firstElementChild  and  lastElementChild .
Task:
1. Create a  <div>  containing multiple  <p>  elements.
2. Write JavaScript to log the first and last  <p> .
*/

// HTML structure
const divWithParagraphs = document.createElement("div");
const p1 = document.createElement("p");
p1.textContent = "First paragraph.";
const p2 = document.createElement("p");

p2.textContent = "Second paragraph.";
const p3 = document.createElement("p");
p3.textContent = "Last paragraph.";
divWithParagraphs.appendChild(p1);
divWithParagraphs.appendChild(p2);
divWithParagraphs.appendChild(p3);
document.body.appendChild(divWithParagraphs);

// JavaScript
const firstParagraph = divWithParagraphs.firstElementChild;
const lastParagraph = divWithParagraphs.lastElementChild;
console.log(firstParagraph); // Output: <p>First paragraph.</p>
console.log(lastParagraph); // Output: <p>Last paragraph.</p>

/* Assignment 6: Navigate Multiple Levels
Objective: Combine parent and child traversal.
Task:
1. Create a nested structure with a  <div>  inside a  <section> .
2. Select the  <p>  inside the  <div>  and log the  <section>  parent.
*/

{
  // HTML structure
  const section6 = document.createElement("section");
  section6.id = "grandParent";

  const div6 = document.createElement("div");
  div6.id = "parent";

  const p6 = document.createElement("p");
  p6.id = "target";
  p6.textContent = "This is the target paragraph.";

  div6.appendChild(p6);
  section6.appendChild(div6);
  document.body.appendChild(section6);

  // JavaScript
  const targetParagraph = document.getElementById("target");
  const parentSection = targetParagraph.parentElement.parentElement;
  console.log("Assignment 6 Result:", parentSection);
}

/* Assignment 7: Count Child Elements
Objective: Use  children.length  to count children.
Task:
1. Create a  <ul>  with five  <li>  elements with different ids.
2. Write JavaScript to count and log the number of  <li>  elements as well as all the ids.
*/

{
  // HTML structure
  const ulWithItems = document.createElement("ul");

  const liA = document.createElement("li");
  liA.id = "itemA";
  liA.textContent = "Apple";

  const liB = document.createElement("li");
  liB.id = "itemB";
  liB.textContent = "Banana";

  const liC = document.createElement("li");
  liC.id = "itemC";
  liC.textContent = "Cherry";

  const liD = document.createElement("li");
  liD.id = "itemD";
  liD.textContent = "Date";

  const liE = document.createElement("li");
  liE.id = "itemE";
  liE.textContent = "Elderberry";

  ulWithItems.appendChild(liA);
  ulWithItems.appendChild(liB);
  ulWithItems.appendChild(liC);
  ulWithItems.appendChild(liD);
  ulWithItems.appendChild(liE);
  document.body.appendChild(ulWithItems);

  // Javescript
  const numberOfItems = ulWithItems.children.length;
  console.log(`Number of items: ${numberOfItems}`);

  const itemIds = Array.from(ulWithItems.children).map((li) => li.id);
  console.log(`Item IDs: ${itemIds.join(", ")}`);
}

/* Assignment 8: Access the Parent of the Parent
Objective: Navigate multiple levels up the DOM tree.
Task:
1. Create a structure with a  <div>  inside a  <section>  inside a  <body> .
2. Select the  <div>  and log the  <body>  element.
*/

// HTML structure
const section8 = document.createElement("section");
section8.id = "grandparent-section";

const div8 = document.createElement("div");
div8.textContent = "This is a div inside a section.";

section8.appendChild(div8);
document.body.appendChild(section8);

// JavaScript
const targetDiv = div8;
const bodyElement = targetDiv.parentElement.parentElement;
console.log(bodyElement);

/* Assignment 9: Select Specific Child
Objective: Use  children  to access a specific child.
Task:
1. Create a  <div>  with three  <p>  elements inside.
2. Write JavaScript to log the second  <p> .
*/

const divWithThreeParagraphs = document.createElement("div");
const pA = document.createElement("p");
pA.textContent = "Paragraph A";
const pB = document.createElement("p");
pB.textContent = "Paragraph B";
const pC = document.createElement("p");

pC.textContent = "Paragraph C";

divWithThreeParagraphs.appendChild(pA);
divWithThreeParagraphs.appendChild(pB);
divWithThreeParagraphs.appendChild(pC);
document.body.appendChild(divWithThreeParagraphs);
const secondParagraph = divWithThreeParagraphs.children[1];
console.log(secondParagraph);
// Output: <p>Paragraph B</p>

/* Assignment 10: Traverse All Siblings
Objective: Use  nextElementSibling  in a loop to traverse all siblings.
Task:
1. Create a  <ul>  with multiple  <li>  elements.
2. Select the first  <li>  and traverse through all siblings, logging each one.
*/

{
  const ulWithMultipleItems = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.textContent = "Item 1";
  const li2 = document.createElement("li");
  li2.textContent = "Item 2";
  const li3 = document.createElement("li");
  li3.textContent = "Item 3";
  const li4 = document.createElement("li");
  li4.textContent = "Item 4";
  ulWithMultipleItems.appendChild(li1);
  ulWithMultipleItems.appendChild(li2);
  ulWithMultipleItems.appendChild(li3);
  ulWithMultipleItems.appendChild(li4);
  document.body.appendChild(ulWithMultipleItems);

  let currentItem = ulWithMultipleItems.firstElementChild;
  while (currentItem) {
    console.log(currentItem);
    currentItem = currentItem.nextElementSibling;
  }
}
