// Create variables targetting the relevant DOM elements here 👇
// pull test! PE
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine = document.querySelector('.tagline');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
var image = document.querySelector('.price-tag');
var imageOverLay = document.querySelector('.overlay');
var showRandomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var homePage = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var section = document.querySelector('section');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var savedCoversButton = document.querySelector('.view-saved-button');
var savedCoversPage = document.querySelector('saved-covers-section');
// queries over all dom elements(?) we need to change

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener('load', function(){
  makeRandomCover();
  renderRandomCover();
});

showRandomCoverButton.addEventListener('click', function() {
 makeRandomCover();
 renderRandomCover();
});

makeOwnCoverButton.addEventListener('click', makeYourOwnCover)

savedCoversButton.addEventListener('click', viewSavedCovers)

homeButton.addEventListener('click', viewHomePage)
  

// Create your event handlers and other functions here 👇

function makeYourOwnCover () {
  homePage.classList.add('hidden')
  saveCoverButton.classList.add('hidden') 
  showRandomCoverButton.classList.add('hidden') 
  form.classList.remove('hidden')
  homeButton.classList.remove('hidden')
}

function viewSavedCovers() {
  homePage.classList.add('hidden') 
  showRandomCoverButton.classList.add('hidden') 
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}

function viewHomePage() {
  homePage.classList.remove('hidden')
  showRandomCoverButton.classList.remove('hidden') 
  saveCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
}

function makeRandomCover() { // Updating the Data Model (currentCover)
  currentCover =  createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
}
function renderRandomCover() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText = currentCover.theTagLine1;
  tagLine2.innerText = currentCover.theTagLine2;
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
    theTagLine1: descriptor1,
    theTagLine2: descriptor2
  }
  return cover
}
