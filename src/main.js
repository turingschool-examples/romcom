// Create variables targetting the relevant DOM elements here 👇
var randomDesIndex1 = getRandomIndex(descriptors);
var randomDesIndex2 = getRandomIndex(descriptors);
var randomDescriptor1 = descriptors[randomDesIndex1];
var randomDescriptor2 = descriptors[randomDesIndex2];

var randomCoverIndex = getRandomIndex(covers);
var randomCover = covers[randomCoverIndex];

var randomTitleIndex = getRandomIndex(titles);
var randomTitle = titles[randomTitleIndex];
// console.log(new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2))
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
//on click - create a new random instance of the cover class

var button = document.querySelector('.random-cover-button');
button.addEventListener('click', createNewCover(), true)
// functionName would be a function we write that would


// Create your event handlers and other functions here 👇
function createNewCover() {
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2)
  return currentCover
}




// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
