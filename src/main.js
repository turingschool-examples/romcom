// Create variables targetting the relevant DOM elements here 👇
var homeCover = document.querySelector('.cover-image')

var homeTitle = document.querySelector('.cover-title')

var homeTagline1 = document.querySelector('.tagline-1')

var homeTagline2 = document.querySelector('.tagline-2')

var randomButton = document.querySelector('.random-cover-button')
console.log(homeCover)

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
console.log(currentCover)


// Add your event listeners here 👇
document.querySelector('.random-cover-button').addEventListener("click", showCurrentCover)

// Create your event handlers and other functions here 👇


// show the cover we generated
function showCurrentCover() {
  homeCover = covers[getRandomIndex(covers)]
  homeTitle = titles[getRandomIndex(titles)]
  homeTagline1 = descriptors[getRandomIndex(descriptors)]
  homeTagline2 = descriptors[getRandomIndex(descriptors)]
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}




