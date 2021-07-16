// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var title = document.querySelector('.cover-title');
var randomCoverBttn = document.querySelector('.random-cover-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverBttn.addEventListener('click', changeRandomCover);

// Create your event handlers and other functions here 👇

function changeRandomCover() {
  cover.src = covers[getRandomIndex(covers)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  title.innerText = titles[getRandomIndex(titles)];
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

cover.src = covers[getRandomIndex(covers)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];
title.innerText = titles[getRandomIndex(titles)];


// Iteration 1
// Make Show New Random Cover button interactive to display new random cover when clicked

// Data needed:
  // Class,
  // currentCover variable,
  // random-cover-button,
  // function for when button is clicked

// OUTPUT:
// The cover should re-generate only when the button is clicked.

// STEPS:
// Access the button c query querySelector
// create event listener functions
// function is invoked to update DOM
//

// Questions:
// Why do we need to update or use the currentCover variable, where does it come into play?
