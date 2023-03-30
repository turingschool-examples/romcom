// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var coverImg = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var makeCoverButton = document.querySelector('.make-new-button');
var showNewRandomCover = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var coverForm = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');

// We've provided a few variables below
var savedCovers = [
  createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover);
randomCoverButton.addEventListener('click', createRandomCover);
makeCoverButton.addEventListener('click', showForm);

// Create your event handlers and other functions here 👇
function createRandomCover() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverImg.src = covers[getRandomIndex(covers)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

function showForm() {
  homeView.classList.add('hidden');
  coverForm.classList.remove('hidden');
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
    tagline2: descriptor2
  };
  return cover;
}
