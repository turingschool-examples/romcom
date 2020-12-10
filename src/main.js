// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var button = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = savedCovers;

// Add your event listeners here 👇
button.addEventListener('click', newCoverButton);

// Create your event handlers and other functions here 👇
//show new random button
function newCoverButton() {
  currentCover.cover = covers[getRandomIndex(covers)];
  currentCover.title = titles[getRandomIndex(titles)];
  currentCover.tagline1 = descriptors[getRandomIndex(descriptors)];
  currentCover.tagline2 = descriptors[getRandomIndex(descriptors)];
  coverImg.src = currentCover.cover;
  title.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}
//change loading page
coverImg.src = covers[getRandomIndex(covers)];
title.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];


// We've provided one function to get you started


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
