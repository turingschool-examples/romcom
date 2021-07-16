// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var title = document.querySelector('.cover-title');



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

cover.src = covers[getRandomIndex(covers)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];
title.innerText = titles[getRandomIndex(titles)];


// Iteration 0

// Goal - When the page loads, we want a random cover to appear on the page.

// Data needed: Cover with random image, title, tagline and 2 random descriptors
// Images = covers array

// We want it to be random every time the page loads.  So the fcn is running every time the page reloads.

// Fcn pull image, title, 2 descriptors and have a tagline.
