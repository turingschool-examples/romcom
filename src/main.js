// Create variables targetting the relevant DOM elements here 👇
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');

var randomButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;
// Add your event listeners here 👇
randomButton.addEventListener("click", displayNewCover);
window.addEventListener("load", displayNewCover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayNewCover() {
  bookCover.src = covers[getRandomIndex(covers)];
  bookTitle.innerText = titles[getRandomIndex(titles)];
  firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = descriptors[getRandomIndex(descriptors)];
}





















// var newCover = new Cover(
//   currentCover.src = covers[getRandomIndex(covers)],
//   currentTitle.innerText = titles[getRandomIndex(titles)],
//   firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)],
//   firstDescriptor.innerText = descriptors[getRandomIndex(descriptors)]
// );

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
