// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTag1 = document.querySelector('.tagline-1');
var coverTag2 = document.querySelector('.tagline-2');
var makeYourOwnPage = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');


// Button variables 👇
var randomCoverBtn = document.querySelector('.random-cover-button');
var makeYourBtn = document.querySelector('.make-new-button');
var homePageBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var savedViewBtn = document.querySelector('.view-saved-button');
var createBookBtn = document.querySelector('.create-new-book-button');



// We've provided a few variables below 👇
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click', function() {
  generateRandomCover()
  pushRandomCover()
});

document.addEventListener('DOMContentLoaded', function() {
  generateRandomCover()
  pushRandomCover()
});

makeYourBtn.addEventListener('click', switchToMakeYourOwn);
savedViewBtn.addEventListener('click', switchToSavedView);
homePageBtn.addEventListener('click', switchToHome);
createBookBtn.addEventListener('click', createUserBook);

// Create your event handlers and other functions here 👇

function generateRandomCover() {
  var randomImageIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var randomTag1Index = getRandomIndex(descriptors);
  var randomTag2Index = getRandomIndex(descriptors);
  currentCover = new Cover(covers[randomImageIndex], titles[randomTitleIndex], descriptors[randomTag1Index], descriptors[randomTag2Index]);
};

function pushRandomCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverTag1.innerText = currentCover.tagline1;
  coverTag2.innerText = currentCover.tagline2;
};

function switchToMakeYourOwn() {
  homeView.classList.add('hidden');
  makeYourOwnPage.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homePageBtn.classList.remove('hidden');
};

function switchToSavedView() {
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homePageBtn.classList.remove('hidden');
  makeYourOwnPage.classList.add('hidden');
};

function switchToHome() {
  homeView.classList.remove('hidden');
  homePageBtn.classList.add('hidden');
  randomCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
};

function createUserBook(event) {
  event.preventDefault()
  covers.push(userCover.value)
  titles.push(userTitle.value)
  descriptors.push(userDesc1.value)
  descriptors.push(userDesc2.value)
  // Use the values from the inputs to create a new instance of the Cover class
  // Change back to the main home view (hiding the form view again)
  // Display the newly created cover image, title, and descriptors in the main cover
  // currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
};

// We've provided one function to get you started 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}