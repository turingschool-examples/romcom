// Create variables targetting the relevant DOM elements here 👇
// Main Cover
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')

// Buttons
var showNewRandomCoverButton = document.querySelector('.random-cover-button') 



// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomizeCover)
showNewRandomCoverButton.addEventListener('click', randomizeCover)


// Create your event handlers and other functions here 👇
function randomizeCover(){
  var randomCover = new Cover(covers[getRandomIndex(covers)],titles[getRandomIndex(titles)],descriptors[getRandomIndex(descriptors)],descriptors[getRandomIndex(descriptors)])
  
  coverImage.src = randomCover.cover
  coverTitle.innerText = randomCover.title
  descriptor1.innerText = randomCover.tagline1
  descriptor2.innerText = randomCover.tagline2

}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
