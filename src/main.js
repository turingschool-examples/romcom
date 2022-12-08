// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image').src;
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

var randomCoverImage = covers[getRandomIndex(covers)];
var randomCoverTitle = titles[getRandomIndex(titles)];
var randomCoverTagline1 = descriptors[getRandomIndex(descriptors)];
var randomCoverTagline2 = descriptors[getRandomIndex(descriptors)];

// Add your event listeners here 👇

window.addEventListener('load', useRandomCoverImage());
window.addEventListener('load', useRandomCoverTitle());

// // When page loads (event listener?) trigger Cover class using random
// // image, title, and tagline

function useRandomCoverImage() {
  coverImage = randomCoverImage;
}

function useRandomCoverTitle() {
  coverTitle.innerText = randomCoverTitle;
}



// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

