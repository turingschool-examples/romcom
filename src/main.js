// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');
var coverImage = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomizeButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var randomCover = getRandomIndex(covers);

// Add your event listeners here 👇
window.addEventListener("load", createRandomCover);
randomizeButton.addEventListener("click", createRandomCover);
makeNewButton.addEventListener("click", showForm);

// Create your event handlers and other functions here 👇

function createRandomCover() {
  var randomCoverImage = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomTagline1 = getRandomIndex(descriptors);
  var randomTagline2 = getRandomIndex(descriptors);
  currentCover = new Cover(randomCoverImage, randomTitle, randomTagline1, randomTagline2);
  displayNewCover(currentCover);
}

function displayNewCover(cover) {
  coverTitle.innerText = cover.title;
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
  coverImage.src = cover.cover;
}

function showForm() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  randomizeButton.classList.add("hidden");
}


// When a user clicks the “Make Your Own Cover” button, we should see the form, and the homepage view should be hidden
// create querySelector for button class .make-new-button
// addEventListener on "click" for "Make your own cover" that invokes new function
// add querySelector for .home-view
// add querySelector for .form-View
// function attached to "make your own cover" EventListener will add hidden class to home-view and remove hidden class form-view

// We've provided one function to get you started
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
