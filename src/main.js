// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var priceTag = document.querySelector('.price-tag');
var overlay = document.querySelector('.overlay');
var randomButton = document.querySelector('.random-cover-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var viewForm = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', loadRandomPoster);
randomButton.addEventListener('click', loadRandomPoster);
makeYourOwnCoverButton.addEventListener('click', showForm);

// Create your event handlers and other functions here 👇
function loadRandomPoster() {
   return coverImage.src = covers[getRandomIndex(covers)], 
    coverTitle.innerText = titles[getRandomIndex(titles)],
    taglineOne.innerText = descriptors[getRandomIndex(descriptors)],
    taglineTwo.innerText = descriptors[getRandomIndex(descriptors)]
};

function showForm() {
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  viewForm.classList.remove('hidden');
  // show save
  return viewForm, homeView;
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover;
}
