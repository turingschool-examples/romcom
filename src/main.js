// Create variables targetting the relevant DOM elements here 👇
//Iteration 0: Main Page
//  Function to randomly generate new images and title
//  names sourced from cover.js & data.js
var mainPage = document.querySelector('.cover-image'); //main page
console.log(mainPage);
var title = document.querySelector(`.cover-title`); // main page
console.log(title);
var tagline1 = document.querySelector(`.tagline-1`); //main page
console.log(tagLine1);
var tagline2 = document.querySelector(`.tagline-2`); // main page
console.log(tagLine2);
var pageLoad = document.querySelector('html'); //main page
console.log(pageLoad);



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
pageLoad.addEventListener('load', getRandomCover);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomCover(covers) {
  for ( var i = 0; i < covers.length; i++) {
  var randomCover = covers[Math.floor(Math.random() * covers.length);];
  }
  return randomCover;
}
//function getRandomIndex(array) {
//  return Math.floor(Math.random() * array.length);
//}
//function getRandomIndex(array) {
  //return Math.floor(Math.random() * array.length);
//}
