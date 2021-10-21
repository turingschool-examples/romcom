// Create variables targetting the relevant DOM elements here 👇

// Here we need to target every selector in the index.html that we'll be changing
 // e.g. var title = document.querySelector('.cover-title')

//home-button
var homeButton = document.querySelector(".home-button");
//random-cover-button
var randomCoverButton = document.querySelector(".random-cover-button");
//save-cover-button
var saveCoverButton = document.querySelector(".save-cover-button");
//make-new-button
var makeNewCover = document.querySelector(".make-new-button");
//cover-image
var coverImage = document.querySelector(".cover-image");
//cover-title
var coverTitle = document.querySelector(".cover-title");
//tagline-1
var tagline1 = document.querySelector(".tagline-1");
//tagline-2
var tagline2 = document.querySelector(".tagline-2");
//home-view
var homeView = document.querySelector(".home-view");
//form-view
var formView = document.querySelector(".form-view");
//saved-view
var savedView = document.querySelector(".saved-view");
//saved-cover-section
var savedCoverSection = document.querySelector(".saved-cover-section");
//user-cover
var userCover = document.querySelector(".user-cover");
//user-title
var userTitle = document.querySelector(".user-title");
//user-desc1
var userDesc1 = document.querySelector(".user-desc1");
//user-desc2
var userDesc2 = document.querySelector(".user-desc2");
//create-new-book-button
var createNewBookButton = document.querySelector(".create-new-book-button");



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.addEventListener("DOMContentLoaded", getRandomCover);

randomCoverButton.addEventListener("click", getRandomCover);

makeNewCover.addEventListener("click",makeYourOwnCover);

// Create your event handlers and other functions here 👇
function getRandomCover() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  // if statement to make sure descriptors are different
  coverImage.src = randomCover.cover;
  coverTitle.innerText = randomCover.title;
  tagline1.innerText = randomCover.tagline1;
  tagline2.innerText = randomCover.tagline2;
};

function makeYourOwnCover(){
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');

};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
