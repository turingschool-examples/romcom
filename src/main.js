// Create variables targetting the relevant DOM elements here

// Variables & querySelector paths
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var formPage = document.querySelector(".form-view");
var homePage = document.querySelector(".home-view");

// Variables for button query paths:
var homeButton = document.querySelector(".home-button");
var coverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoverButton = document.querySelector(".view-saved-button");
var makeYourOwnCoverButton =document.querySelector(".make-new-button");
var createCustomButton = document.querySelector(".create-new-book-button");

// Query paths for make your own book form page:
var userCoverInput = document.querySelector(".user-cover");
var userTitleInput = document.querySelector(".user-title");
var userDescInput1 = document.querySelector(".user-desc1");
var userDescInput2 = document.querySelector(".user-desc2");

// Button event listeners here:
window.addEventListener('loadpage', randomRomCover);
homeButton.addEventListener('click', homePageTab);
coverButton.addEventListener('click', randomRomCover);
// saveCoverButton.addEventListener('click',  );
viewSavedCoverButton.addEventListener('click', savedRomCoversTab);
makeYourOwnCoverButton.addEventListener('click', makeOwnCoverDisplayForm);

// Make your own book form event listeners:

userCoverInput.addEventListener('click', addCoverInput);
userTitleInput.addEventListener('click', addTitleInput);
userDescInput1.addEventListener('click', addDescriptor);

// MAY NEED THIS 2ND LISTENER???
// userDescInput2.addEventListener('click',


// User saved covers array:

function savedRomCovers() {
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "passion", "woe")
];

}


//User saved books Fxn's:





// Random Cover Fxn's Section:

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

function makeOwnCoverDisplayForm() {
  formPage.classList.remove("hidden");
  homePage.classList.add("hidden");
  coverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function savedRomCoversTab () {
  formPage.classList.add("hidden");
  coverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  cover.classList.add("hidden");

}

function homePageTab() {
  homePage.classList.remove("hidden");
  cover.classList.remove("hidden");
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
  coverButton.classList.remove("hidden");

}




// Tests for Dev Tools
console.log(getRandomIndex(covers));
console.log(getRandomIndex(titles));
console.log(getRandomIndex(descriptors));
console.log(getRandomIndex(descriptors));

// Future needed class Cover Instantiations

//Array for storing all "Make Your Own Cover" elements
// Params (cover, title, tagLine1, tagline2)
