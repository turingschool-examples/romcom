// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', showNewRandomCover);
randomCoverButton.addEventListener('click', showNewRandomCover);
makeNewButton.addEventListener('click', viewFormView);
viewSavedButton.addEventListener('click', viewSavedCoversView);
homeButton.addEventListener('click', viewHomeView);
createNewBookButton.addEventListener('click', makeMyBook);
saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇
function showNewRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

function viewFormView() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function viewSavedCoversView() {
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function viewHomeView() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
}

function makeMyBook(event) {
  event.preventDefault();
  if (!covers.includes(userCover.value)) {
    covers.push(userCover.value);
  }
  if (!titles.includes(userTitle.value)) {
    titles.push(userTitle.value);
  }
  if (!descriptors.includes(userDesc1.value)) {
    descriptors.push(userDesc1.value);
  }
  if (!descriptors.includes(userDesc2.value)) {
    descriptors.push(userDesc2.value);
  }
  viewHomeView();
  coverImage.src = userCover.value;
  coverTitle.innerText = userTitle.value;
  tagline1.innerText = userDesc1.value;
  tagline2.innerText = userDesc2.value;
}

function saveCover() {
  var currentCover = createCover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
  savedCovers.push(currentCover);
  console.log(savedCovers);
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
