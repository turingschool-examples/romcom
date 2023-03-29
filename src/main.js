// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline = document.querySelector('.tagline');
var priceTag = document.querySelector('.price-tag');
var overlay = document.querySelector('.overlay');
var randomButton = document.querySelector('.random-cover-button')

var {covers, titles, descriptors} = require('data.js');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', loadRandomPoster);
randomButton.addEventListener('click', loadRandomPoster);

// Create your event handlers and other functions here 👇
function loadRandomPoster() {
   return coverImage.src = covers[getRandomIndex(covers)]
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
