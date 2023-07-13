// Create variables targetting the relevant DOM elements here 👇
// pull test! PE
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-Title');
var tagLine = document.querySelector('.tagline');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2')
var image = document.querySelector('.price-tag');
var imageOverLay = document.querySelector('.overlay');


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
//we will need an event listener for when the page loads
//and image title and two descriptors

// Create your event handlers and other functions here 👇

function showRandomCover() {
 var randomCover = covers[getRandomIndex(covers)] 
 var randomTitle = titles[getRandomIndex(titles)]  
 var randomDescriptor1 = descriptors[getRandomIndex(descriptors)]  
 var randomDescriptor2 = descriptors[getRandomIndex(descriptors)] 
 
 createPoster(randomCover, randomTitle, randomDescriptor1, randomDescriptor2) 
}//Data Model



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
