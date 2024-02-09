// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagLine1 = document.querySelector('.tagline-1');
var coverTagLine2 = document.querySelector('.tagline-2');
var buttonRandomCover = document.querySelector('.random-cover-button');

// We've provided a few variables below

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
buttonRandomCover.addEventListener('click', init);

// Create your event handlers and other functions here 👇
function init() {
  currentCover = randomCover();
  updateCover();
};

function updateCover() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  coverTagLine1.innerText = currentCover.tagline1;
  coverTagLine2.innerText = currentCover.tagline2;
};

// We've provided two functions to get you started

function getRandomIndex(array) {
  var randomIndex =  Math.floor(Math.random() * array.length);
  var randItem = array[randomIndex];
    return randItem;
};

console.log(getRandomIndex(covers));

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};

function randomCover() {
  return createCover(
    getRandomIndex(covers),
    getRandomIndex(titles),
    getRandomIndex(descriptors),
    getRandomIndex(descriptors)
    );
}

init();

// "make your own over"
// HOME, VIEW SAVED COVERS, MAKE YOUR OWN COVER
// in the top row show: home
// in top row HIDE: show new random cover, save cover
// see form, homepage view, save cover

// "view saved covers"
// HOME, VIEW SAVED COVERS, MAKE YOUR OWN COVER
// in the top row SHOW: home
// in the top row HIDE: show new random cover, save cover
// show the saved covers section, hide homepage, hide the make your cover view

// "home"
// only show the home section
// show: Show new random cover, save cover should be visible
// hide: home