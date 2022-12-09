// Create variables targetting the relevant DOM elements here 👇
// Pull up and display a new picture, headline, and tagline everytime we click "Show New Random Cover" button.
// cover, titles, descriptors
// We've provided a few variables below




var currentCover;

var title = document.querySelector('.cover-title')
var cover = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')

var randomCoverButton = document.querySelector('.random-cover-button')

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

title.innerText = getRandomIndex(titles)
cover.src = getRandomIndex(covers)
taglineOne.innerText = getRandomIndex(descriptors)
taglineTwo.innerText = getRandomIndex(descriptors)

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", createBook);

// Create your event handlers and other functions here 👇
function getRandomIndex(titles) {
  return (titles[Math.floor(Math.random() * titles.length)])
}
function getRandomIndex(covers) {
  return (covers[Math.floor(Math.random() * covers.length)])
}
function getRandomIndex(descriptors) {
  return (descriptors[Math.floor(Math.random() * descriptors.length)])
}

function createBook() {
  currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText)
}

// title.innerText = getRandomIndex(titles)
// cover.src = getRandomIndex(covers)
// taglineOne.innerText = getRandomIndex(descriptors)
// taglineTwo.innerText = getRandomIndex(descriptors)
// We've provided one function to get you started

// function createBook() {
//   currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText)
// }

// function getRandomIndex(array) {
//    return Math.floor(Math.random() * array.length)
