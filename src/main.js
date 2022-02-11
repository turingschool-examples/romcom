// VARIABLES  __________________________________

// Global Variables
var currentCover;

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

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

makeOwnCoverButton.addEventListener('click', function(){
  document.querySelector('.form-view').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
});

viewSavedCoverButton.addEventListener('click', function(){
  document.querySelector('.saved-view').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
});

homeButton.addEventListener('click', function(){
  homeButtonSwitch()
});

makeMyBookButton.addEventListener('click', function(){
  // save submitted data to the respective arrays
  saveToArray();
  // input values creates new instance of cover class
  myCover();
  // Change back to main home view
  event.preventDefault();
  // Display the newly created cover
  homeButtonSwitch();
});

saveCoverButton.addEventListener('click', function(){});

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

function homeButtonSwitch() {
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

function saveToArray() {
  titles.unshift(userTitle.value);
  descriptors.unshift(userDesc1.value);
  descriptors.unshift(userDesc2.value);
  covers.unshift(userCover.value);
};
