// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var createNewBookButton = document.querySelector('.create-new-book-button')
var viewSavedButton = document.querySelector('.view-saved-button');
// var deleteSavedCover = document.querySelector('.delete-saved-cover');

var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var viewSavedView = document.querySelector('.saved-view');


var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputFirstDescriptor = document.querySelector('.user-desc1');
var inputSecondDescriptor = document.querySelector('.user-desc2');
// var saveCoverView = document.querySelector('.saved-view');

var savedCoversSection = document.querySelector('.saved-covers-section');


var currentCover;
var savedCovers = [];

// Add your event listeners here 👇
//google add event listener on page load
//Event listener should be 1-3 lines, only if you have an anonymous function...no logic...only FIRE/INVOKE functions

window.addEventListener('load', makeRandomCover);

randomCoverButton.addEventListener('click', makeRandomCover);

createNewBookButton.addEventListener('click', function() {
  event.preventDefault();
  if (inputCover.value && inputTitle.value && inputFirstDescriptor.value && inputSecondDescriptor.value) {    
    createNewBook();
    showNewBookHome();
  }
});


makeCoverButton.addEventListener('click', changeFormView);

homeButton.addEventListener('click', changeHomeView);

viewSavedButton.addEventListener('click', changeViewSavedView);

saveCoverButton.addEventListener('click', saveCurrentCover);

savedCoversSection.addEventListener('dblclick', deleteSavedCover);

// Create your event handlers and other functions here 👇
function changeFormView() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}


function changeViewSavedView() {
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');

  viewSavedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
}

function changeHomeView() {
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  viewSavedView.classList.add('hidden');
}


function makeRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function createNewBook() {
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputFirstDescriptor.value);
  descriptors.push(inputSecondDescriptor.value);
  console.log(inputSecondDescriptor.value);
}

function showNewBookHome() {
  currentCover = new Cover(inputCover.value, inputTitle.value, inputFirstDescriptor.value, inputSecondDescriptor.value);
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
  changeHomeView();
}

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    showSavedCovers();
  }
}

function showSavedCovers() {
    savedCoversSection.innerHTML += `
      <div class="mini-cover">
        <img class="mini-cover" src="${currentCover.cover}">
        <h1 class="cover-title">${currentCover.title}</h1>
        <h2 class="tagline">A tale of ${currentCover.tagline1} and ${currentCover.tagline2}</h2>
      </div>
    `
  }

function deleteSavedCover() {
  if (event.target.className === 'mini-cover') {
    var div = event.target.parentElement;
    savedCoversSection.removeChild(div);
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
