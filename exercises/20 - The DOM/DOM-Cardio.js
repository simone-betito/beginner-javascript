// // Make a div
// const myDiv = document.createElement("div");

// // add a class of wrapper to it
// myDiv.classList.add("wrapper");

// // put it into the body

// document.body.appendChild(myDiv);

// // make an unordered list

// const ul = `<ul>
// <li>one</li>
// <li>two</li>
// <li>three</li>
// </ul>`;

// // const list = document.createElement("ul");

// // add three list items with the words "one, two three" in them
// // const li3 = document.createElement("li");
// // document.body.insertAdjacentElement("afterbegin", list);

// // const li1 = li3.cloneNode(true);
// // li1.textContent = "one";
// // list.insertAdjacentElement("afterbegin", li1);

// // const li1 = li3.cloneNode(true);
// // li2.textContent = "two";
// // list.insertAdjacentElement("afterbegin", li2);

// // const li1 = li3.cloneNode(true);
// // li3.textContent = "three";
// // list.insertAdjacentElement("afterbegin", li3);

// //console.log("li3");

// // put that list into the above wrapper

// const ulElement = div.querySelector("ul");
// div.innerHTML("ulElement");

// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// create an image

const img = document.createElement('img');

// set the source to an image

img.src = 'https://en.wikipedia.org/wiki/Guinea_pig#/media/File:Two_Adult_Guinea_Pigs_(cropped).jpg';

// set the width to 250
img.width = 250;
img.height = 250;

// add a class of cute

img.classList.add('cute');

// add an alt of Cute Puppy

img.alt = 'cute piggie!';

// Append that image to the wrapper

div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const myHTML = `<div class="myDiv2">
<p>Paragraph One</p>
<p>Paragraph Two </p>
</div>`;

// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning

const myDiv2 = div.querySelector('.myDiv2');
myDiv2.children[1].classList.add('warning');

// remove the first paragraph

myDiv2.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  `<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
  <button class="delete" type="button"></button>
  </div>`;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards

let cardsHTML = generatePlayerCard('simone', 29, 170);
cardsHTML = generatePlayerCard('andrew', 29, 180);
cardsHTML = generatePlayerCard('Jackson', 9, 50);
cardsHTML = generatePlayerCard('PA', 27, 190);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removeds

// select all the buttons!
const buttons = document.querySelectorAll('button');
// make out delete function
function deleteCard(event) {
  const buttonThatWasClicked = event.currentTarget;
  buttonThatWasClicked.closest('.playerCard').remove();
}

// loop over them and attach a listener

buttons.forEach(button => button.addeventListener('click', deleteCard));
