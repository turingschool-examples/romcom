// Create variables targetting the relevant DOM elements here 👇
var coverHtmlElement = document.querySelector('.cover-image');
var titleHtmlElement = document.querySelector('.cover-title');
var tagline1HtmlElement = document.querySelector('.tagline-1');
var tagline2HtmlElement = document.querySelector('.tagline-2');

var makeOwnCoverButtonHtmlElement = document.querySelector('.make-new-button');
var saveCoverButtonHtmlElement = document.querySelector('.save-cover-button');
var randomCoverButtonHtmlElement = document.querySelector('.random-cover-button');
var homeButtonHtmlElement = document.querySelector('.home-button');
var homeViewDisplayHtmlElement = document.querySelector('.home-view');
var formViewDisplayHtmlElement = document.querySelector('.form-view');
var viewSavedButonHtmlElement = document.querySelector('.view-saved-button');
var savedCoversDisplayHtmlElement = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = handleOnLoad;

makeOwnCoverButtonHtmlElement.addEventListener('click', displayMakeYourOwnCoverForm);

homeButtonHtmlElement.addEventListener('click', displayHomePage);

randomCoverButtonHtmlElement.addEventListener('click', handleOnShowNewRandomCoverClick);

viewSavedButonHtmlElement.addEventListener('click', displaySavedCovers);

// Create your event handlers and other functions here 👇
function handleOnLoad() {
  var newCover = generateRandomCover();
  displayNewCover(newCover);
}

function handleOnShowNewRandomCoverClick() {
  var newCover = generateRandomCover();
  displayNewCover(newCover);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function generateRandomCover() {
  var coverNumber = getRandomIndex(covers);
  var randomImage = covers[coverNumber];
  var titleNumber = getRandomIndex(titles);
  var randomTitle = titles[titleNumber];
  
  var descriptorNumberOne = getRandomIndex(descriptors);
  var descriptorNumberTwo;
  do {
    descriptorNumberTwo = getRandomIndex(descriptors)
  } while (descriptorNumberOne === descriptorNumberTwo);
  var randomDescriptorOne = descriptors[descriptorNumberOne];
  var randomDescriptorTwo = descriptors[descriptorNumberTwo];

  return new Cover(randomImage, randomTitle, randomDescriptorOne, randomDescriptorTwo);
}

function displayNewCover(newCover) {
  coverHtmlElement.setAttribute("src" , newCover.cover);
  titleHtmlElement.innerText = newCover.title;
  tagline1HtmlElement.innerText = newCover.tagline1;
  tagline2HtmlElement.innerText = newCover.tagline2;
}

function displayMakeYourOwnCoverForm() {
  saveCoverButtonHtmlElement.classList.add('hidden');
  randomCoverButtonHtmlElement.classList.add('hidden');
  homeButtonHtmlElement.classList.remove('hidden');
  formViewDisplayHtmlElement.classList.remove('hidden');
  homeViewDisplayHtmlElement.classList.add('hidden');
}

function displayHomePage() {
  saveCoverButtonHtmlElement.classList.remove('hidden');
  randomCoverButtonHtmlElement.classList.remove('hidden');
  homeButtonHtmlElement.classList.add('hidden');
  formViewDisplayHtmlElement.classList.add('hidden');
  homeViewDisplayHtmlElement.classList.remove('hidden');
}

function displaySavedCovers() {
  saveCoverButtonHtmlElement.classList.add('hidden');
  randomCoverButtonHtmlElement.classList.add('hidden');
  homeButtonHtmlElement.classList.remove('hidden');
  formViewDisplayHtmlElement.classList.add('hidden');
  homeViewDisplayHtmlElement.classList.add('hidden');
  savedCoversDisplayHtmlElement.classList.remove('hidden');
}