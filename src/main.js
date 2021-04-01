// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = document.querySelector('.random-cover-button');

var htmlImage = document.querySelector('.cover-image');
var htmlTitle = document.querySelector('.cover-title');
var htmlTagline1 = document.querySelector('.tagline-1');
var htmlTagline2 = document.querySelector('.tagline-2');

// Add your event listeners here 👇

window.addEventListener("load", displayRandomHomePage);
currentCover.addEventListener("click", displayRandomImage)

// Create your event handlers and other functions here 👇


//ITERATION 0 - RANDOM MAIN PAGE IMAGE, TITLE, TAGLINE & 2 DESCRIPTORS
// We've provided one function to get you started

function getRandomImage() {
  var cover = covers[Math.floor(Math.random() * covers.length)]
  return cover;
}
function displayRandomImage() {
  htmlImage.src = getRandomImage();
  // console.dir(htmlImage);
  // console.log(htmlImage);
}

function getRandomTitle() {
  var title = titles[Math.floor(Math.random() * titles.length)]
  return title;
}
function displayRandomTitle() {
  htmlTitle.innerText = getRandomTitle();
}

function getRandomTagline1() {
  var tagline1 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline1;
}
function displayRandomTagline1() {
  htmlTagline1.innerText = getRandomTagline1();
}

function getRandomTagline2() {
  var tagline2 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline2;
}
function displayRandomTagline2() {
  htmlTagline2.innerText = getRandomTagline2();
}

function displayRandomHomePage() {
  displayRandomImage();
  displayRandomTitle();
  displayRandomTagline1();
  displayRandomTagline2();
}


//
// function createRandomHomePage() {
//   var cover = covers[getRandomIndex(covers)];
//   var title = titles[getRandomIndex(titles)];
//   var tagline1 = descriptors[getRandomIndex(descriptors)];
//   var tagline2 = descriptors[getRandomIndex(descriptors)];
//   currentCover = new Cover(cover, title, tagline1, tagline2);
//   displayRandomHomePage();
// }
//
// function displayRandomHomePage() {
//   htmlImage.src = currentCover.coverImgSrc;
//   htmlTitle.innerText = currentCover.title;
//   htmlTagline1.innerText = currentCover.descriptor1;
//   htmlTagline2.innerText = currentCover.descriptor2;
// }
