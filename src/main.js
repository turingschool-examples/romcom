// Create variables targetting the relevant DOM elements here 👇
var coverImageSource = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptorOne = document.querySelector('.tagline-1');
var descriptorTwo = document.querySelector('.tagline-2');
var savedView = document.querySelector('.saved-view')
var homeView = document.querySelector('.home-view');
var form = document.querySelector('.form-view');

var coverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var makeNewButton = document.querySelector('.make-new-button');
var viewSavedButton = document.querySelector('.view-saved-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImageSource, coverTitle, descriptorOne, descriptorTwo);

// Add your event listeners here 👇
coverButton.addEventListener('click', changeCover);

makeNewButton.addEventListener('click', displayForm);

viewSavedButton.addEventListener('click', displaySavedView);

homeButton.addEventListener('click', displayHomeView);
// Create your event handlers and other functions here 👇
function changeCover() {
  currentCover.cover.src = covers[getRandomIndex(covers)];
  currentCover.title.innerText = titles[getRandomIndex(titles)];
  currentCover.tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover.tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

function displayForm() {
  form.classList.remove('hidden')
  // form.style.display = 'initial';
  displayHomeButton();
  hideHome();
  hideCoverButton();
  hideSaveCoverButton();
}

function displaySaved() {

}


function displayHomeButton() {
  homeButton.style.display = 'initial';
}

function hideHome() {
  homeView.classList.add("hidden")
}

function displayHomeView() {
  homeView.style.display = 'initial';
}

function hideCoverButton() {
  coverButton.style.display = 'none';
}

function hideSaveCoverButton() {
  saveCoverButton.style.display = 'none';
}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
