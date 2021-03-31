// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline1');
var tagline2 = document.querySelector('.tagline2');

// We've provided a few variables below
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

function randomImageCover(covers) {
  var x = getRandomIndex(covers)
  coverImage.src = covers[x];
}
randomImageCover(covers)

function randomCoverTitle(titles) {
  var x = getRandomIndex(titles)
  bookTitle.innerText = titles[x];
}
randomCoverTitle(titles)

function randomTagline(descriptors) {
  var x = getRandomIndex(descriptors);
  var y = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[x];
  tagline2.innerText = descriptors[y];
}

randomTagline(descriptors);

// var z = getRandomIndex(descriptors)
// function randomTagline1(descriptors) {
//   tagline1.innerText = 'descriptors[z]'';
// }
// randomTagline1(descriptors)

// function randomTaglines(descriptors) {
//   var x = getRandomIndex(descriptors)
//   var y = getRandomIndex(descriptors)
//   tagline1.innerText = descriptors[x];
//   tagline2.innerText = descriptors[x];
// }
// function randomTaglines(descriptors) {
//   var x = getRandomIndex(descriptors)
//   tagline1.innerText = descriptors[x];
// }
// randomTaglines(descriptors);
