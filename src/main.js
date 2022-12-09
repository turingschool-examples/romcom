// Create variables targetting the relevant DOM elements here 👇
// When the page loads a random cover will appear. We want to randome book cover button to select a different random book cover
//when we click it. We are working with arrays
// i think that we need a for loop
var title = document.querySelector('')
var coverImage = document.querySelector(".cover-image");
var tagLine = document.querySelector("h3.tagline");

var makeYourOwnCover;

// We've provided a few variables below
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover;

class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
}

// Add your event listeners here 👇

window.addEventListener("load", makeRandomCover);

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  
  return Math.floor(math.random() * covers.length)
}
