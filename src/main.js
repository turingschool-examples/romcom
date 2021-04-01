// Create variables targetting the relevant DOM elements here 👇

var bookCover = document.querySelector(".cover-image");
var bookTitle = document.querySelector(".cover-title");
var bookTagline1 = document.querySelector(".tagline-1");
var bookTagline2 = document.querySelector(".tagline-2");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

//call changeCover every time the page loads
changeCover();
//call changeCover every time user clicks New Random Cover button

// Create your event handlers and other functions here 👇

function changeCover() {
  //generate random number using getRandomIndex & the cover array & save in a variable
  var coverIndex = getRandomIndex(covers);
  var newCover = covers[coverIndex];
  //generate random number using the titles array & save in a variable
  var titleIndex = getRandomIndex(titles);
  var newTitle = titles[titleIndex];
  //generate two random numbers using the descriptors array & save them in variables
  var descriptorIndex1 = getRandomIndex(descriptors);
  var newDescriptor1 = descriptors[descriptorIndex1];
  var descriptorIndex2 = getRandomIndex(descriptors);
  var newDescriptor2 = descriptors[descriptorIndex2];
  //note: for refactoring, include if/else that prevents descriptors from being the same word

  //update HTML DOM variables declared above to reflect these random indexes
  
  //call our Cover constructor function with the random indexes
  //put new Cover object in our savedCovers array
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
