// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
// coverImage.src = './assets/ruffles.jpg'

var coverTitle = document.querySelector('.cover-title');

var tagline1 = document.querySelector('.tagline-1');

var tagline2 = document.querySelector('.tagline-2');

// var homeButton = document.querySelector('.home-button hidden');
//
// var randomButton = document.querySelector('.random-cover-button');
//
// var saveCoverButton = document.querySelector('.save-cover-button');
//
// var makeNewButton = document.querySelector('.make-new-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
button.addEventListener('click', function() {

}

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
