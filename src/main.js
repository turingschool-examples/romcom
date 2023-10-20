
var coverImages = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var goHomeButton = document.querySelector('.home-button');
var viewSavedCovers = document.querySelector('.saved-view')
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var savedCoversSection = document.querySelector('.saved-covers-section')


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// // Add your event listeners here 👇

randomCoverButton.addEventListener('click', displayRandomCover);
makeOwnCoverButton.addEventListener('click', newPageForm);
viewSavedCoversButton.addEventListener('click', savedCoversPage);


// // Create your event handlers and other functions here 👇


// // We've provided two functions to get you started
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
  return cover
}

function displayRandomCover() {
  coverImages.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

function newPageForm() {
  homeView.classList.add('hidden')
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  goHomeButton.classList.remove('hidden');
}

function savedCoversPage() {
  homeView.classList.add('hidden')
  savedCoversSection.classList.add('view')
  viewSavedCovers.classList.remove('hidden');
  
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  goHomeButton.classList.remove('hidden');
}