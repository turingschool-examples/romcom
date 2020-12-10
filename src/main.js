// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {};
var title = document.querySelector('.cover-title');
var image = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var makeOwnPage = document.querySelector('.form-view');
var homePage = document.querySelector('.home-view');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var viewSavedPage = document.querySelector('.saved-view');
var saveCoverButton = document.querySelector('.save-cover-button');
// Add your event listeners here 👇
window.addEventListener('load', helper);
randomCoverButton.addEventListener('click', helper);
makeNewButton.addEventListener('click', showForm);
homeButton.addEventListener('click', goHome);
viewSavedButton.addEventListener('click', viewSaved);
// viewSavedButton.addEventListener('click', viewSaved)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomTitle() {
  var index = getRandomIndex(titles);
  return titles[index];
}

function getRandomImage() {
  var index = getRandomIndex(covers);
  return covers[index];
}

function getRandomTagline() {
  var index = getRandomIndex(descriptors);
  var index2 = getRandomIndex(descriptors);
  if (index === index2) {
    index2 = getRandomIndex(descriptors);
  }
  return descriptors[index];
}

function helper() {
  title.innerText = getRandomTitle();
  image.src = getRandomImage();
  tagline1.innerText = getRandomTagline();
  tagline2.innerText = getRandomTagline();
  currentCover = new Cover(image.src, title.innerText, tagline1.innerText, tagline2.innerText);
}

function showForm() {
  makeOwnPage.classList.remove('hidden');
  homePage.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedPage.classList.add('hidden');
}

function goHome() {
  makeOwnPage.classList.add('hidden');
  homePage.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedPage.classList.add('hidden');
}

function viewSaved() {
  homePage.classList.add('hidden');
  viewSavedPage.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  makeOwnPage.classList.add('hidden');
}
