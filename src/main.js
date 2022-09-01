// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine = document.querySelector('.tagline')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var view = document.querySelector('.main-cover')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover {
  currentCover.cover = Math.floor(Math.random(covers) * covers.length);
  currentCover.title = Math.floor(Math.random(titles) * titles.length);
  currentCover.tagLine1 = Math.floor(Math.random(descriptors) * descriptors.length);
  currentCover.tagline2 = Math.floor(Math.random(descriptors) * descriptors.length);
}

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", getRandomCover);

// view.addEventListener("load", getRandomCover);

// Create your event handlers and other functions here 👇
function generateRandomCover() {
  return currentCover
}

function displayRandomCover() {
  coverTitle.innerText =

  // setAttribute (coverImgSrc, currentCover)
  // // coverImgSrc = currentCover.cover
  // coverTitle.style.display = currentCover.cover
}

// We've provided one function to get you started
function getRandomIndex(covers) {
  return Math.floor(Math.random() * array.length);
}
