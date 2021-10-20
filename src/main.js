// Create variables targetting the relevant DOM elements here 👇
var coverImageSource = document.querySelector('.cover-image');
var coverButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var descriptorOne = document.querySelector('.tagline-1');
var descriptorTwo = document.querySelector('.tagline-2');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImageSource, coverTitle, descriptorOne, descriptorTwo);

// Add your event listeners here 👇
coverButton.addEventListener('click', changeCover);
// Create your event handlers and other functions here 👇
function changeCover() {
  currentCover.cover.src = covers[getRandomIndex(covers)];
  currentCover.title.innerText = titles[getRandomIndex(titles)];
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
