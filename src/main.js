// Create variables targetting the relevant DOM elements here 👇
var showRandomCoverButton = document.querySelector('.random-cover-button');
var bookTitle = document.querySelector('.cover-title');
var bookCover = document.querySelector('.cover-image')
var bookTagline1 = document.querySelector('.tagline-1');
var bookTagline2 = document.querySelector('.tagline-2');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var viewSaveCoverButton = document.querySelector('.view-saved-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewForm = document.querySelector('.form-view');
var viewHome = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var createNewBookButton = document.querySelector('.create-new-book-button');
var userCover = document.querySelector('.user-cover')
var userTitle = document.querySelector('.user-title')
var userDescription1 = document.querySelector('.user-desc1')
var userDescription2 = document.querySelector('.user-desc2')


makeYourOwnCoverButton.addEventListener('click', displayOwnCover);
viewSaveCoverButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', displayHome);
createNewBookButton.addEventListener('click', createNewBook);
saveCoverButton.addEventListener('click', saveCurrentCover);

function displayOwnCover() {
  viewHome.classList.add('hidden');
  viewForm.classList.remove('hidden');
  showRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function viewSavedCovers() {
  viewHome.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  showRandomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewForm.classList.add('hidden');
}

function displayHome() {
  viewHome.classList.remove('hidden');
  viewForm.classList.add('hidden');
  showRandomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  makeYourOwnCoverButton.classList.remove('hidden');
}

function createNewBook() {
  event.preventDefault();
  var inputCover = userCover.value;
  var inputTitle = userTitle.value;
  var inputDescription1 = userDescription1.value;
  var inputDescription2 = userDescription2.value;
  covers.push(inputCover)
  descriptors.push(inputDescription1, inputDescription2)
  titles.push(inputTitle)
  
  var cover = createCover(inputCover, inputTitle, inputDescription1, inputDescription2)
  currentCover = cover
  showCover(cover)
  
  displayHome();
}

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
showRandomCoverButton.addEventListener('click', makeRandomCover);
window.addEventListener('load', makeRandomCover);

// Create your event handlers and other functions here 👇 

function makeRandomCover() {
  var newCover = covers[getRandomIndex(covers)]
  var newTitle = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  var cover = createCover(newCover, newTitle, descriptor1, descriptor2)
  console.log(cover)
  currentCover = cover
  showCover(cover)
}

function showCover(cover) {
  bookCover.src = cover.coverImg
  bookTitle.innerText = cover.title
  bookTagline1.innerText = cover.tagline1
  bookTagline2.innerText = cover.tagline2
}

// iteration 3

function saveCurrentCover() {
 var match = false
  for (var i = 0; i < savedCovers.length; i++) {
  var cover = savedCovers[i]
  if (cover.id === currentCover.id) {
   match = true
  }
 }
 if (match === false) {
  savedCovers.push(currentCover)
 }
}

//make sure currentCover is saved and display savedCovers (128)

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


