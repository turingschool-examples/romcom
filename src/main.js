// VARIABLES  __________________________________

// Global Variables
var currentCover;

var savedCovers = [];

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

saveCoverButton.addEventListener('click', saveCover);

// savedCoverDisplay.addEventListener('mouseover', function(event) {
//   event.target.
// })

// target the HTML elements in the saved covers
// var deleteCover = document.querySelector('________');


savedCoverDisplay.addEventListener('dblclick', function(){
if (event.target.matches('.mini-cover')){
  var e = event.target.id
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === e) {
      splice(savedCovers[i], 1);

    }
  }
}
loadSavedCovers()
});

// var e = event.target.id
// for (var i = 0; i < savedCovers.length; i++) {
//   if (savedCovers[i].id === e) {
//     splice(savedCovers[i], 1);
//   }
//
// }
//
//   loadSavedCovers()
// });

// pull in savedCovers array
// remove index position of object from array using splice
// reload saved cover page

makeMyBookButton.addEventListener('click', function(){
  saveToArray();
  myCover();
  event.preventDefault();
  homeButtonView();
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
  var currentCoverDisplay = [];
  for (var i = 0; i < savedCovers.length; i++) {
    currentCoverDisplay += `<section class="mini-cover" id="${savedCovers[i].id}">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`
  }
  savedCoverDisplay.innerHTML = currentCoverDisplay;
};

function saveCover() {
      if (savedCovers.includes(currentCover)) {
        splice(savedCovers[i], 1);
      }
    savedCovers.unshift(currentCover);
};

function saveToArray() {
  titles.unshift(userTitle.value);
  descriptors.unshift(userDesc1.value);
  descriptors.unshift(userDesc2.value);
  covers.unshift(userCover.value);
};
