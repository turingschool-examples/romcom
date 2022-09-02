// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(`.cover-image`)
var coverTitle = document.querySelector(`.cover-title`)
var tag1 = document.querySelector(`.tagline-1`)
var tag2 = document.querySelector(`.tagline-2`)
var randomButton = document.querySelector(`.random-cover-button`)
// We've provided a few variables below
var savedCovers = [
 new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', makeRandomCover, makeCurrentCover)
randomButton.addEventListener('click', makeRandomCover, makeCurrentCover)
// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  var randomImage = covers[getRandomIndex(covers)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomTagline1 = descriptors[getRandomIndex(descriptors)]
  var randomTagline2 = descriptors[getRandomIndex(descriptors)]
  var newCover = new Cover(randomImage, randomTitle, randomTagline1, randomTagline2)
  currentCover = newCover
  makeCurrentCover()
}

function makeCurrentCover() {
  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  tag1.innerText = currentCover.tagline1
  tag2.innerText = currentCover.tagline2
}




// var randomCover = getRandomIndex(covers)
// var randomTitle = getRandomIndex(titles)
// var randomTagline1 = getRandomIndex(descriptors)
// var randomTagline2 = getRandomIndex(descriptors)

//   coverImage.src = covers[randomCover];
//   coverTitle.innerText = titles[randomTitle];
//   tagline1.innerText = descriptors[randomTagline1];
//   tagline2.innerText = descriptors[randomTagline2];
// }
