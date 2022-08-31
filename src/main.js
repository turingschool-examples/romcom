// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector(".random-cover-button")
var bookCover = document.querySelector();
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine = document.querySelector(".tagline");
var priceTag = document.querySelector(".price-tag");
var overlay = document.querySelector(".overlay");
var descriptor1 = document.querySelector(".descriptor1");
var descriptor2 = document.querySelector(".descriptor2");

// When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
// Every time the user clicks the Show New Random Cover button, a new random cover is created

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener(“load”, changeCover);

randomCoverButton.addEventListener(“click”, changeCover);


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
