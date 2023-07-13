// Create variables targetting the relevant DOM elements here 👇
var image = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', showNewCover)
window.addEventListener('load', showNewCover)

// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {

  return Math.floor(Math.random() * array.length);
}

function showNewCover(){
  title.innerText = titles[getRandomIndex(titles)]
  tagline1.innerText = descriptors[getRandomIndex(descriptors)]
  tagline2.innerText = descriptors[getRandomIndex(descriptors)]
  image.src = covers[getRandomIndex(covers)]
}
//image will need diff method coverImage.source
// assign new values to image,title,tag line 1, tag line 2 use innertext
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
