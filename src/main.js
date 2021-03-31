// Create variables targetting the relevant DOM elements here 👇
//When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];




var currentCover = randomCover(covers, titles, descriptors);

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


//We've provided one function to get you started
function getRandomElement(array) {
  return array[getRandomIndex(array)]
}

function randomCover(covers, titles, descriptors) {
  return new Cover(
    getRandomElement(covers),
    getRandomElement(titles),
    getRandomElement(descriptors),
    getRandomElement(descriptors))
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
