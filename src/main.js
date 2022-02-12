// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var makeBookButton = document.querySelector('.create-new-book-button');

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var firstDescriptorInput = document.querySelector('#descriptor1');
var secondDescriptorInput = document.querySelector('#descriptor2');

var newCovers = [];
var newTitles = [];
var newDescriptors = [];

var allCovers = [];
var allTitles = [];
var allDescriptors = [];

var savedRomComs = [];

// Add your event listeners here 👇

window.addEventListener('load', randomRomComReload);

randomCoverButton.addEventListener('click', randomRomComButton);

makeCoverButton.addEventListener('click', switchFormView);

homeButton.addEventListener('click', returnHome);

viewSavedButton.addEventListener('click', switchSavedView);

makeBookButton.addEventListener('click', submitNewRomCom);

saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function addAllRomComs() {
  allCovers = covers.concat(newCovers);
  allTitles = titles.concat(newTitles);
  allDescriptors = descriptors.concat(newDescriptors);
};

function switchFormView() {
  homeView.className = 'view home-view hidden';
  formView.className = 'view form-view';
  randomCoverButton.className = 'random-cover-button hidden';
  saveCoverButton.className = 'save-cover-button hidden';
  homeButton.className = 'home-button';
};

function switchSavedView() {
  homeView.className = 'view home-view hidden';
  savedView.className = 'view saved-view';
  formView.className = 'view form-view hidden';
  randomCoverButton.className = 'random-cover-button hidden';
  saveCoverButton.className = 'save-cover-button hidden';
  homeButton.className = 'home-button';
};

function returnHome() {
  homeView.className = 'view home-view';
  formView.className = 'view form-view hidden';
  randomCoverButton.className = 'random-cover-button';
  saveCoverButton.className = 'save-cover-button';
  homeButton.className = 'home-button hidden';
};

function submitNewRomCom(event) {
  event.preventDefault();
  var submittedRomCom = new Cover(coverInput.value, titleInput.value, firstDescriptorInput.value, secondDescriptorInput.value);
  newCovers.push(submittedRomCom.cover);
  newTitles.push(submittedRomCom.title);
  newDescriptors.push(submittedRomCom.tagline1, submittedRomCom.tagline2);
  addAllRomComs();
  returnHome();
  displayNewRomCom();
};

function displayNewRomCom() {
  coverImage.src = coverInput.value;
  coverTitle.innerText = titleInput.value;
  firstDescriptor.innerText = firstDescriptorInput.value;
  secondDescriptor.innerText = secondDescriptorInput.value;
};

function hasExistingCover() {
  if () {

  }

};

function saveCover() {
  var currentRomCom = new Cover(coverImage.src, coverTitle.innerText, firstDescriptor.innerText, secondDescriptor.innerText);
  delete currentRomCom.id;
  if (!savedRomComs.length) {
    currentRomCom.id = Date.now();
    return savedRomComs.push(currentRomCom);
  } else {

      }
    }
};

function randomRomComReload() {
  var newRomCom = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = newRomCom.cover;
  coverTitle.innerText = newRomCom.title;
  firstDescriptor.innerText = newRomCom.tagline1;
  secondDescriptor.innerText = newRomCom.tagline2;
};

function randomRomComButton() {
  addAllRomComs();
  var allRomCom = new Cover(allCovers[getRandomIndex(allCovers)], allTitles[getRandomIndex(allTitles)], allDescriptors[getRandomIndex(allDescriptors)], allDescriptors[getRandomIndex(allDescriptors)]);
  coverImage.src = allRomCom.cover;
  coverTitle.innerText = allRomCom.title;
  firstDescriptor.innerText = allRomCom.tagline1;
  secondDescriptor.innerText = allRomCom.tagline2;
};
