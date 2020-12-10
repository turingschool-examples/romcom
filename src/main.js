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
// var randomCover = coverImg.src = covers[getRandomIndex(covers)];
// var randomTitle = title.innerText = titles[getRandomIndex(titles)];
// var randomTagline1 = tagline1.innerText = descriptors[getRandomIndex(descriptors)];
// var randomTagline2 = tagline2.innerText = descriptors[getRandomIndex(descriptors)];
// 
// var currentCover = new Cover(randomCover, randomTitle, randomTagline1, randomTagline2);

function testImage() {
  coverImg.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

// Add your event listeners here 👇
button.addEventListener('click', testImage);

// Create your event handlers and other functions here 👇
coverImg.src = covers[getRandomIndex(covers)];
title.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];


// We've provided one function to get you started


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
