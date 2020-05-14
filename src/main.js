// Create variables targetting the relevant DOM elements here 👇
var loadingImg = document.querySelector(".cover-image");
var loadingTitle = document.querySelector(".cover-title");
var loadingTagline = document.querySelector(".tagline");
var loadingTagline1 = document.querySelector(".tagline-1");
var loadingTagline2 = document.querySelector(".tagline-2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// document.addEventListener("load", loadFirstCover);

// Create your event handlers and other functions here 👇
// loadingCover = new Cover {
//
// }

// We've provided one function to get you started
function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var descr1 = getRandomIndex(descriptors);
var descr2 = getRandomIndex(descriptors);
var title = getRandomIndex(titles);
var coverImg = getRandomIndex(covers);

console.log(descr1);

// use query selector to access img, title, tagline, disc1 and disc2
// on page load (eventlistener) random title, image and discriptors will appear on the page
// function that will insert the selected elements into the framework for the cover
// function that will insert the framework onto the DOM
