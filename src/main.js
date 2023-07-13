// Create variables targetting the relevant DOM elements here 👇

//ALL BUTTONS
var showNewBtn = document.querySelector(".random-cover-button");
var makeOwnCoverBtn = document.querySelector(".make-new-button");
var homeBtn = document.querySelector(".home-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var viewSavedBtn = document.querySelector(".view-saved-button");

//ALL PAGES
var homePage = document.querySelector(".home-view");
var makeOwnCoverPage = document.querySelector(".form-view");
var viewSavedCoversPage = document.querySelector(".saved-view");

// Main page random Cover
var mainCoverImg = document.querySelector(".cover-image");
var mainCoverTitle = document.querySelector(".cover-title");
var mainCoverTagline = document.querySelector(".tagline");
var mainCoverTagline1 = document.querySelector(".tagline-1");
var mainCoverTagline2 = document.querySelector(".tagline-2");

// We've provided a few variables below
var savedCovers = [
  createCover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener("DOMContentLoaded", () => {
  createRandom();
});

showNewBtn.addEventListener("click", function () {
  createRandom();
});

makeOwnCoverBtn.addEventListener("click", function () {
  clickedMakeOwnCover();
});

viewSavedBtn.addEventListener("click", function () {
  clickedViewSavedCorner();
});

homeBtn.addEventListener("click", function () {
  clickedHomeButton();
});

// Create your event handlers and other functions here 👇

// Functions for toggling between buttons

function showElementOrPage(element) {
  element.classList.remove("hidden");
}

function removeElementOrPage(element) {
  element.classList.add("hidden");
}

function checkPage(page) {
  if (page.classList.contains("hidden")) {
    page.classList.remove("hidden");
  }
}

var clickedMakeOwnCover = function () {
  checkPage(makeOwnCoverPage);
  removeElementOrPage(homePage);
  removeElementOrPage(showNewBtn);
  removeElementOrPage(viewSavedCoversPage);
  removeElementOrPage(saveCoverBtn);
  showElementOrPage(homeBtn);
};

var clickedViewSavedCorner = function () {
  checkPage(viewSavedCoversPage);
  removeElementOrPage(homePage);
  removeElementOrPage(showNewBtn);
  removeElementOrPage(makeOwnCoverPage);
  removeElementOrPage(saveCoverBtn);
  showElementOrPage(homeBtn);
};

var clickedHomeButton = function () {
  checkPage(homePage);
  removeElementOrPage(homeBtn);
  showElementOrPage(showNewBtn);
  showElementOrPage(saveCoverBtn);
};

// creating random funcctions
var createRandom = function () {
  var randIndexCovers = getRandomIndex(covers);
  var randIndexTitles = getRandomIndex(titles);
  var randIndexDescriptors1 = getRandomIndex(descriptors);
  var randIndexDescriptors2 = getRandomIndex(descriptors);
  var randCover = covers[randIndexCovers];
  var randTitle = titles[randIndexTitles];
  var randDesc1 = descriptors[randIndexDescriptors1];
  var randDesc2 = descriptors[randIndexDescriptors2];
  var newCover = createCover(randCover, randTitle, randDesc1, randDesc2);
  mainCoverTitle.innerText = newCover.title;
  mainCoverImg.src = randCover;
  mainCoverTagline1.innerText = randDesc1;
  mainCoverTagline2.innerText = randDesc2;
};

// creating a random number
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//creating a book object
function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2,
  };
  return cover;
}

// Original Code to be refactored:
// var clickedMakeOwnCover = function () {
//   if (makeOwnCoverPage.classList.contains("hidden")) {
//     makeOwnCoverPage.classList.remove("hidden");
//   }
//   homePage.classList.add("hidden");
//   homeBtn.classList.remove("hidden");
//   showNewBtn.classList.add("hidden");
//   saveCoverBtn.classList.add("hidden");
// };

// var clickedViewSavedCorner = function () {
//   if (viewSavedCoversPage.classList.contains("hidden")) {
//     viewSavedCoversPage.classList.remove("hidden");
//   }
//   homePage.classList.add("hidden");
//   homeBtn.classList.remove("hidden");
//   showNewBtn.classList.add("hidden");
//   saveCoverBtn.classList.add("hidden");
// };

// var clickedHomeButton = function () {
//   if (homePage.classList.contains("hidden")) {
//     homePage.classList.remove("hidden");
//   }
//   homeBtn.classList.add("hidden");
//   showNewBtn.classList.remove("hidden");
//   saveCoverBtn.classList.remove("hidden");
// };
