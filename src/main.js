// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTag1 = document.querySelector('.tagline-1');
var coverTag2 = document.querySelector('.tagline-2');
var randomCoverBtn = document.querySelector('.random-cover-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover  =

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click', createRandomPoster);
document.addEventListener('DOMContentLoaded', createRandomPoster);

// Create your event handlers and other functions here 👇

function createRandomPoster() {
  var randomImageIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var randomTag1Index = getRandomIndex(descriptors);
  var randomTag2Index = getRandomIndex(descriptors);
  currentCover = new Cover(covers[randomImageIndex], titles[randomTitleIndex], descriptors[randomTag1Index], descriptors[randomTag2Index]);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverTag1.innerText = currentCover.tagline1;
  coverTag2.innerText = currentCover.tagline2;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}