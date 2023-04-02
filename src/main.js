// romcom

// Variables
var savedCovers = [];
var currentCover;
  // Cover
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var coverImage = document.querySelector('.cover-image');
  // Buttons
var randomButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var createBookButton = document.querySelector('.create-new-book-button');
  // Views
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');
  // User Inputs
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var tagline1Input = document.querySelector('.user-desc1');
var tagline2Input = document.querySelector('.user-desc2');


// Event Listeners
randomButton.addEventListener('click', newRandomBook)
window.addEventListener('DOMContentLoaded', newRandomBook)
makeCoverButton.addEventListener('click', makeCustomCoverForms)
viewSavedButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click', homePage);
createBookButton.addEventListener('click', function(event) {
  event.preventDefault();
  makeCover();
  pushCustomCover();
});
saveCoverButton.addEventListener('click', saveCover);
savedCoversSection.addEventListener("dblclick", function(e) {
  var miniCoverId = e.target.parentNode.id;
  var clickedBook = document.getElementById(`${miniCoverId}`);
  clickedBook.classList.add('hidden');
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == miniCoverId) {
      savedCovers.splice(i, 1);
    }
  }
  return savedCovers;
});

// Functions
function newRandomBook() {
  currentCover = createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  coverImage.src = currentCover.coverImg;
};

function makeCustomCoverForms() {
  homeButton.classList.remove('hidden')
  homeView.classList.add('hidden')
  formView.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  savedView.classList.add('hidden');
};

function showSavedCovers() {
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
};

function homePage() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  makeCoverButton.classList.remove('hidden');
  randomButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
};

function makeCover() {
  currentCover = createCover(coverInput.value, titleInput.value, tagline1Input.value, tagline2Input.value);
  currentCover = createCover(coverInput.value, titleInput.value, tagline1Input.value, tagline2Input.value);
  coverTitle.innerText = titleInput.value;
  tagline1.innerText = tagline1Input.value;
  tagline2.innerText = tagline2Input.value;
  coverImage.src = coverInput.value;
  homePage();
};

function pushCustomCover() {
  titles.push(`${titleInput.value}`);
  covers.push(`${coverInput.value}`);
  descriptors.push(`${tagline1Input.value}`);
  descriptors.push(`${tagline2Input.value}`);
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover;
};

function saveCover() {
  for (var i = -1; i < savedCovers.length; i++){
    if(currentCover === savedCovers[i]){
      return null
    } 
  } 
  savedCovers.unshift(currentCover);
  savedCoversSection.innerHTML +=
  `<section class="mini-cover" id=${savedCovers[0].id}>
    <img class="cover-image" src=${savedCovers[0].coverImg}>
    <h2 class="cover-title">${savedCovers[0].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[0].tagline1}</span> and <span class="tagline-2">${savedCovers[0].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">`
};