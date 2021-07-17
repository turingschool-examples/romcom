// Create variables targetting the relevant DOM elements here 👇
var coverImageElement = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var mainCover = document.querySelector(".main-cover");
var randomCoverImage = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var makeBookButton = document.querySelector(".create-new-book-button");
var tgLine1 = document.querySelector(".tagLine");
var tgLine2 = document.querySelector(".tagLine-1");
var tgLine3 = document.querySelector(".tagLine-2");
var usrDesc = document.querySelector(".user-desc1");
var usrDesc2 = document.querySelector(".user-desc2");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var form = document.querySelector("form");
var savedCoversSection = document.querySelector(".saved-covers-section");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇

window.addEventListener("load", createCover);
randomCoverImage.addEventListener("click", createCover);
homeButton.addEventListener("click", flipHomeView);
makeNewButton.addEventListener("click", flipFormView);
saveCoverButton.addEventListener("click", pushSavedCover);
makeBookButton.addEventListener("click", createUsrCover);
viewSavedButton.addEventListener("click", toggleSaveView);
savedCoversSection.addEventListener("dblclick", deleteMiniCover);

// Create your event handlers and other functions here 👇

//optional extension: remove unnecessary functionality of formView button while on form page
// optional extension: stop input value from causing duplicates in arrays
// optional extension: make saved covers smaller

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover() {
  var tgLine2 = descriptors[getRandomIndex(descriptors)];
  var tgLine3 = descriptors[getRandomIndex(descriptors)];
  var title = titles[getRandomIndex(titles)];
  var coverImgSrc = covers[getRandomIndex(covers)];
  currentCover = new Cover(coverImgSrc, title, tgLine2, tgLine3);
  displayCover(currentCover);
}

function toggleSaveView() {
  savedView.classList.remove("hidden");
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  homeButton.classList.remove("hidden");
  randomCoverImage.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  showSavedCoverArray();
}

function displayCover(cover) {
  coverImageElement.setAttribute("src", cover.cover);
  title.innerText = cover.title;
  tgLine2.innerText = cover.tgLine2;
  tgLine3.innerText = cover.tgLine3;
};
