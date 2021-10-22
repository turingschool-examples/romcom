// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagline1 = document.querySelector(".tagline-1");
var coverTagline2 = document.querySelector(".tagline-2");
var mainPage = document.querySelector(".home-view");
var formPage = document.querySelector(".form-view");
var savedCoversPage = document.querySelector(".saved-view");

//buttons
var randomCoverButton = document.querySelector(".random-cover-button");
var makeCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", makeRandomCover);
randomCoverButton.addEventListener("click", makeRandomCover);
makeCoverButton.addEventListener("click", showForm);
homeButton.addEventListener("click", loadHome);
viewSavedCoversButton.addEventListener("click", showSavedCovers);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function makeRandomCover() {
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTaglineOne = descriptors[getRandomIndex(descriptors)];
  var randomTaglineTwo = descriptors[getRandomIndex(descriptors)];

  currentCover = new Cover(randomImage, randomTitle, randomTaglineOne, randomTaglineTwo);

  coverTitle.innerText = currentCover.title;
  coverImage.src = currentCover.cover;
  coverTagline1.innerText = currentCover.tagline1;
  coverTagline2.innerText = currentCover.tagline2;
}

function hideVariable(variable){
  variable.classList.add("hidden")

}

function showVariable(variable){
  variable.classList.remove("hidden")
}

function showForm(){
  hideVariable(randomCoverButton);
  hideVariable(saveCoverButton);
  hideVariable(mainPage);
  showVariable(homeButton);
  showVariable(formPage);
}

function loadHome() {
  showVariable(randomCoverButton);
  showVariable(saveCoverButton);
  showVariable(mainPage);
  hideVariable(homeButton);
  hideVariable(formPage);
}

function showSavedCovers() {
  hideVariable(mainPage);
  showVariable(savedCoversPage);
  hideVariable(randomCoverButton);
  hideVariable(saveCoverButton);
  showVariable(homeButton);
}
