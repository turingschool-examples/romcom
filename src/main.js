// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
// var title = document.querySelector('.cover-title')
// var tagLine = document.querySelector ('.tagline')
// var descriptor1 = document.querySelector('.tagline-1')
// var descriptor2 = document.querySelector('.tagline-2')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover =

// Add your event listeners here👇
window.addEventListener('load', function() {
  randomizer()
})



// Create your event handlers and other functions here 👇
function randomizer() {
  coverImgSrc.src = covers[getRandomIndex(covers)]
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
