// Create variables targetting the relevant DOM elements here 👇
var coverPic = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagLine = document.querySelector('.tagline')
var priceTag = document.querySelector('.price-tag')
var randomBtn = document.querySelector('.random-cover-button')


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomBtn.addEventListener('click', getRandomIndex)


// Create your event handlers and other functions here 👇
// function randomize() {
  function getRandomIndex(titles) {
    return Math.floor(Math.random() * titles.length);
  }
  function getRandomIndex(covers) {
    return Math.floor(Math.random() * covers.length);
  }
  function getRandomIndex(descriptors) {
    return Math.floor(Math.random() * descriptors.length);
  }
// }

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
