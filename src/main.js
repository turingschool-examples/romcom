// Create variables targetting the relevant DOM elements here 👇
var loadCover = document.querySelector('.cover-image');
var loadTitle = document.querySelector('.cover-title');
var tag1 = document.querySelector('h3');
// var tag2 = document.querySelector('.tagline');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your eent handlers and other functions here 👇
// var loadTitle = titles[getRandomIndex(titles)];
loadCover.src = `${covers[getRandomIndex(covers)]}`
loadTitle.innerText = `${titles[getRandomIndex(titles)]}`
tag1.innerText = `${descriptors[getRandomIndex(descriptors)]}`
// tag2.innerText = `${descriptors[getRandomIndex(descriptors)]}`
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
