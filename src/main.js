// Create variables targeting the relevant DOM elements here 👇
// variables accessing book cover HTML elements
var cover = document.querySelector('img');
var title = document.querySelector('h2');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');
// var userCover = document.querySelector('.user-cover');
// var userTitle = document.querySelector('.user-title');
// var userDescriptor1 = document.querySelector('.user-desc1');
// var userDescriptor2 = document.querySelector('.user-desc2');

// Button variables
var randomButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var makeMyBookButton = document.querySelector('.create-new-book-button');

// Page view variables
var homeView = document.querySelector('.home-view');
var savedCoverView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.addEventListener("DOMContentLoaded", randomizeCover);

randomButton.addEventListener("click", randomizeCover);

homeButton.addEventListener('click', homePage);

viewSavedCoversButton.addEventListener('click', savedPage);

makeNewCoverButton.addEventListener('click', makePage);

makeMyBookButton.addEventListener('click', function() {
  createBook();
  homePage();
});


// Create your event handlers and other functions here 👇
function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  cover.src = currentCover.cover;
  title.innerText = currentCover.title;
  firstDescriptor.innerText = currentCover.tagline1;
  secondDescriptor.innerText = currentCover.tagline2;
}

function homePage() {
  homeView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  formView.classList.add('hidden');
}

function savedPage() {
  savedCoverView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
}

function makePage() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
}

function addUserInputToArrays() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDescriptor1.value);
  descriptors.push(userDescriptor2.value);
}

function createBook() {
  event.preventDefault();

  var userCover = document.querySelector('.user-cover').value;
  var userTitle = document.querySelector('.user-title').value;
  var userDescriptor1 = document.querySelector('.user-desc1').value;
  var userDescriptor2 = document.querySelector('.user-desc2').value;

  currentCover = new Cover(userCover, userTitle, userDescriptor1, userDescriptor2);

  cover.src = currentCover.cover;
  title.innerText = currentCover.title;
  firstDescriptor.innerText = currentCover.tagline1;
  secondDescriptor.innerText = currentCover.tagline2;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
