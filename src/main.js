var currentCover;
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];




// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var priceTag = document.querySelector('.price-tag')

var randomButtonCover = document.querySelector('.random-cover-button')
var saveButtonCover = document.querySelector('.save-cover-button')
var viewSavedCover = document.querySelector('.view-saved-button')
var makeNewCover = document.querySelector('.make-new-button')

// We've provided a few variables below



title.innerText = titles[getRandomIndex(titles)]
cover.src = covers[getRandomIndex(covers)]
taglineOne.innerText = covers[getRandomIndex(descriptors)]
taglineTwo.innerText = covers[getRandomIndex(descriptors)]
//titles[0]
// Add your event listeners here 👇

// window.addEventListener("load", (event)
// var image = document.querySelector('#image');

// image.addEventListener('click', function() {
//     image.src = 'https://dirask.com/static/bucket/1633375165831-yjQ7G6WQeL--image.png';
// });


// Create your event handlers and other functions here 👇


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


// function getRandomTitles(titles) {
//   return (Math.floor(Math.random() * titles.length))
// }

// function getRandomCovers(covers) {
//   return (Math.floor(Math.random() * covers.length))
// }

// function getRandomDescriptors(descriptors) {
//   return (Math.floor(Math.random() * descriptors.length))
// }

// function getRandomIndex(descriptors) {
//   return (descriptors(math.floor(math.random() * discriptors.length)))
// }
function createBook(){
  currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText)
}



// function getRandomIndex(savedCovers) {
//   return Math.floor(Math.random() * savedCovers.length);
// 