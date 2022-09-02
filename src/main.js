// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button')
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇 (should go at the bottom)
window.addEventListener('load', newRandomCover)
randomButton.addEventListener('click', newRandomCover)
makeNewButton.addEventListener('click', makeYourOwn)
viewSavedButton.addEventListener('click', viewSavedCovers)
homeButton.addEventListener('click', goHome)
// Create your event handlers and other functions here 👇
function newRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
    coverImage.src = currentCover.cover;
    title.innerText = currentCover.title;
    descriptor1.innerText = currentCover.tagline1;
    descriptor2.innerText = currentCover.tagline2;
}
function makeYourOwn() {
  randomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
}
function viewSavedCovers() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}
function goHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
