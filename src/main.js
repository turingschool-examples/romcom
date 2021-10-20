// Create variables targetting the relevant DOM elements here 👇

// Here we need to target every selector in the index.html that we'll be changing
 // e.g. var title = document.querySelector('.cover-title')

//home-button
//random-cover-button
//save-cover-button
//make-new-button
//cover-image
//cover-title
//tageline-1
//tageline-2
//home-view
//form-view
//saved-view
//saved-cover-section
//user-cover
//user-title
//user-desc1
//user-desc2
//create-new-book-button



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
