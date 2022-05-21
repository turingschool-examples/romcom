// Create variables targetting the relevant DOM elements here

// Variables & querySelector paths
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var form = document.querySelector(".form-view");
var homePage = document.querySelector(".home-view");


var homeButton = document.querySelector(".home-button");
var coverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoverButton = document.querySelector(".view-saved-button");
var makeYourOwnCoverButton =document.querySelector(".make-new-button");
var createNewBookButton = document.querySelector(".crete-new-book-button");

// Event listeners here:
window.addEventListener('loadpage', randomRomCover);
homeButton.addEventListener('click', savedRomCovers);
coverButton.addEventListener('click', randomRomCover);
saveCoverButton.addEventListener('click', shouldDisplayForm);
viewSavedCoverButton.addEventListener('click', savedRomCovers);
makeYourOwnCoverButton.addEventListener('click', shouldDisplayForm);


// Random Cover Fxn's Section

function randomRomCover() {
var currentCover = new Cover(getRandomCover(covers), getRandomTitle(titles), getRandomDescriptor(descriptors), getRandomDescriptor(descriptors));
cover.src = currentCover.cover;
title.innerText = currentCover.title;
tagline1.innerText = currentCover.tagline1;
tagline2.innerText = currentCover.tagline2;
}


//Master function composed into random cover, title & descriptors:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Get 1 random cover image(jpg, png) string:

function getRandomCover(coversArray) {
  return coversArray[getRandomIndex(coversArray)];
}

//Get a random title:

function getRandomTitle(titlesArray) {
  return titlesArray[getRandomIndex(titlesArray)];
}
//Get a random 1st & 2nd tagline:

function getRandomDescriptor(descriptorsArray) {
  return descriptorsArray[getRandomIndex(descriptorsArray)];
}

//Displays the "make your own cover" page

function shouldDisplayForm() {
  form.classList.remove("hidden");
  homePage.classList.add("hidden");
  coverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");

}


function savedRomCovers () {
  form.classList.remove("hidden")
  coverButton.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homePage.classList.remove("hidden")

}



// Tests for Dev Tools
console.log(getRandomIndex(covers));
console.log(getRandomIndex(titles));
console.log(getRandomIndex(descriptors));
console.log(getRandomIndex(descriptors));

// Future needed class Cover Instantiations

//Array for storing all "Make Your Own Cover" elements
// Params (cover, title, tagLine1, tagline2)



var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "passion", "woe")
];
