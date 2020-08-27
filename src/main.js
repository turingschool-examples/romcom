// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');
var coverImage = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var randomizeButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var randomCover = getRandomIndex(covers);

// Add your event listeners here 👇
window.addEventListener("load", createRandomCover);
randomizeButton.addEventListener("click", createRandomCover);
makeNewButton.addEventListener("click", showForm);
viewSavedButton.addEventListener("click", showSavedCovers);
homeButton.addEventListener("click", showHome);
createNewBookButton.addEventListener("click", createUserCover)

// Create your event handlers and other functions here 👇

function createRandomCover() {
  var randomCoverImage = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomTagline1 = getRandomIndex(descriptors);
  var randomTagline2 = getRandomIndex(descriptors);
  currentCover = new Cover(randomCoverImage, randomTitle, randomTagline1, randomTagline2);
  displayNewCover(currentCover);
}

function displayNewCover(cover) {
  coverTitle.innerText = cover.title;
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
  coverImage.src = cover.cover;
}

function showForm() {
  formView.classList.remove("hidden");
  hideHome();
  }

function showSavedCovers() {
  savedView.classList.remove("hidden");
  hideHome();
}

function showHome() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
  randomizeButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
}

function hideHome() {
  homeButton.classList.remove("hidden");
  homeView.classList.add("hidden");
  randomizeButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
}

function createUserCover() {
  event.preventDefault();
  var inputCoverImage = userCover.value;
  var inputTitle = userTitle.value;
  var inputTagline1 = userDesc1.value;
  var inputTagline2 = userDesc2.value;
  currentCover = new Cover(inputCoverImage, inputTitle, inputTagline1, inputTagline2);
  displayNewCover(currentCover);
  showHome();
}

// We've provided one function to get you started
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


//create new instance of cover class that takes in arguments of user inputs
//push user inputs into data.js arrays
//toggle views.
//show created poster.
