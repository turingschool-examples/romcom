
// Create variables targetting the relevant DOM elements here 👇
//things we need to find: cover image, title, Tagline, 2 descriptors in tagline.

var coverImage = document.querySelector("img.cover-image");
var mainTitle = document.querySelector("h2.cover-title");
var tagline = document.querySelector("h2.tagline");
var taglineDescriptor1 = document.querySelector("span.tagline-1");
var taglineDescriptor2 = document.querySelector("span.tagline-2");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started. This function pulls just the index number.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

coverImage.src = covers[getRandomIndex(covers)];
mainTitle.innerText = titles[getRandomIndex(titles)];
taglineDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
taglineDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];
