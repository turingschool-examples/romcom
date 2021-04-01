// Create variables targetting the relevant DOM elements here 👇
//When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
//button
var randomButton = document.querySelector('.random-cover-button');
var saveButton = document.querySelector('.save-cover-button');
var viewButton = document.querySelector('.view-saved-button');
var makeButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
//var currentCover = randomCover(covers, titles, descriptors);


//event listeners


// event handlers

//put in the function to update the cover and show
randomButton.addEventListener('click', function(){
  // var newCover = createCover();
  coverImage.src = getRandomElement(covers);
  coverTitle.innerText = getRandomElement(titles);
  tagLine1.innerText = getRandomElement(descriptors);
  tagLine2.innerText = getRandomElement(descriptors);
});


function pageLoad(){
  //randomCover();
}

//swapped function names
// function randomCover(){
//   var newCover = createCover();
//   coverImage.src = newCover.cover;
//   coverTitle.innerText = newCover.title;
//   tagline1.innerText = newCover.tagLine1;
//   tagline2.innerText = newCover.tagLine2;
// }

//swapped function names
function createCover(covers, titles, descriptors) {
  return new Cover(
    getRandomElement(covers),
    getRandomElement(titles),
    getRandomElement(descriptors),
    getRandomElement(descriptors));
}

function getRandomElement(array) {
  return array[getRandomIndex(array)]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
