// Create variables targetting the relevant DOM elements here 👇

//The variables for iteration 0
var randomCoverButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var imageCover = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var makeNewButton = document.querySelector('.make-new-button');

//The variables for iteration 1
var homeButton = document.querySelector('.home-button');
var form = document.querySelector('.form-view');
var homeSection = document.querySelector('.home-view');
var saveButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button')
var savedCoversSection = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
imageCover.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', getRandomCover);
makeNewButton.addEventListener('click', switchToMakeYourOwnCover);
viewSavedCoversButton.addEventListener('click', switchToSavedCovers);
homeButton.addEventListener('click', returnToHome);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  imageCover.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(imageCover, coverTitle, tagline1, tagline2);
}

function switchToMakeYourOwnCover() {
  form.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeSection.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
}

function switchToSavedCovers() {
  savedCoversSection.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeSection.classList.add('hidden');
  randomCoverButton.classList.add('hidden'); 
  saveButton.classList.add('hidden'); 
}

function returnToHome() {
  homeSection.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden'); 
  saveButton.classList.remove('hidden'); 
  homeButton.classList.add('hidden');
}
