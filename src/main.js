// Create variables targetting the relevant DOM elements here 👇

var homeButton = document.querySelector('.home-button');
var randomizeButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.main-cover');

var randomIndexes = [];
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover ;
// = new Cover(randomIndexes[0], randomIndexes[1], randomIndexes[2], randomIndexes[3]);

// Add your event listeners here 👇
randomizeButton.addEventListener('click', randomizeCovers);
// randomizeButton.addEventListener('click',console.log(new Cover(randomIndexes[0], randomIndexes[1], randomIndexes[2], randomIndexes[3])));
// randomizeButton.addEventListener('click', covers[0])
// Create your eent handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}//random number

//randomize
function randomizeCovers() {

  randomIndexes = [
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  ]

  currentCover = new Cover(randomIndexes[0], randomIndexes[1], randomIndexes[2], randomIndexes[3]);

  mainCover.innerHTML = `<img class="cover-image" src="${currentCover.cover}">
  <h2 class="cover-title">${currentCover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
  `
}
// var randomizeButton = document.querySelector('.random-cover-button');

randomizeCovers();
  //coverImage = imageArr.getRandomIndex
  //.innerHTML
  //coverTitle
  //tagline1 & 2
