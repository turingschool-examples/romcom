// Create variables targetting the relevant DOM elements here 👇

var title = document.querySelector(".cover-title");
var img = document.querySelector(".cover-image");
var tagline = document.querySelector(".tagline");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

var homeButton = document.querySelector(".home-button");
var randomButton = document.querySelector(".random-cover-button");
var saveButton = document.querySelector(".save-cover-button");
var viewButton = document.querySelector(".view-saved-button");
var makeButton = document.querySelector(".make-new-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.addEventListener('load', randomCover)
randomButton.addEventListener('click', randomCover)

// Add your event listeners here 👇
function randomCover() {
  
}

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
