// Create variables targetting the relevant DOM elements here 👇
var coverButton = document.querySelector(".random-cover-button");
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");


//We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "passion", "woe")
];

// We need to instantiate our classes!
var currentCover = new Cover(title, cover, tagline1, tagline2);


// Add your event listeners here 👇

coverButton.addEventListener('loadpage', getRandomCover);
coverButton.addEventListener('click', getRandomCover);

// Fxn's Section

function randomRomCover() {
cover.src = currentCover.cover;
title.innerText = currentCover.title;
tagLine1.innerText = currentCover.tagline1;
tagLine2.innerText = currentCover.tagline2;
}

// Get 1 random cover image(jpg, png) string
function getRandomCover(covers) {
  this.cover = covers[getRandomIndex(covers)];
}

//Get a random title:

function getRandomTitle(titles) {
  this.title = titles[getRandomIndex(titles)];
}
//Get a random 1st tagline:

function getRandomDescriptor1(descriptors) {
  this.tagline1 = descriptors[getRandomIndex(descriptors)];
}
//Get a random 2nd tagline:

function getRandomDescriptor2(descriptors) {
this.tagline2 = descriptors[getRandomIndex(descriptors)];
}

//Master function working on other functions:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
  console.log("We are working hard!", getRandomIndex(titles))
