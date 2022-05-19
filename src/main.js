// Create variables targetting the relevant DOM elements here 👇
var buttonShowRandomCover = document.querySelector('.random-cover-button');

var buttonHome = document.querySelector('.home-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonViewSaved = document.querySelector('.view-save-button');
var buttonMakeNew = document.querySelector('.make-new-button');

var titleCover = document.querySelector('.cover-title');
var titleImage = document.querySelector('.cover-image');
var titleTagLine1 = document.querySelector('.tagline-1');
var titleTagLine2 = document.querySelector('.tagline-2');

var romControls = document.querySelector('.controls');
var romViewHome = document.querySelector('.view home-view');
var romViewSave = document.querySelector('.view home-view');
var romViewForm = document.querySelector('.view form-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', getRandomizedCover)
buttonShowRandomCover.addEventListener("click", getRandomizedCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomizedCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  titleImage.src = currentCover.cover;
  titleCover.innerText = currentCover.title;
  titleTagLine1.innerText = currentCover.tagline1;
  titleTagLine2.innerText = currentCover.tagline2;
}



// function printHello() {
//   console.log('hello')
// }
