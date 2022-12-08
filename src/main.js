// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover; // make new object instance every created poster (for savin')

var randomCoverButton = document.querySelector('.random-cover-button');

var newRandomCover = document.querySelector('.cover-image');

var newRandomTitle = document.querySelector('.cover-title');

var newRandomTagOne = document.querySelector('.tagline-1');

var newRandomTagTwo = document.querySelector('.tagline-2');

// Add your event listeners here 👇

randomCoverButton.addEventListener('click', getRandomCover);
window.addEventListener('load', getRandomCover);



// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



function getRandomCover(){
newRandomCover.src = covers[getRandomIndex(covers)];
newRandomTitle.innerText = titles[getRandomIndex(titles)];
newRandomTagOne.innerText = descriptors[getRandomIndex(descriptors)];
newRandomTagTwo.innerText = descriptors[getRandomIndex(descriptors)];

}

//MAKE NEW BRANCH!!!