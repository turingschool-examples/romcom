// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var bookCaption1 = document.querySelector('.tagline-1');
var bookCaption2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var controls = document.querySelector('.controls');
var viewHomeView = document.querySelector('.view-home-view');
var mainCover = document.querySelector('.main-cover');
var viewSavedView = document.querySelector('.view saved-view');
var viewFormView = document.querySelector('.view form-view');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = createCover()

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', showRandomCover);
window.onload = showRandomCover();
makeNewButton.addEventListener('click', displayForm);
// el.addEventListener("click", modifyText, false);
// Create your event handlers and other functions here 👇

function showRandomCover() {
  bookCover.src = covers[getRandomIndex(covers)]; 
  bookTitle.innerText = titles[getRandomIndex(titles)];
  bookCaption1.innerText = descriptors[getRandomIndex(descriptors)];
  bookCaption2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = createCover(bookCover.src, bookTitle.innerText, bookCaption1.innerText, bookCaption2.innerText);
}

function displayForm() {
  viewHomeView.hidden = true
  viewFormView.classList.remove('hidden');
}

//make querySelector to hide
//each button will have a function

// for our eventListener, is the 2nd parameter just the name of the function to be invoked when the button is clicked?
// how do we combine createCover() + getRandomIndex() functions
// where does the for loop go, what does it look like? Will not need one
// How do we use the arrays
// How to update cover
// We've provided two functions to get you started

//window.addEventListener.onload
  //window.onload = [add function], assign it a function. 
//use random number index and pass in arrays x3
//store a cover at position of the random number 
//use createCover funnction which returns an object and pass what we found out in line 25 into the createCover function
//use currentCover to manipulate the inner text to complete HTML
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
