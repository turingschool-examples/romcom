// Create variables targetting the relevant DOM elements here 👇
var randomCover = document.querySelector(".cover-image");
var randomTitle = document.querySelector(".cover-title");
var randomTag = document.querySelector(".tagline");
var randomTag = document.querySelector(".tagline-1");
var randomTag = document.querySelector(".tagline-2");
var randomButton = document.querySelector(".random-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var formView = document.querySelector(".form-view");
var mainCover = document.querySelector(".home-view");
var homeButton = document.querySelector(".home-button");
var viewSavedCovers = document.querySelector(".saved-view");
var savedCoversButton = document.querySelector(".view-saved-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomButton.addEventListener('click', randomCovers);
makeNewCoverButton.addEventListener('click', showForm);
makeNewCoverButton.addEventListener('click', hideForm);
savedCoversButton.addEventListener('click', hideSavedCovers);
savedCoversButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click', showHomePage);
homeButton.addEventListener('click', hideHomePage);

// Create your event handlers and other functions here 👇

function reveal(reveal) {
  reveal.classList.remove('hidden');

};

function conceal(conceal) {
  conceal.classList.add('hidden');

};

function showForm() {
  reveal(formView)
  reveal(homeButton)
};

function hideForm() {
  conceal(mainCover);
  conceal(randomButton);
  conceal(saveCoverButton);
};

function hideSavedCovers() {
  conceal(mainCover);
  conceal(randomButton);
  conceal(saveCoverButton);
  conceal(formView);
};

function showSavedCovers() {
  reveal(savedCoversButton);
  reveal(viewSavedCovers);
  reveal(homeButton);
};

function showHomePage() {
  reveal(mainCover);
  reveal(randomButton);
  reveal(saveCoverButton);
  reveal(savedCoversButton);
  reveal(makeNewCoverButton);
};

function hideHomePage() {
  conceal(homeButton);
};

function randomCovers() {
  randomCover.src = covers[getRandomIndex(covers)]
  randomTag.innerText = descriptors[getRandomIndex(descriptors)]
  randomTitle.innerText = titles[getRandomIndex(titles)]
  currentCover = new Cover(
    randomCover.src,
    randomTag.innerText,
    randomTitle.innerText,
  )
};

// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};