// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine = document.querySelector('.tagline')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var view = document.querySelector('.view')
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover (coverImgSrc, coverTitle, tagLine1, tagLine2)

// Add your event listeners here 👇
button.addEventListener("click", getRandomCover);

view.addEventListener("load", getRandomCover);

// Create your event handlers and other functions here 👇
function getRandomCover() {
  function getRandomIndex(covers) {
    return Math.floor(Math.random() * covers.length)};
  function getRandomTitle(titles) {
    return Math.floor(Math.random() * titles.length);}
  function getRandomDescriptors(descriptors) {
    return Math.floor(Math.random() * descriptors.length);}
  }

// We've provided one function to get you started
function getRandomIndex(covers) {
  return Math.floor(Math.random() * array.length);
}
