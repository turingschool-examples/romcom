// Create variables targetting the relevant DOM elements here 👇
var randomCover = document.querySelector(".random-cover-button");
var saveCover = document.querySelector(".save-cover-button");
var viewSaved = document.querySelector(".view-saved-button");
var makeNewCover = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");

var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var firstDescriptor = document.querySelector(".tagline-1")
var secondDescriptor = document.querySelector(".tagline-2")

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");



// We've provided a few variables below
var savedRomCom = [];
var currentRomCom = new Cover(coverImage.src, coverTitle.innerText, firstDescriptor.innerText, secondDescriptor.innerText)

// Add your event listeners here 👇

randomCover.addEventListener('click', randomRomCom);

window.addEventListener('load', randomRomCom);

makeNewCover.addEventListener('click', switchFormView);

homeButton.addEventListener('click', returnHome);

viewSaved.addEventListener('click', switchSavedView);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function switchFormView() {
  homeView.className = 'view home-view hidden';
  formView.className = 'view form-view';
  randomCover.className = 'random-cover-button hidden';
  saveCover.className = 'save-cover-button hidden';
  homeButton.className = 'home-button';
}

function switchSavedView() {
  homeView.className = 'view home-view hidden';
  savedView.className = 'view saved-view';
  formView.className = 'view form-view hidden';
  randomCover.className = 'random-cover-button hidden';
  saveCover.className = 'save-cover-button hidden';
  homeButton.className = 'home-button';
}

function returnHome() {
  homeView.className = 'view home-view';
  formView.className = 'view form-view hidden';
  randomCover.className = 'random-cover-button';
  saveCover.className = 'save-cover-button';
  homeButton.className = 'home-button hidden';
}

function randomRomCom() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
//  if (firstDescriptor === secondDescriptor) {
//    return secondDescriptor.innerText = getRandomIndex(descriptors);
//  };
  // storeCover();
};
