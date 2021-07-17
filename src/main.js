// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var title = document.querySelector('.cover-title');
var randomCoverBttn = document.querySelector('.random-cover-button');
var makeCoverBttn = document.querySelector('.make-new-button');
var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var saveCoverBttn = document.querySelector('.save-cover-button');
var homeBttn = document.querySelector('.home-button');
var viewSavedCoversBttn = document.querySelector('.view-saved-button');
var savedCoversPage = document.querySelector('.saved-view');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;



// Add your event listeners here 👇

randomCoverBttn.addEventListener('click', displayRandomCover);
makeCoverBttn.addEventListener('click', displayFormView);
viewSavedCoversBttn.addEventListener('click', displaySavedCovers);
homeBttn.addEventListener('click', displayHomeView);

// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

cover.src = covers[getRandomIndex(covers)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];
title.innerText = titles[getRandomIndex(titles)];

function getRandomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)],
    titles[getRandomIndex(titles)],
  )
}

function displayRandomCover() {
  getRandomCover();
  cover.src = currentCover.cover;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  title.innerText = currentCover.title;
}

function displayFormView() {
  if (homePage.classList !== 'hidden') {
    formPage.classList.remove('hidden');
    homePage.classList.add('hidden');
    saveCoverBttn.classList.add('hidden');
    randomCoverBttn.classList.add('hidden');
    homeBttn.classList.remove('hidden');
  } else {
    savedCoversPage.classList.add('hidden');
    formPage.classList.remove('hidden');
  }
};

function displaySavedCovers() {
  savedCoversPage.classList.remove('hidden');
  homePage.classList.add('hidden');
  saveCoverBttn.classList.add('hidden');
  randomCoverBttn.classList.add('hidden');
  homeBttn.classList.remove('hidden');
};

function displayHomeView() {
  if (formPage.classList !== 'hidden') {
    formPage.classList.add('hidden');
    homePage.classList.remove('hidden');
    savedCoversPage.classList.add('hidden');
    saveCoverBttn.classList.remove('hidden');
    randomCoverBttn.classList.remove('hidden');
    homeBttn.classList.add('hidden');

  } else {
    savedCoversPage.classList.add('hidden');
    homePage.classList.remove('hidden');
    saveCoverBttn.classList.remove('hidden');
    randomCoverBttn.classList.remove('hidden');
    homeBttn.classList.add('hidden');
  }
}


// Iteration 2
// To be able to switch the views when the appropriate buttons are clicked.
// and HIDE certain buttons.

// query selectors for buttons, event listeners for buttons, something to
// hide the home page and the buttons and make the form appear

// We need check if the home page and show cover and save cover buttons are still visible
// On the home page we should see all buttons except home bttn

// Steps:
// Form view-
// [X]Create a fcn that will handle event.
// [X]This fcn will hide home page and show the form.
// [X]It will hide the "show new random cover" and "save cover" bttns.
// [X]but we will now see the home page bttn.
// Saved covers view:
// []Create a fcn that will display saved cover views and hide homepage view.
// []Hide "show new random cover" and "save cover" bttns.
// []"Home" bttn should be visible.
// NEED:
// []function
// []view saved covers button querySelector
// []addEventListener for bttn "saved covers", "home"
