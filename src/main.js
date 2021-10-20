// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image");
coverImg.src = covers[getRandomIndex(covers)];

var coverTitle = document.querySelector(".cover-title");
coverTitle.innerText = titles[getRandomIndex(titles)];

var tagline1 = document.querySelector(".tagline-1");
tagline1.innerText = descriptors[getRandomIndex(descriptors)];

var tagline2 = document.querySelector(".tagline-2");
tagline2.innerText = descriptors[getRandomIndex(descriptors)];

//
// Must connect these to randomize function next

// We've provided a few variables below
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  )
];
var currentCover;


// Add your event listeners here 👇

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
