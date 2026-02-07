/* Assignment 1: Changing Content
Objective: Learn how to select and change an element's content.
Task:
1. Create an HTML page with a  <p>  element with the ID  paragraph .
2. Write JavaScript to change the content of the paragraph to: "DOM Manipulation is fun!"
Solution:
*/

{
  // HTML structure
  const paragraph = document.createElement("p");
  paragraph.id = "paragraph";
  paragraph.textContent = "Original paragraph.";
  document.body.appendChild(paragraph);

  // JavaScript
  const selectedParagraph = document.getElementById("paragraph");
  selectedParagraph.textContent = "DOM Manipulation is fun!";
}

/* Assignment 2: Changing Style
Objective: Learn how to modify element styles dynamically.
Task:
1. Create a  <button>  and a  <div>  with some placeholder text.
2. Write JavaScript to change the  <div> 's text color to blue when the button is clicked.
Solution:
*/

{
  // HTML structure
  const button = document.createElement("button");
  button.textContent = "Change Color";
  const div = document.createElement("div");
  div.textContent = "This text will change color.";
  document.body.appendChild(button);
  document.body.appendChild(div);

  // JavaScript
  button.addEventListener("click", () => {
    div.style.color = "blue";
  });
}

/* Assignment 3: Adding a New Element
Objective: Create and append new elements dynamically.
Task:
1. Create an empty  <ul>  in your HTML file.
2. Use JavaScript to add 3  <li>  elements dynamically, each with unique text.
Solution:
*/

{
  // HTML structure
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  // JavaScript
  const li1 = document.createElement("li");
  li1.textContent = "Item 1";
  const li2 = document.createElement("li");
  li2.textContent = "Item 2";
  const li3 = document.createElement("li");
  li3.textContent = "Item 3";
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
}

/* Assignment 4: Removing an Element
Objective: Learn how to remove an element from the DOM.
Task:
1. Add a button and a  <div>  with an ID of  removeMe .
2. Write JavaScript to remove the  <div>  when the button is clicked.
Solution
*/

{
  // HTML structure
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Div";
  const divToRemove = document.createElement("div");

  divToRemove.id = "removeMe";
  divToRemove.textContent = "This div will be removed.";

  document.body.appendChild(removeButton);
  document.body.appendChild(divToRemove);

  // JavaScript
  removeButton.addEventListener("click", () => {
    const div = document.getElementById("removeMe");
    if (div) {
      div.remove();
    }
  });
}

/* Assignment 5: Handling Input
Objective: Work with input fields and update content dynamically.
Task:
1. Create an input field and a  <div>  for displaying the input text.
2. When the user types in the input field, display the typed text in real-time in the  <div> .
Solution:
*/

{
  // HTML structure
  const inputField = document.createElement("input");
  const displayDiv = document.createElement("div");

  document.body.appendChild(inputField);
  document.body.appendChild(displayDiv);

  // JavaScript
  inputField.addEventListener("input", () => {
    displayDiv.textContent = inputField.value;
  });
}
