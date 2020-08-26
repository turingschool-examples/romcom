// Create variables targetting the relevant DOM elements here 👇
var newCoverImage = document.querySelector('.cover-image');
var newTitle = document.querySelector("cover-title");
var newTaglineOne = document.querySelector("tagline-1");
var newTaglineTwo = document.querySelector("tagline-2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
.addEventListener()
// we need to have the function running once the page is loaded
// were looking out for how to use ONLOAD and where




// Create your event handlers and other functions here 👇
function randomCoverImage() {
  return covers[getRandomIndex(covers)];
}
function randomTitle() {
  return titles[getRandomIndex(titles)];
}
function randomTaglineOne () {
  return descriptors[getRandomIndex(descriptors)];
}
function randomTaglineTwo() {
  return descriptors[getRandomIndex(descriptors)];
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
