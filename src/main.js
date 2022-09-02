// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var firstDescriptor = document.querySelector('.tagline-1')
var secondDescriptor = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover

// Add your event listeners here 👇
window.addEventListener('load', loadRandomCover)
randomCoverButton.addEventListener('click', loadRandomCover)
// Create your event handlers and other functions here 👇


function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length)
  return array[index]
}

function randomCover () {
  currentCover = new Cover (
  getRandomIndex(covers),
  getRandomIndex(titles),
  getRandomIndex(descriptors),
  getRandomIndex(descriptors),
  )
}

function loadNewCover () {
  coverImg.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  firstDescriptor.innerText = currentCover.tagline1
  secondDescriptor.innerText = currentCover.tagline2
  }

function loadRandomCover () {
  randomCover()
  loadNewCover()
}