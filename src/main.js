
// Create variables targetting the relevant DOM elements here 👇
//things we need to find: cover image, title, Tagline, 2 descriptors in tagline.

var coverImage = document.querySelector("img.cover-image");
var mainTitle = document.querySelector("h2.cover-title");
var tagline = document.querySelector("h2.tagline");
var taglineDescriptor1 = document.querySelector("span.tagline-1");
var taglineDescriptor2 = document.querySelector("span.tagline-2");

var newRandomCoverButton = document.querySelector(".random-cover-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButtonHidden = document.querySelector(".home-button.hidden");
var homeButton = document.querySelector(".home-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");

var homeView = document.querySelector("section.view.home-view");
var homeViewHidden = document.querySelector("section.view.home-view.hidden");
var formViewHidden = document.querySelector("section.view.form-view.hidden");
var formView = document.querySelector("section.view.form-view");
var savedCoversViewHidden = document.querySelector("section.view.saved-view.hidden");
var savedCoversView = document.querySelector("section.view.saved-view");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage.src, mainTitle.innerText, taglineDescriptor1.innerText, taglineDescriptor2.innerText);

// Add your event listeners here 👇

newRandomCoverButton.addEventListener('click', generateRandomCover);

window.addEventListener('load', generateRandomCover);

makeYourOwnCoverButton.addEventListener('click', function(){
  showFormView();
  hideHomeView();
  hideSavedCoversView();
  showHomeButton();
  hideShowNewRandomCoverButton();
  hideSaveCoverButton();
});

viewSavedCoversButton.addEventListener('click', function(){
  showSavedCoversView();
  hideHomeView();
  hideFormView();
  hideShowNewRandomCoverButton();
  hideSaveCoverButton();
  showHomeButton();
});

homeButton.addEventListener('click', function(){
  showHomeView();
})
// Create your event handlers and other functions here 👇


// We've provided one function to get you started. This function pulls just the index number.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  mainTitle.innerText = titles[getRandomIndex(titles)];
  taglineDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  taglineDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];
}

function showFormView() {
  formViewHidden.className = "view form-view"
};

function hideFormView() {
  formView.className = "view form-view hidden"
};

function hideHomeView(){
  homeView.className = "view form-view hidden"
};

function showHomeView(){
  homeView.className = "view form-view"
};

function showSavedCoversView(){
  savedCoversViewHidden.className = "view saved-view"
};

function hideSavedCoversView(){
  savedCoversView.className = "view saved-view hidden"
};

function hideShowNewRandomCoverButton(){
  newRandomCoverButton.className = "random-cover-button hidden"
};

function hideSaveCoverButton(){
  saveCoverButton.className = "save-cover-button hidden"
};

function showHomeButton(){
  homeButtonHidden.className = "home-button"
};
