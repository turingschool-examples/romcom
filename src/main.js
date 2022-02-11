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


// We've provided a few variables below
var savedRomCom = [];
var currentRomCom = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

// Add your event listeners here 👇

window.addEventListener('load', randomRomCom);

makeCoverButton.addEventListener('click', switchFormView);

homeButton.addEventListener('click', returnHome);

viewSavedButton.addEventListener('click', switchSavedView);

makeBookButton.addEventListener('click', submitNewBook)
//https://media.istockphoto.com/photos/book-cover-for-a-vampire-novel-three-attractive-vampires-picture-id685834128?k=20&m=685834128&s=612x612&w=0&h=zmBYDVHfG7l2FpCy5PH5J25lLTFuPCQSHqe-LW5yZlk=
// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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

function submitNewBook() {
  covers.shift(currentRomCom.cover);
  titles.shift(currentRomCom.title);
  descriptors.shift(currentRomCom.tagline1);
  descriptors.shift(currentRomCom.tagline2);
};

function randomRomCom() {
coverImage.src = currentRomCom.cover;
coverTitle.innerText = currentRomCom.title;
firstDescriptor.innerText = currentRomCom.tagline1;
secondDescriptor.innerText = currentRomCom.tagline2;
};
