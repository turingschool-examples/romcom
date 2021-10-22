// Create variables targetting the relevant DOM elements here :point_down:
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
var randomButton =  document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homePage = document.querySelector('.home-view');
var coverForm = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedView = document.querySelector('.saved-view');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here :point_down:
window.addEventListener('load', generateBook);
randomButton.addEventListener('click', generateBook);
makeNewButton.addEventListener('click', showForm);
viewSavedButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click',returnToMain);

// Create your event handlers and other functions here :point_down:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateBook() {
   currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
   coverImage.src = currentCover.cover;
   coverTitle.innerText = currentCover.title;
   tagLine1.innerText = currentCover.tagline1;
   tagLine2.innerText = currentCover.tagline2;
}

function showForm() {
  homePage.classList.add('hidden');
  coverForm.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function showSavedCovers() {
  homePage.classList.add('hidden');
  savedView.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function returnToMain() {
  homePage.classList.remove('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  coverForm.classList.add('hidden');
}
