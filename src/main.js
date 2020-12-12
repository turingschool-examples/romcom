// Create variables targetting the relevant DOM elements here 👇
// var randomImage = covers[getRandomIndex(covers)];
// // image.src = randomImage;
//
// var randomImage = covers[getRandomIndex(covers)];
//
// var randomTitle = titles[getRandomIndex(titles)];
//
// var descriptor1 = descriptors[getRandomIndex(descriptors)];
//
// var descriptor2 = descriptors[getRandomIndex(descriptors)];

var image = document.querySelector('img')

var title = document.querySelector('h2');
// title.innerText = randomTitle;

var tagline1 = document.querySelector('.tagline-1');
// tagline1.innerText = descriptor1;

var tagline2 = document.querySelector('.tagline-2');
// tagline2.innerText = descriptor2;

var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var formViewButton = document.querySelector('.form-view');

var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var viewSavedButton = document.querySelector('.view-saved-button');

function unhideForm() {
  formViewButton.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
  homeView.classList.toggle('hidden');
}
function viewSavedCovers() {
  homeView.classList.toggle('hidden');
  savedCoversView.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
}
function viewHome() {
  homeView.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');

}
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(image, title, tagline1, tagline2)

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', createCover)
makeCoverButton.addEventListener('click', unhideForm)
homeButton.addEventListener('click', viewHome)
//saveCoverButton.addEventListener('click', unhideSaveCover)
viewSavedButton.addEventListener('click', viewSavedCovers)
// Create your event handlers and other functions here 👇
function createCover() {
  var descriptor1 = descriptors[getRandomIndex(descriptors)];
  var descriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  image.src = randomImage;
  title.innerText = randomTitle;
  tagline1.innerText = descriptor1;
  tagline2.innerText = descriptor2;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
createCover()
