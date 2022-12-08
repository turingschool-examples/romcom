// Create variables targetting the relevant DOM elements here 👇
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = new Cover(cover.src, titles.innerHTML, tagLine1.innerHTML, tagLine2.innerHTML)



var cover = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var priceTag = document.querySelector('.price-tag')



var randomButtonCover = document.querySelector('.random-cover-button')
var saveButtonCover = document.querySelector('save-cover-button')
var makeNewCover = document.querySelector('.view-saved-button')
var makenewCover = document.querySelector('.make-new-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// var cover above is to test branch
// Add your event listeners here 👇



// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function createBook() {
  title.innerHTML = function getRandomIndex(titles) {
    return (titles(Math.floor(Math.random() * titles.length)))
  }
  cover.src = function getRandomIndex(covers) {
  return (covers(Math.floor(Math.random() * covers.length)))
  }
  taglineOne.innerHTML = function getRandomIndex(descriptors){
    return (descriptors(Math.floor(Math.random() * descriptors.length)))
  }
  taglineTwo.innerHTML = function getRandomIndex(descriptors){
    return (descriptors(Math.floor(Math.random() * descriptors.length)))
  }
}




function getRandomIndex(titles) {
  return Math.floor(Math.random() * array.length);
}

// original


