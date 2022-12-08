// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover; // make new object instance every created poster (for savin')

var randomCoverButton = document.querySelector('.random-cover-button');
var yourOwnCoverButton = document.querySelector('.make-new-button');

var newRandomCover = document.querySelector('.cover-image');
var newRandomTitle = document.querySelector('.cover-title');
var newRandomTagOne = document.querySelector('.tagline-1');
var newRandomTagTwo = document.querySelector('.tagline-2');

var homeView = document.querySelector('.home-view')
var formView = document.querySelector('.form-view')


// Add your event listeners here 👇

randomCoverButton.addEventListener('click', getRandomCover);
window.addEventListener('load', getRandomCover);

yourOwnCoverButton.addEventListener('click', changeViewToForm);

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomCover(){
newRandomCover.src = covers[getRandomIndex(covers)];
newRandomTitle.innerText = titles[getRandomIndex(titles)];
newRandomTagOne.innerText = descriptors[getRandomIndex(descriptors)];
newRandomTagTwo.innerText = descriptors[getRandomIndex(descriptors)];
};

function changeViewToForm(){
  formView.classList.remove('hidden')
  homeView.classList.add('hidden')
};

// add event listeners to rest of buttons:
// 1. switch between views - remove/add element hidden
// 2. functionality of 'home' button 