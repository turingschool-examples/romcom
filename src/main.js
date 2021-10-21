// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagline1 = document.querySelector(".tagline-1");
var coverTagline2 = document.querySelector(".tagline-2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", randomCoverLoad);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function randomCoverLoad() {
  var title = titles[getRandomIndex(titles)];
  var image = covers[getRandomIndex(covers)];
  var taglineOne = descriptors[getRandomIndex(descriptors)];
  var taglineTwo = descriptors[getRandomIndex(descriptors)];

  var currentCover = new Cover(image, title, taglineOne, taglineTwo);

  coverTitle.innerText = currentCover.title;
  coverImage.src = currentCover.cover;
  coverTagline1.innerText = currentCover.tagline1;
  coverTagline2.innerText = currentCover.tagline2;

}
