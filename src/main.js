// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(`.cover-image`)
var coverTitle = document.querySelector(`.cover-title`)
var tagline1 = document.querySelector(`.tagline-1`)
var tagline2 = document.querySelector(`.tagline-2`)
var overlay = document.querySelector(`.overlay`)
var randomButton = document.querySelector(`.random-cover-button`)
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', displayRandomCover)
randomButton.addEventListener('click', displayRandomCover)
// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var randomCover = getRandomIndex(covers)
var randomTitle = getRandomIndex(titles)
var randomTagline = getRandomIndex(descriptors)

// coverImage.src = covers[randomCover]
// coverTitle.innerText = titles[randomTitle]
// tagline1.innerText = descriptors[randomTagline]
// tagline2.innerText = descriptors[randomTagline]
//console.log(coverImage.src)

function displayRandomCover() {
  coverImage.src = covers[randomCover];
  coverTitle.innerText = titles[randomTitle];
  tagline1.innerText = descriptors[randomTagline];
  tagline2.innerText = descriptors[randomTagline];
}

// function displayRandomCover() {
//   currentCover = new Cover (covers[randomCover], titles[randomTitle], descriptors[randomTagline], descriptors[randomTagLine]);
//   coverImage.src = currentCover.cover;
//   coverTitle.innerText = currentCover.title;
//   tagline1.innerText = currentCover.tagline1;
//   tagline2.innerText = currentCover.tagline2;
// return currentCover;
// }
