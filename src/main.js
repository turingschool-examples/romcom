// Create variables targetting the relevant DOM elements here 👇
//Iteration 0: Main Page
//  Function to randomly generate new images and title
//  names sourced from cover.js & data.js
// var mainPage = document.querySelector('.cover-image'); //main page
// console.log(mainPage); - this line of code messed up the whole thing!!

var tagline1 = document.querySelector('.tagline-1');
// console.log(tagLine1);
var tagline2 = document.querySelector('.tagline-2');
// console.log(tagLine2);

var body = document.querySelector('body');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

var pageLoad = document.querySelector('html');
// console.log(pageLoad);
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector(`.cover-title`);
// console.log(title);




// Add your event listeners here 👇
window.addEventListener('load', generateRandomCover);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  for ( var i = 0; i < array.length; i++) {
  var randomIndex = array[Math.floor(Math.random() * array.length)];
  }
  return randomIndex;
}

function generateRandomCover() {
  title.innerText = getRandomIndex(titles);
  coverImage.src = getRandomIndex(covers);
  tagline1.innerText = getRandomIndex(descriptors);
  tagline2.innerText = getRandomIndex(descriptors);
}





// getRandomCover();

//function getRandomIndex(array) {
//  return Math.floor(Math.random() * array.length);
//}
//function getRandomIndex(array) {
  //return Math.floor(Math.random() * array.length);
//}
