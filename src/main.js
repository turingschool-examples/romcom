// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var tagline = document.querySelector('.tagline')
var tagline = document.querySelector('.tagline')
var tagline = document.querySelector('.tagline')
var priceTag = document.querySelector('.price-tag')

var randomButtonCover = document.querySelector('.random-cover-button')
var saveButtonCover = document.querySelector('.save-cover-button')
var viewSavedCover = document.querySelector('.view-saved-button')
var makeNewCover = document.querySelector('.make-new-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// var image = document.querySelector('#image');

// image.addEventListener('click', function() {
//     image.src = 'https://dirask.com/static/bucket/1633375165831-yjQ7G6WQeL--image.png';
// });


// Create your event handlers and other functions here 👇


// We've provided one function to get you started

// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

function getRandomIndex(savedCovers) {
  return Math.floor(Math.random() * savedCovers.length);
}

function createBook(){
title.innerText = function getRandomIndex(title) {
  return (title(math.floor(math.random() * title.length)))
}

cover.src = function getRandomIndex(covers) {
  return ()
}







}