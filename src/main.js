// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTaglineOne = document.querySelector(".tagline-1");
var coverTaglineTwo = document.querySelector(".tagline-2");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var randomCoverImg = covers[getRandomIndex(covers)];
var randomTitle = titles[getRandomIndex(titles)];
var randomTaglineOne = descriptors[getRandomIndex(descriptors)];
var randomTaglineTwo = descriptors[getRandomIndex(descriptors)];

// Add your event listeners here 👇



// Create your event handlers and other functions here 👇



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomCover() {
  currentCover = new Cover(randomCoverImg, randomTitle, randomTaglineOne, randomTaglineTwo);
};

function displayCover(currentCover) {
  coverImg.setAttribute("src", randomCoverImg);
  coverTitle.innerText = randomTitle;
  coverTaglineOne.innerText = randomTaglineOne;
  coverTaglineTwo.innerText = randomTaglineTwo;
  return currentCover;
};

displayCover();
