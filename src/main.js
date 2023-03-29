// Create variables targetting the relevant DOM elements here 👇
var showNewRandomCoverButton = document.querySelector('.random-cover-button');
var currentCover = document.querySelector('.cover-image');
var currentTitle = document.querySelector('.cover-title');
var currentDesc1 = document.querySelector('.tagline-1');
var currentDesc2 = document.querySelector('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here 👇
showNewRandomCoverButton.addEventListener('click', getRandomCover);


// Create your event handlers and other functions here 👇
function getRandomImage() {
  var randomIndex = getRandomIndex(covers);
  return covers[randomIndex];
}

function getRandomTitle() {
  var randomIndex = getRandomIndex(titles);
  return titles[randomIndex];
}

function getRandomDesc() {
  var randomIndex = getRandomIndex(descriptors);
  return descriptors[randomIndex];
}

function getRandomCover() {
  var randomCover = createCover(getRandomImage(), getRandomTitle(), getRandomDesc(), getRandomDesc());
  currentCover.src = randomCover.coverImg;
  currentTitle.innerText = randomCover.title;
  currentDesc1.innerText = randomCover.tagline1;
  currentDesc2.innerText = randomCover.tagline2;
  return randomCover;
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
