// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded',handlePageLoad);
randomCoverButton.addEventListener('click', handleRandomCoverButton);
makeYourOwnCoverButton.addEventListener('click', handleMakeYourCoverButton);
viewSavedCoversButton.addEventListener('click', handleViewSavedCoversButton);
homeButton.addEventListener('click', handleHomeButton);

// Create your event handlers and other functions here 👇
function handlePageLoad() {
  createRandomCover();
  displayCurrentCover();
}

function handleRandomCoverButton() {
  createRandomCover();
  displayCurrentCover();
}

function handleMakeYourCoverButton() {
  hideElement(homeView);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
  showElement(formView);
  showElement(homeButton);
}

function handleViewSavedCoversButton() {
  hideElement(homeView);
  hideElement(formView);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
  showElement(savedView);
  showElement(homeButton);
}

function handleHomeButton() {
  hideElement(homeButton);
  hideElement(formView);
  hideElement(savedView);
  showElement(saveCoverButton);
  showElement(randomCoverButton);
  showElement(homeView);
}

function createRandomCover(){
  var randomImgSrc = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(randomImgSrc, randomTitle, randomDescriptor1, randomDescriptor2);
}

function displayCurrentCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function showElement(elementToShow) {
  elementToShow.classList.remove('hidden');
}

function hideElement(elementToHide) {
  elementToHide.classList.add('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


