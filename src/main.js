// Create variables targetting the relevant DOM elements here 👇
var randomButton = document.querySelector(".random-cover-button")
var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var tag1 = document.querySelector(".tagline-1")
var tag2 = document.querySelector(".tagline-2")
var randomNumber = covers.indexOf(getRandomIndex(covers))
coverImage.innerText = randomNumber


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

console.log(getRandomIndex(covers))
