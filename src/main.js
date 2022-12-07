// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', getRandomCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)]
}

//psuedocode here:
// Query Selector notes -
// syntax to affect "random cover button":

// document.querySelector('.random-cover-button')

// Classes to focus upon:

// <img class="cover-image" src="./assets/prairie.jpg"> This should be the cover image location, we will want to write code to enable cycling through all of ./assets in a random manner. Covers array in data.js
// <h2 class ="cover-title"> Windswept Hearts</h2> This should be the title displayed upon the cover image, we should pass the titles array into this location.
// <h3 class = "tagline"> 
// "A tale of"
//<span class="tagline-1">passion</span> For this line as well as tagline 2, this is where we will pass the array of words from descriptors.
//" and "
//<span class="tagline-2">woe</span> **^
//