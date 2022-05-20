// Create variables targetting the relevant DOM elements here 👇
var coverButton = document.querySelector(".random-cover-button");
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");


//We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "passion", "woe")
];


// var currentCover =;
// var currentTitle =;
// var currentTagline =;


// Add your event listeners here 👇

coverButton.addEventListener('click', getRandomCover);


// Create your event handlers and other functions here 👇

// Event handlers section


// Create your event handlers and other functions here 👇


// Fxn's Section

// Get 1 random cover image(jpg, png) string
function getRandomCover(covers) {
  return covers[Math.floor(Math.random() * covers.length)];
}
console.log(getRandomCover(covers));

// Get 1 random titles string
function getRandomTitle(titles) {
  return titles[Math.floor(Math.random() * titles.length)];
}
//console.log(getRandomTitle(titles));

var tagline = [];

// Get 2 random descriptors strings
function getTwoRandomDescriptors(descriptors) {
  for (var i = 0; i < 2; i++) {
    var randomDescriptors = descriptors[Math.floor(Math.random() * descriptors.length)];
    tagline.push(randomDescriptors);
  }
   return tagline.join();
}
