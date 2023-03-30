// Create variables targetting the relevant DOM elements here 👇
var randomTitle = document.querySelector('.cover-title');

var randomDescriptor1 = document.querySelector('.tagline-1');

var randomDescriptor2 = document.querySelector(`.tagline-2`);

var image = document.querySelector('.cover-image');

var randomCoverButton = document.querySelector('.random-cover-button');

var homeButton = document.querySelector('.home-button');

var makeCoverButton = document.querySelector('.make-new-button');

var saveButton = document.querySelector('.save-cover-button');

var veiwSaveButton = document.querySelector('.view-saved-button');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', displayNewCover);

homeButton.addEventListener('click',)

makeCoverButton.addEventListener('click',)

saveButton.addEventListener('click',)

veiwSaveButton.addEventListener('click',)

//might need to add more eventListners for each button click to invoke different functions

// /* do we create a new function that uses getRandomIndex function as callback?*/

// Create your event handlers and other functions here 👇
function displayNewCover() {
  randomTitle.innerText = titles[getRandomIndex(titles)];
  randomDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  randomDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  image.src = covers[getRandomIndex(covers)];
};

//add functions here to be called to hide and show buttons and pages - might have multiple event listeners for one button click to hide multiple buttons and pull up things to keep code DRY

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};
