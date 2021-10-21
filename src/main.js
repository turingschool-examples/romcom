// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
// coverImage.src = './assets/ruffles.jpg'

var coverTitle = document.querySelector('.cover-title');

var tagline1 = document.querySelector('.tagline-1');

var tagline2 = document.querySelector('.tagline-2');



// We've provided a few variables below
var savedCovers = [
  new Cover("Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
