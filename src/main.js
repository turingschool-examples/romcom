// Create variables targetting the relevant DOM elements here 👇

var covers = require('../src/data')

var titles = require('../src/data')

var desriptors = require('../src/data')


var randomCoverButton = document.querySelector(".random-cover-button")


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function generateRandomCoverButton() {
  currentCover = new Cover(images[getRandomIndex])
}


randomCoverButton.addEventListener("click", generateRandomCoverButton);
