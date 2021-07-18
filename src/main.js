// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var viewSavedCoversBttn = document.querySelector('.view-saved-button');
var randomCoverBttn = document.querySelector('.random-cover-button');
var makeCoverBttn = document.querySelector('.make-new-button');
var saveCoverBttn = document.querySelector('.save-cover-button');
var homeBttn = document.querySelector('.home-button');
var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var savedCoversPage = document.querySelector('.saved-view');

var createBookBttn = document.querySelector('.create-new-book-button');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');

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
createBookBttn.addEventListener('click', createNewBook);
saveCoverBttn.addEventListener('click', function() {
  saveCurrentCover(currentCover);
});

function createNewBook() {
  event.preventDefault();
  var cover = userCover.value;
  var title = userTitle.value;
  var descriptor1 = userDesc1.value;
  var descriptor2 = userDesc2.value;
  updateCurrentCover(cover, title, descriptor1, descriptor2);
  saveNewBook(cover, title, descriptor1, descriptor2);
  displayCreatedCover();
}

function saveNewBook(cover, title, descriptor1, descriptor2) {
  covers.push(cover);
  titles.push(title);
  descriptors.push(descriptor1);
  descriptors.push(descriptor2);
}

function updateCurrentCover(cover, title, descriptor1, descriptor2) {
  currentCover = new Cover(
    cover,
    title,
    descriptor1,
    descriptor2,
  )
}

function displayCreatedCover() {
  formPage.classList.add('hidden');
  homePage.classList.remove('hidden');
  savedCoversPage.classList.add('hidden');
  saveCoverBttn.classList.remove('hidden');
  randomCoverBttn.classList.remove('hidden');
  homeBttn.classList.add('hidden');
  cover.src = currentCover.cover;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  title.innerText = currentCover.title;
}

function saveCurrentCover(currentCover) {
  savedCovers.push(currentCover);
};

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
    formPage.classList.remove('hidden');
    homePage.classList.add('hidden');
    saveCoverBttn.classList.add('hidden');
    randomCoverBttn.classList.add('hidden');
    homeBttn.classList.remove('hidden');
  };

function displaySavedCovers() {
    savedCoversPage.classList.remove('hidden');
    homePage.classList.add('hidden');
    saveCoverBttn.classList.add('hidden');
    randomCoverBttn.classList.add('hidden');
    homeBttn.classList.remove('hidden');
    formPage.classList.add('hidden');
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


//Iteratoin 4
//GOAL:
//Get the save cover button to add the current cover to the savedCovers array
//When we click the view saved covers button we should see the saved covers
//  section WITH the savedCovers array

//DATA NEEDED:
// input: currentCover,
// output: savedCovers

//CONDITIONS:
//save button hit multiple times will not save duplicates in savedCoversPage
//when we click the view saved cover button we should see ALL the saved covers.
// STEPS:
// Create a new fcn
// create addEventListener - to add currentCover to savedCovers
//
