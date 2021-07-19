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

var savedCoversSection = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [];

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
  console.log(currentCover);
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
  if (savedCovers.indexOf(currentCover) === -1) {
  savedCovers.push(currentCover);
  // for (var i = 0; i <= savedCovers.length; i++) {
  //   savedCoversSection.innerHTML = `
  //   <section class="main-cover">
  //   <img class="cover-image" src="${savedCovers[i].cover}">
  //   <h2 class="cover-title">${savedCovers[i].title}</h2>
  //   <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
  //   <img class="price-tag" src="./assets/price.png">
  //   <img class="overlay" src="./assets/overlay.png">
  //   </section>
  //   `
  //   }
  }
};

// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var currentCover = new Cover (
cover.src = covers[getRandomIndex(covers)],
title.innerText = titles[getRandomIndex(titles)],
tagline1.innerText = descriptors[getRandomIndex(descriptors)],
tagline2.innerText = descriptors[getRandomIndex(descriptors)]
)

function getRandomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)],
  )
}

function displayRandomCover() {
  getRandomCover();
  cover.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function displayFormView() {
    formPage.classList.remove('hidden');
    homePage.classList.add('hidden');
    saveCoverBttn.classList.add('hidden');
    randomCoverBttn.classList.add('hidden');
    homeBttn.classList.remove('hidden');
  };

function displaySavedCovers() {
  var savedHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedHTML += `<section class="main-cover">
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title"> ${savedCovers[i].title} </h2>
      <h3 class="tagline">A tale of <span class="tagline-1"> ${savedCovers[i].tagline1} </span> and <span class="tagline-2"> ${savedCovers[i].tagline2} </span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>`
  savedCoversSection.innerHTML = savedHTML;
  }
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
//[X]when we click the view saved cover button we should see ALL the saved covers.
// STEPS:
// Create a new fcn
// create addEventListener - to add currentCover to savedCovers
//
