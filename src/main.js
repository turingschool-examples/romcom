// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button')
var randomCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var makeNewBtn = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;
var imageSrc;
var title;
var descriptor1;
var descriptor2;

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click', randomizeCover);
saveCoverBtn.addEventListener('click', saveCover);
homeButton.addEventListener('click', navToHomePage);
viewSavedBtn.addEventListener('click', navToSavedPage);
makeNewBtn.addEventListener('click', navToMakeNewPage);

// Create your event handlers and other functions here 👇

function randomizeCover() {
  imageSrc = covers[getRandomIndex(covers)];
  coverImage.src = imageSrc;
  title = titles[getRandomIndex(titles)];
  coverTitle.innerText = title;
  descriptor1 = descriptors[getRandomIndex(descriptors)];
  tagline1.innerText = descriptor1;
  descriptor2 = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptor2;
  currentCover = createCover(imageSrc, title, descriptor1, descriptor2);
  console.log(currentCover);
  return currentCover
}

function saveCover() {
  
}

function navToSavedPage() {
  homeButton.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
}

function navToMakeNewPage() {
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
}

function navToHomePage() {
  randomCoverBtn.classList.remove('hidden');
  homeButton.classList.add('hidden');
  saveCoverBtn.classList.remove('hidden');
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
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
  return cover
}