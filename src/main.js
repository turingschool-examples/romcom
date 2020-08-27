// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');
var coverImage = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", loadRandom);
randomizeButton.addEventListener("click", loadRandom);


// Create your event handlers and other functions here 👇

function loadRandom() {
  coverTitle.innerText = getRandomIndex(titles);
  tagline1.innerText = getRandomIndex(descriptors);
  tagline2.innerText = getRandomIndex(descriptors);
  coverImage.src = getRandomIndex(covers);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
