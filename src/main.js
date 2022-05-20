// Create variables targetting the relevant DOM elements here 👇
var mainCover = document.querySelector('.main-cover')
var randomButton = document.querySelector('.random-cover-button')
var saveButton = document.querySelector('.save-cover-button')
var viewButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var coverTitle = document.querySelector('.cover-title')
var coverImage = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover();

// Add your event listeners here 👇

document.addEventListener('click', getRandomCoverPageLoad); //**not right
//add event listener to element you want it to listen to
// window.addEventListener.onload
// we want this to randomize the cover



// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function getRandomIndex(covers) {
//   var getImage = Math.floor(Math.random() * covers.length);
//   coverImage.innerHTML = `<img src=${getCovers}`;
// }
//
// function getRandomIndex(titles) {
//   var getTitles = Math.floor(Math.random() * titles.length);
//   coverTitle.innerText = getTitles;
// }
//
// function getRandomIndex(descriptor1) {
//   var getDescriptor1 = Math.floor(Math.random() * descriptors.length);
//   taglineOne.innerText = getDescriptor1;
// }
//
// function getRandomIndex(descriptor2) {
//   var getDescriptor2 = Math.floor(Math.random() * descriptors.length);
//   taglineTwo.innerText = getDescriptor2;
// }

var currentCover = new Cover()


function getRandomCoverPageLoad() {
  var cover = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(cover, title, descriptor1, descriptor2)
  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  console.log(currentCover)
  taglineOne.innerText = currentCover.tagline1
  taglineTwo.innerText = currentCover.tagline2
}



function randomCoverGenerator() {
  return currentCover
}
randomCoverGenerator()

getRandomCoverPageLoad()
//use getRandomIndex to generate
//variables stand for random numbers, inside parameters is one of the arrays in data.js, need each of the arrays and descriptors twice
// //function getRandomIndex(covers, titles, descriptor1, descriptor2) {
//   var getRandom = Math.floor(Math.random(covers[i], titles[i], descriptor1[i]), descriptor2[i] * covers.length);
//   return getRandom
// create variables to pass into cover that has that value
