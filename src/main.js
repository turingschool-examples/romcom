// Create variables targetting the relevant DOM elements here 👇
//When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');

// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
//var currentCover = randomCover(covers, titles, descriptors);

//event listeners


// event handlers
function pageLoad(){
  //randomCover();
  
}

function createCover(){
  var newCover = randomCover();
  coverImage.src = newCover.cover;
  coverTitle.innerText = newCover.title;
  tagline1.innerText = newCover.tagLine1;
  tagline2.innerText = newCover.tagLine2;
}

function randomCover(covers, titles, descriptors) {
  return new Cover(
    getRandomElement(covers),
    getRandomElement(titles),
    getRandomElement(descriptors),
    getRandomElement(descriptors))
}

function getRandomElement(array) {
  return array[getRandomIndex(array)]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
