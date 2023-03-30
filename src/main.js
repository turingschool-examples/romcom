// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var coverImg = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var makeCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var coverForm = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var saveView = document.querySelector('.saved-view');
var viewPages = document.querySelectorAll('.view');

// We've provided a few variables below
var savedCovers = [
  createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover);
randomCoverButton.addEventListener('click', createRandomCover);
makeCoverButton.addEventListener('click', function() {
  togglePage(coverForm);
});
viewSavedButton.addEventListener('click', function() {
  togglePage(saveView);
});
homeButton.addEventListener('click', function() {
  togglePage(homeView);
});

// Create your event handlers and other functions here 👇
function createRandomCover() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverImg.src = covers[getRandomIndex(covers)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

function togglePage(page) {
  for(var i = 0; i < viewPages.length; i++) {
    viewPages[i].classList.add('hidden');
  }
  page.classList.remove('hidden');

  if (!homeView.classList.contains('hidden')) {
    homeButton.classList.add('hidden');
    randomCoverButton.classList.remove('hidden');
    saveCoverButton.classList.remove('hidden');
    viewSavedButton.classList.remove('hidden');
  }

  if (!saveView.classList.contains('hidden')) {
    saveCoverButton.classList.add('hidden');
    randomCoverButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
  }

  if (!coverForm.classList.contains('hidden')) {
    randomCoverButton.classList.add('hidden');
    viewSavedButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
  }
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
