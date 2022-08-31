// Create variables targetting the relevant DOM elements here 👇
var {
  Cover,
} = require("../src/Cover.js")
// console.log(Cover);

var {
  covers,
  titles,
  descriptors
} = require("../src/data.js")
// console.log(covers);

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// console.log(savedCovers);


// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var randomCoverNumber = getRandomIndex(covers)
var randomTitleNumber = getRandomIndex(titles)
var randomDescriptor1 = getRandomIndex(descriptors)
var randomDescriptor2 = getRandomIndex(descriptors)


var currentCover = new Cover(covers[randomCoverNumber], titles[randomTitleNumber], descriptors[randomDescriptor1], descriptors[randomDescriptor2]);
console.log(currentCover);
