// Create variables targetting the relevant DOM elements here 👇
// These target the book cover
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var firstTagline = document.querySelector(".tagline-1");
var secondTagline = document.querySelector(".tagline-2");

var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewCoverButton = document.querySelector('.make-new-button');

// different page views
var homePage = document.querySelector('.home-view');
var savedPage = document.querySelector('.saved-view');
var makeNewCoverPage = document.querySelector('.form-view')
var savedCollection = document.querySelector('.saved-covers-section')



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover()


// Add your event listeners here 👇

window.addEventListener('load', randomizeCover);
randomCoverButton.addEventListener('click', randomizeCover);
makeNewCoverButton.addEventListener('click', renderNewCoverPage);
homeButton.addEventListener('click', renderHomePage);
viewSavedButton.addEventListener('click', renderSavedCoversPage)


// Create your event handlers and other functions here 👇


// function createRandomCover() {
//   var currentCover = new Cover(cover[getRandomIndex(covers)],title[getRandomIndex(titles)],
// tagline1[getRandomIndex(descriptors)], tagline2[getRandomIndex(descriptors)]);
//   displayCover();
// }
//
//
// function displayCover() {
//   var coverImage.src = covers[index],
//   var coverTitle.innerText = titles[index],
//   var firstTagline.innerText = descriptors[index],
//   var secondTagline.innerText = descriptors[index],
// }
function randomizeCover() {
  changeCoverImage();
  changeTitle();
  changeFirstDescriptor();
  changeSecondDescriptor();
  console.log(currentCover);
}


function changeCoverImage() {
  var index = getRandomIndex(covers);
  coverImage.src = covers[index];
  currentCover.cover = covers[index];
}

function changeTitle() {
  var index = getRandomIndex(titles);
  coverTitle.innerHTML = titles[index];
  currentCover.title = titles[index];
}

function changeFirstDescriptor() {
  var index = getRandomIndex(descriptors);
  firstTagline.innerHTML = descriptors[index];
  currentCover.tagline1 = descriptors[index];
}

function changeSecondDescriptor() {
  var index = getRandomIndex(descriptors);
  secondTagline.innerHTML = descriptors[index];
  currentCover.tagline2 = descriptors[index];
}



function showElement(element) {
  element.classList.remove('hidden')
}

function hideElement(element) {
  element.classList.add('hidden')
}

function renderNewCoverPage() {
  showElement(makeNewCoverPage);
  showElement(homeButton);
  hideElement(homePage);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
}

// function createCoverDisplay() {
//   homeButton.classList.add();
//   saveCoverButton.classList.remove();
//   randomCoverButton.classList.remove();
//   makeNewCoverPage.classList.add();
//   homePage.classList.remove();
// }
// console.log(createCoverDisplay, )


// // We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
