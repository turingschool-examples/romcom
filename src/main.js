// Create variables targetting the relevant DOM elements here 👇
// These target the book cover
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var firstTagline = document.querySelector(".tagline-1");
var secondTagline = document.querySelector(".tagline-2");


// The buttons!
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var makeMyBookButton = document.querySelector('.create-new-book-button');

//Target the home page display
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');


// Different page views
var homePage = document.querySelector('.home-view');
var savedPage = document.querySelector('.saved-view');
var makeNewCoverPage = document.querySelector('.form-view');
var savedCollection = document.querySelector('.saved-covers-section');

// Main page
var coverImg = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


var currentCover = new Cover()


// Add your event listeners here 👇

window.addEventListener('load', randomizeCover);

randomCoverButton.addEventListener('click', randomizeCover);
makeOwnCoverButton.addEventListener('click', renderNewCoverPage);
homeButton.addEventListener('click', renderHomePage);
viewSavedButton.addEventListener('click', renderSavedCoversPage);
makeMyBookButton.addEventListener('click', createCover);



// Create your event handlers and other functions here 👇

//Create cover functions
function createCover(event) {
  event.preventDefault();
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  renderHomePage();
  pushValues();
  return currentCover;
}

function pushValues() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value, userDesc2.value);
  title.innerText = userTitle.value;
  descriptor1.innerText = userDesc1.value;
  descriptor2.innerText = userDesc2.value;
  coverImg.setAttribute('src', userCover.value);
}

// Random cover functions
function randomizeCover() {
  changeCoverImage();
  changeTitle();
  changeFirstDescriptor();
  changeSecondDescriptor();

}

function changeCoverImage() {
  var index = getRandomIndex(covers);
  coverImage.src = covers[index];
  currentCover.cover = covers[index];
}

function changeTitle() {
  var index = getRandomIndex(titles);
  coverTitle.innerHTML = titles[index];
  currentCover.title = titles[index];
}

function changeFirstDescriptor() {
  var index = getRandomIndex(descriptors);
  firstTagline.innerHTML = descriptors[index];
  currentCover.tagline1 = descriptors[index];
}

function changeSecondDescriptor() {
  var index = getRandomIndex(descriptors);
  secondTagline.innerHTML = descriptors[index];
  currentCover.tagline2 = descriptors[index];
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


// Page View Functions

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function renderNewCoverPage() {
  showElement(makeNewCoverPage);
  showElement(homeButton);
  hideElement(homePage);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
}

function renderHomePage() {
  showElement(homePage);
  showElement(randomCoverButton);
  showElement(saveCoverButton);
  hideElement(makeNewCoverPage);
  hideElement(homeButton);
}

function renderSavedCoversPage() {
  showElement(savedPage);
  showElement(homeButton);
  showElement(savedCollection);
  hideElement(homePage);
  hideElement(makeNewCoverPage);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
}
