// Create variables targetting the relevant DOM elements here 👇
// Data
var imageCover = covers


//Cover
var title = document.querySelector('.cover-title')
var img = document.querySelector('.cover-image')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')
// Button
var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')
var saveButton = document.querySelector('.save-cover-button')
var viewButton = document.querySelector('.view-saved-button')
var makeButton = document.querySelector('.make-new-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

var createCover = new Cover(covers[0], titles[0],  descriptors[0], descriptors[1])



// Add your event listeners here 👇


// Create your event handlers and other functions here 👇



randomButton.addEventListener('click', function() {
  title.innerText = titles[getRandomIndex(covers)]
}) 


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

