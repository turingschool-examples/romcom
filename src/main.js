//Create variables targetting the relevant DOM elements here 👇


var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var newRandomCoverBtn = document.querySelector('.random-cover-button');



/////////// GLOBAL VARIABLES //////////
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover()

/////////////////////////////////////


/////// EVENT LISTENERS👇//////

newRandomCoverBtn.addEventListener('click', showRandomCover)

///////////////////////////////

////// EVENT HANDLERS AND OTHER FUNCTIONS👇///////////

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}
getRandomCover()


function showRandomCover() {
  getRandomCover()

}