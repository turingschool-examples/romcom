// Create variables targetting the relevant DOM elements here 👇
var newCoverButton = document.querySelector('.random-cover-button');
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var bookCaption = document.querySelector('.tagline');
// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
newCoverButton.addEventListener("click", createCover());
// el.addEventListener("click", modifyText, false);
// Create your event handlers and other functions here 👇
// for our eventListener, is the 2nd parameter just the name of the function to be invoked when the button is clicked?
// how do we combine createCover() + getRandomIndex() functions
// where does the for loop go, what does it look like?
// how do we use the arrays
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
