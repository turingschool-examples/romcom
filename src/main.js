// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');

var imageArray = document.querySelector('.cover-image');

var taglineArrayOne = document.querySelector('.tagline-1');

var taglineArrayTwo = document.querySelector('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }

function getRandomCover() {
  imageArray.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  taglineArrayOne.innerText = descriptors[getRandomIndex(descriptors)];
  taglineArrayTwo.innerText = descriptors[getRandomIndex(descriptors)];
}

getRandomCover()
