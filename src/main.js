// Create variables targetting the relevant DOM elements here 👇
var randomButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var coverImage = document.querySelector('.cover-image');
var randomTitle = titles[getRandomIndex(titles)];
var randomTagline1 = descriptors[getRandomIndex(descriptors)];
var randomTagline2 = descriptors[getRandomIndex(descriptors)];
var randomImage = covers[getRandomIndex(covers)];


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomButton.addEventListener('click', newRandomBook)
window.addEventListener('DOMContentLoaded', newRandomBook)

// Create your event handlers and other functions here 👇
function newRandomBook() {
  var newCover = createCover(randomImage, randomTitle, randomTagline1, randomTagline2);
  coverTitle.innerText = newCover.title;
  tagline1.innerText = newCover.tagline1;
  tagline2.innerText = newCover.tagline2;
  coverImage.src = newCover.coverImg;
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
