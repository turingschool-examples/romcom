// Create variables targetting the relevant DOM elements here 👇

var coverLocation = document.querySelector(".cover-image")
var titleLocation = document.querySelector(".cover-title")
var firstTagLocation = document.querySelector(".tagline-1")
var secondTagLocation = document.querySelector(".tagline-2")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

var randomCoversIndex = getRandomIndex(covers);
var randomTitlesIndex = getRandomIndex(titles);
var randomDescriptorsIndex1 = getRandomIndex(descriptors);
var randomDescriptorsIndex2 = getRandomIndex(descriptors);

var randomCoverImage = covers[randomCoversIndex];
var randomTitleText = titles[randomTitlesIndex];
var randomDescriptor1 = descriptors[randomDescriptorsIndex1];
var randomDescriptor2 = descriptors[randomDescriptorsIndex2];

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

coverLocation.src = randomCoverImage
titleLocation.innerText = randomTitleText
firstTagLocation.innerText = randomDescriptor1
secondTagLocation.innerText = randomDescriptor2