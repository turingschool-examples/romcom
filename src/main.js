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

var currentCover

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandomCover);

// view.addEventListener("load", getRandomCover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function generateRandomCover() {
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  var randomCover = new Cover (randomImage, randomTitle, randomDescriptor1, randomDescriptor2);
  // var currentCover = randomCover;
  displayCover()
}

function displayCover() {
  coverImgSrc.src = randomCover.cover;
  coverTitle.innerText = randomCover.title;
  tagLine1.innerText = randomCover.tagline1;
  tagLine2.innerText = randomCover.tagline2;
}

  // setAttribute (coverImgSrc, currentCover)
  // // coverImgSrc = currentCover.cover
  // coverTitle.style.display = currentCover.cover

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
