// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button')
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagline = document.querySelector('.tagline')
console.log(randomCoverButton)

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', newCover)
window.addEventListener("load", newCover);
window.addEventListener("load", randomTitle);
window.addEventListener("load", randomDescriptors);

// Create your event handlers and other functions here 👇
function newCover() {
var randomNumber = Math.floor(Math.random()*covers.length)
coverImage.src = covers[randomNumber]
}

function randomTitle() {
  var randomNumber = Math.floor(Math.random()*titles.length)
  coverTitle.textContent = titles[randomNumber]
}

function randomDescriptors() {
  var randomNumber = Math.floor(Math.random()*descriptors.length)
  var randomNumber1 = Math.floor(Math.random()*descriptors.length)
  coverTagline.textContent = `A tale of ${descriptors[randomNumber]} and ${descriptors[randomNumber1]}`
  

}


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
