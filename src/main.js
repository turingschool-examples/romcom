// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewOne = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');

// Here I am declaring these variables and linking them to the HTML element.

// We've provided a few variables below
var savedCovers = [
  // new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// // Add your event listeners here 👇
window.onload = useRandomIndex();
// // Every time the window reloads (window.onload) we are gonna invoke our useRandomIndex
// // function to get new variables.
// // Below is another way to do it.
// window.addEventListener('onload', useRandomIndex());
randomCoverButton.addEventListener('click', randomCover);
makeNewOne.addEventListener('click', makeNewCoverByUser)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function useRandomIndex() {
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];
  coverImage.src = randomImage;
  // coverImage.setAttribute('src', randomImage);
  coverTitle.innerHTML = randomTitle;
  tagline1.innerHTML = randomTagline1;
  tagline2.innerHTML = randomTagline2;
};

function randomCover() {
  var randomImage = covers[getRandomIndex(covers)];
  coverImage.src = randomImage;
};

function makeNewCoverByUser() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');

};
