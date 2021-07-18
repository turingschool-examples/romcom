// Create variables targeting the relevant DOM elements here 👇
// variables accessing book cover HTML elements
var coverOnLoad = document.querySelector('img');
var titleOnLoad = document.querySelector('h2');
var firstDescriptorOnLoad = document.querySelector('.tagline-1');
var secondDescriptorOnLoad = document.querySelector('.tagline-2');

// Button variables
var randomButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

function createCover() {
  var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverOnLoad.src = currentCover.cover;
  titleOnLoad.innerText = currentCover.title;
  firstDescriptorOnLoad.innerText = currentCover.tagline1;
  secondDescriptorOnLoad.innerText = currentCover.tagline2;
}

// Add your event listeners here 👇
document.addEventListener("DOMContentLoaded", createCover);

// var saveCoverButton = document.querySelector('.save-cover-button');
// saveCoverButton.addEventListener('click', saveCover);

var viewSavedCoversButton = document.querySelector('.view-saved-button');
viewSavedCoversButton.addEventListener('click', function() {
  changePage('saved-view', 'home-view');
  changeButton('home-button', 'random-cover-button', 'save-cover-button');
});

var makeNewCoverButton = document.querySelector('.make-new-button');
makeNewCoverButton.addEventListener('click', function() {
  changePage('form-view', 'home-view');
  changeButton('home-button', 'random-cover-button', 'save-cover-button');
});

// Create your event handlers and other functions here 👇
randomButton.addEventListener("click", createCover);

function changePage(newPage, currentPage) {
  var showPage = document.querySelector(`.${newPage}`);
  showPage.classList.add('view');
  showPage.classList.remove('hidden');

  var hidePage = document.querySelector(`.${currentPage}`);
  hidePage.classList.add('hidden');
  hidePage.classList.remove('view');
}

function changeButton(newButton, removeButton1, removeButton2) {
  var showButton = document.querySelector(`'.${newButton}`);
  showButton.classList.add('view');
  showButton.classList.remove('hidden');

  var hideButton1 = document.querySelector(`.${removeButton1}`);
  hideButton1.classList.add('hidden');
  hidebutton1.classList.remove('view');

  var hideButton2 = document.querySelector(`.${removeButton2}`);
  hideButton2.classList.add('hidden');
  hideButton2.classList.remove('view');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
