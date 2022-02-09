// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


var currentCover = document.querySelector('.cover-image');
currentCover.src = covers[getRandomIndex(covers)];
var currentTitle = document.querySelector('.cover-title');
currentTitle.innerText = titles[getRandomIndex(titles)];
var firstDescriptor = document.querySelector('.tagline-1');
firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
var secondDescriptor = document.querySelector('.tagline-2');
secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)];



























// Save for Later
// var randomCover = covers[getRandomIndex(covers)]
// var randomTitle = titles[getRandomIndex(titles)]
// var randomDescriptor = descriptors[getRandomIndex(descriptors)]

// var cover = new Cover(
//   covers[getRandomIndex(covers)], 
//   titles[getRandomIndex(titles)], 
//   descriptors[getRandomIndex(descriptors)], 
//   descriptors[getRandomIndex(descriptors)],
//   );