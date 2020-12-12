
// variables
var mainPage = document.querySelector('.main-cover');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var coverForm = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDescriptor1 = document.querySelector('#descriptor1');
var userDescriptor2 = document.querySelector('#descriptor2');
var createNewBookButton = document.querySelector('.create-new-book-button');
var form = document.querySelector('form');


//event listeners
window.onload = getRandomCover();
randomCoverButton.addEventListener('click', getRandomCover);
makeOwnCoverButton.addEventListener('click', showMakeOwnCover);
homeButton.addEventListener('click', goHome);
viewSavedCoversButton.addEventListener('click', viewSavedCovers);
createNewBookButton.addEventListener('click', saveMakeOwnCover);

var savedCovers = [];
var currentCover;


//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];;;
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
  //this is assigning the data model to 'a new cover' below


mainPage.innerHTML = `
  <section class="main-cover">
    <img class="cover-image" src="${currentCover.cover}">
    <h2 class="cover-title">${currentCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
    <img class="price-tag" src="">
    <img class="overlay" src="./assets/overlay.png">
  </section>
  `
};

function saveMakeOwnCover() {
  event.preventDefault()

  currentCover = new Cover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value)

  mainPage.innerHTML = `
    <section class="main-cover">
      <img class="cover-image" src="${currentCover.cover}">
      <h2 class="cover-title">${currentCover.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
      <img class="price-tag" src="">
      <img class="overlay" src="./assets/overlay.png">
    </section>
    `
    form.classList.add('hidden');
    mainPage.classList.remove('hidden');

};

function showMakeOwnCover() {
  mainPage.classList.add('hidden');
  coverForm.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

function goHome() {
  mainPage.classList.remove('hidden');
  coverForm.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
};

function viewSavedCovers() {
  mainPage.classList.add('hidden');
  coverForm.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedCoversButton.classList.remove('hidden');
}
