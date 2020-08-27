// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');
var coverImage = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomizeButton = document.querySelector('.random-cover-button');



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var randomCover = getRandomIndex(covers);

// Add your event listeners here 👇
window.addEventListener("load", createRandomCover);
randomizeButton.addEventListener("click", createRandomCover);


// Create your event handlers and other functions here 👇

function createRandomCover() {
  var randomCoverImage = getRandomIndex(covers);
  var randomTitle = getRandomIndex(title);
  var randomTagline1 = getRandomIndex(descriptors);
  var randomTagline2 = getRandomIndex(descriptors);
  currentCover = new Cover(randomCoverImage, randomTitle, randomTagline1, randomTagline2);
  displayNewCover(currentCover);
}

function displayNewCover(cover) {
  coverTitle.innerText = cover.randomTitle;
  tagline1.innerText = cover.randomTagline1;
  tagline2.innerText = cover.randomTagline2;
  coverImage.src = cover.randomCoverImage;
}

// We've provided one functio n to get you started
function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
