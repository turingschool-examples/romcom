// Create variables targetting the relevant DOM elements here 👇
// cover title and tagline variables
var loadCover = document.querySelector('.cover-image');
var loadTitle = document.querySelector('.cover-title');
var tag1 = document.querySelector('.tagline-1');
var tag2 = document.querySelector('.tagline-2');
//btn variables
var randomCoverBtn = document.querySelector('.random-cover-button');
var makeNewCoverBtn = document.querySelector('.make-new-button');
var viewHomeBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
//page variables
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
//form variables
var inputCover = document.getElementById('cover');
var inputTitle = document.getElementById('title');
var inputDesc1 = document.getElementById('descriptor1');
var inputDesc2 = document.getElementById('descriptor2');
var makeBookBtn = document.querySelector('.create-new-book-button');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = function randomOnloadCvr() {
  showNewRandomCvr();
};

randomCoverBtn.addEventListener('click', showNewRandomCvr);
makeNewCoverBtn.addEventListener('click' , goToFormView);
viewHomeBtn.addEventListener('click', goToHomeView);
makeBookBtn.addEventListener('click', makeOwnForm);
viewSavedBtn.addEventListener('click', goToSavedView);






// Create your event handlers and other functions here 👇
function showNewRandomCvr() {
  loadCover.src = `${covers[getRandomIndex(covers)]}`;
  loadTitle.innerText = `${titles[getRandomIndex(titles)]}`;
  tag1.innerText = `${descriptors[getRandomIndex(descriptors)]}`;
  tag2.innerText = `${descriptors[getRandomIndex(descriptors)]}`;
}
//functions for button page displays
function goToFormView() {
  viewHomeBtn.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
}

function goToSavedView() {
  viewHomeBtn.classList.remove('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
}

function goToHomeView() {
  viewHomeBtn.classList.add('hidden');
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
}
//functions for user created data makeBookBtn eventlistener
function makeOwnForm(){
  event.preventDefault();
  userCreatedBook();
  viewUserCreatedBook();
  goToHomeView();
  document.querySelector('form').reset();
}

function userCreatedBook(event) {
  var userCover = new Cover(inputCover.value, inputTitle.value, inputDesc1.value, inputDesc2.value);
  if(!covers.includes(inputCover.value)){
    covers.push(inputCover.value);
  }
  if(!titles.includes(inputTitle.value)){
    titles.push(inputTitle.value);
  }
  if(!descriptors.includes(inputDesc1.value || inputDesc2.value)){
    descriptors.push(inputDesc1.value, inputDesc2.value);
  }
}

function viewUserCreatedBook() {
  loadCover.src = `${inputCover.value}`;
  loadTitle.innerText = `${inputTitle.value}`;
  tag1.innerText = `${inputDesc1.value}`;
  tag2.innerText = `${inputDesc2.value}`;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
