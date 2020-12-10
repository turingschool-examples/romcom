// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var title = document.querySelector('.cover-title');
var image = document.querySelector('.cover-image');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');

// Add your event listeners here 👇
window.addEventListener('load', helper);
// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomTitle() {
  var index = getRandomIndex(titles);
  this.title.innerText = titles[index];
}

function getRandomImage() {
  var index = getRandomIndex(covers);
  this.image.src = covers[index];
}

function getRandomTagLines() {
  var index = getRandomIndex(descriptors);
  var index2 = getRandomIndex(descriptors);
  if (index === index2) {
    index2 = getRandomIndex(descriptors)
  }
  this.tagLine1.innerText = descriptors[index];
  this.tagLine2.innerText = descriptors[index2];
}


function helper() {
  getRandomTitle();
  getRandomImage();
  getRandomTagLines();
}
