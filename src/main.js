// Create variables targetting the relevant DOM elements here 👇
var randombtn = document.querySelector('.random-cover-button');
var savebtn = document.querySelector('.save-cover-button');
// JP Add view saved and make new DOM element.

var covers = require("./data.js");
var titles = require("./data.js");
var descriptors = require("./data.js");

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randombtn.addEventListener('click', createRandomCover());
savebtn.addEventListener('click', saveCover());
// JP Add event listeners for view saved and make new.

// Create your event handlers and other functions here 👇


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
