// Create variables targetting the relevant DOM elements here 👇
// Form-view buttons
var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var coverFormButton = document.querySelector('.make-new-button');
var saveButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
// Cover-view buttons
var currentCover = document.querySelector('.cover-image');
var coverButton = document.querySelector('.random-cover-button');

//all of things to interact with dom//
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// Opens form-view when button is clicked
coverFormButton.addEventListener('click', openForm);
// Changes cover when cover button is clicked
coverButton.addEventListener('click', changeCovers);
// Opens saved covers view when button is clicked
saveButton.addEventListener('click', openSavedCovers);
// Opens home page view when button is clicked
homeButton.addEventListener('click', openHomePage);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// Opens form-view
function openForm() {
  homePage.classList.add('hidden');
  coverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formPage.classList.remove('hidden');
}
// Opens saved-covers view
function openSavedCovers() {
  homePage.classList.add('hidden');
  saveButton.classList.add('hidden');
  coverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
}
// Opens home page
function openHomePage() {
  homePage.classList.remove('hidden');
  savedView.classList.add('hidden');
  formPage.classList.add('hidden');
  saveButton.classList.remove('hidden');
  coverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  coverFormButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
}
// Changes cover picture
function changeCovers() {
  var newCover = covers[Math.floor(Math.random() * covers.length)]
  var currentCover = document.querySelector('.cover-image');
  currentCover.src = newCover;
}
