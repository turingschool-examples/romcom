// Create variables targetting the relevant DOM elements here 👇

var randomImage = covers[getRandomIndex(covers)];

var randomTitle = titles[getRandomIndex(titles)];

var descriptor1 = descriptors[getRandomIndex(descriptors)];

var descriptor2 = descriptors[getRandomIndex(descriptors)];

var randomImageGenerator = new Cover(randomImage, randomTitle, descriptor1, descriptor2);

var image = document.querySelector('.src');

image.innerHTML = randomImage;

var title = document.querySelector('h2');
title.innerText = randomTitle;

var tagline1 = document.querySelector('.tagline-1');
tagline1.innerText = descriptor1;

var tagline2 = document.querySelector('.tagline-2');
tagline2.innerText = descriptor2;




nodeImage = randomImageGenerator;

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
