// Create variables targetting the relevant DOM elements here 👇



var coverImg = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
title.addEventListener('load', changeTitle(title));
coverImg.addEventListener('load', changeCoverImg(coverImg));
descriptor1.addEventListener('load', changeTagline(descriptor1));
descriptor2.addEventListener('load', changeTagline(descriptor2));

// Create your event handlers and other functions here 👇


function changeTitle(title) {
  title.innerText = titles[getRandomIndex(titles)];
}

function changeCoverImg(coverImg) {
  coverImg.src = covers[getRandomIndex(covers)];
}

function changeTagline(descriptor) {
  descriptor.innerText = descriptors[getRandomIndex(descriptors)];
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
