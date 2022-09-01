// This is another test.
// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var imageCover = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;
imageCover.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", getRandomCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  imageCover.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
 // currentCover = new Cover(imageCover, coverTitle, tagline1, tagline2)
}