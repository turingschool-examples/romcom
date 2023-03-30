// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeOwnCoverButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoverButton = document.querySelector(".view-saved-button")
var homeView = document.querySelector(".home-view");
var displayForm = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");

// We've provided a few variables below
var savedCovers = [
  createCover(covers[getRandomIndex(covers)],
  titles[getRandomIndex(titles)],
  descriptors[getRandomIndex(descriptors)],
  descriptors[getRandomIndex(descriptors)])
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", loadCover);
randomCoverButton.addEventListener("click", showRandom);
makeOwnCoverButton.addEventListener("click", makeOwnCover);
viewSavedCoverButton.addEventListener("click", displayCover);
homeButton.addEventListener("click", takeHome)

// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

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

function createCurrentCover() {
  currentCover = createCover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function loadCover() {
 createCover()
}

function showRandom() {
  createCurrentCover();
  console.log(currentCover);
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function makeOwnCover() {
  show(displayForm);
  hide(homeView);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(homeButton);
}

function displayCover() {
  hide(homeView);
  hide(randomCoverButton);
  show(homeButton);
  hide(saveCoverButton);
  show(savedView);
  hide(displayForm)
}

function takeHome(){
  hide(displayForm)
  show(homeView)
  hide(savedView)
  hide(homeButton)
  show(randomCoverButton)
  show(saveCoverButton)
}
