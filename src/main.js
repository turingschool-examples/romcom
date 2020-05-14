// Create variables targetting the relevant DOM elements here 👇

var homeButton = document.querySelector('.home-button');
var randomizeButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.main-cover');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

// Create your eent handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//randomize

function randomizeCovers() {
  mainCover.innerHTML = `
  <img class="cover-image" src="${covers[getRandomIndex(covers)]}">
  <h2 class="cover-title">${titles[getRandomIndex(titles)]}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${descriptors[getRandomIndex(descriptors)]}</span> and <span class="tagline-2">${descriptors[getRandomIndex(descriptors)]}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
  `
}
randomizeCovers();
  //coverImage = imageArr.getRandomIndex
  //.innerHTML
  //coverTitle
  //tagline1 & 2
