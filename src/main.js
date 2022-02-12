// VARIABLES  __________________________________

// Global Variables
var currentCover;

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// var savedCovers = ['pizza', 'candy', 'cheeseburger'];

var savedCoverDisplay = document.querySelector('.saved-covers-section')

// Cover section
var title = document.querySelector('h2');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');

// Buttons
var makeRandomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoverButton = document.querySelector('.view-saved-button');
var homeButton = document.querySelector('.home-button');
var makeMyBookButton = document.querySelector('.create-new-book-button');

// Input Fields
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');


// EVENT LISTENERS __________________________________

window.addEventListener('load', newCover);

makeRandomCoverButton.addEventListener('click', newCover);

makeOwnCoverButton.addEventListener('click', makeOwnCoverView);

viewSavedCoverButton.addEventListener('click', savedCoverView);

homeButton.addEventListener('click', homeButtonView);

makeMyBookButton.addEventListener('click', function(){
  saveToArray();
  myCover();
  event.preventDefault();
  homeButtonView();
});

// no duplicates, it will only save the cover once
saveCoverButton.addEventListener('click', function(){
  savedCovers.unshift(currentCover)
  for (var i = 0; i < savedCovers.length; i++) {
  if (currentCover === savedCovers[i]) {
    splice(savedCovers[i], 1)
  }
}

  // current cover is added to the savedCovers arrays
  // saved covers should display in the saved covers section
});

// FUNCTIONS __________________________________

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function newCover() {
  title.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  image.src = covers[getRandomIndex(covers)];
  currentCover = new Cover(image.src, title.innerText, tagline1.innerText, tagline2.innerText);
};

function makeOwnCoverView() {
  document.querySelector('.form-view').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
};

function savedCoverView(){
  document.querySelector('.saved-view').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
  loadSavedCovers()
};

function homeButtonView() {
  document.querySelector('.home-view').classList.remove('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.remove('hidden');
  document.querySelector('.save-cover-button').classList.remove('hidden');
  document.querySelector('.home-button').classList.add('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
};

function myCover() {
  title.innerText = userTitle.value;
  tagline1.innerText = userDesc1.value;
  tagline2.innerText = userDesc2.value;
  image.src = userCover.value;
  currentCover = new Cover(image.src, title.innerText, tagline1.innerText, tagline2.innerText);
};

function loadSavedCovers() {
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoverDisplay.innerHTML += `<img class="mini-cover" src="${savedCovers[i].cover}">`;
    savedCoverDisplay.innerHTML += `<h2 class="">${savedCovers[i].title}</h2>`;
    savedCoverDisplay.innerHTML += `<h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>`;
    // savedCoverDisplay.innerHTML += `<img class="price-tag" src="./assets/price.png">`
    // savedCoverDisplay.innerHTML += `<img class="overlay" src="./assets/overlay.png">`
  }
};

function saveToArray() {
  titles.unshift(userTitle.value);
  descriptors.unshift(userDesc1.value);
  descriptors.unshift(userDesc2.value);
  covers.unshift(userCover.value);
};
