// Create variables targetting the relevant DOM elements here 👇
var currentCover = document.querySelector('.cover-image');
var coverButton = document.querySelector('.random-cover-button')


//all of things to interact with dom//
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// when page loads we want a new vocer every time and it needs to be random
coverButton.addEventListener('click', changeCovers);
// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function changeCovers() {
  var newCover = covers[Math.floor(Math.random() * covers.length)]
  var currentCover = document.querySelector('.cover-image');
  currentCover.src = newCover;

}
