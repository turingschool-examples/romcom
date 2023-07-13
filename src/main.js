// Create variables targetting the relevant DOM elements here 👇
const randomCoverButton = document.querySelector(".random-cover-button");
const makeCoverButton = document.querySelector(".make-new-button");
const saveCoverButton = document.querySelector(".save-cover-button");
const homeButton = document.querySelector(".home-button");
const homeView = document.querySelector(".view");
const formView = document.querySelector("view-form.view-hidden");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagline = document.querySelector(".tagline");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// We've provided a few variables below
var savedCovers = [
  createCover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover = coverImage;

// Add your event listeners here 👇
window.addEventListener("load", pageLoad);

randomCoverButton.addEventListener("click", showNewCover);

makeCoverButton.addEventListener("click", switchToForm);

// Create your event handlers and other functions here 👇

function pageLoad() {
  // console.log("Your work is showing up in the browser!");
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTag1 = descriptors[getRandomIndex(descriptors)];
  var randomTag2 = descriptors[getRandomIndex(descriptors)];
  currentCover.src = randomCover;
  coverTitle.innerHTML = randomTitle;
  tagline1.innerHTML = randomTag1;
  tagline2.innerHTML = randomTag2;
}

function showNewCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTag1 = descriptors[getRandomIndex(descriptors)];
  var randomTag2 = descriptors[getRandomIndex(descriptors)];

  currentCover.src = randomCover;
  coverTitle.innerHTML = randomTitle;
  tagline1.innerHTML = randomTag1;
  tagline2.innerHTML = randomTag2;
}

function switchToForm() {
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');


}

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
