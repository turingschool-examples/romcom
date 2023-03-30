// Create variables targetting the relevant DOM elements here 👇
var imgSrc = document.querySelector('.cover-image');
var randomTitle = document.querySelector('.cover-title')
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector(`.tagline-2`);

// We've provided a few variables below
// var savedCovers = [
//   createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
var currentCover = createCover((imgSrc, randomTitle, descriptor1, descriptor2))

// Add your event listeners here 👇
var randomCover = document.querySelector('.random-cover-button')

randomCover.addEventListener('click', createCover)

/* do we create a new function that uses getRandomIndex function as callback?*/

// Create your event handlers and other functions here 👇
randomTitle.innerText = titles[getRandomIndex(titles)]

descriptor1.innerText = descriptors[getRandomIndex(descriptors)];

descriptor2.innerText = descriptors[getRandomIndex(descriptors)];

imgSrc.src = covers[getRandomIndex(covers)];

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
