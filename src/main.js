// Create variables targetting the relevant DOM elements here 👇
//cover-image,cover-title, tagline-1,tagline-2, random-cover-button
var randomCoverButton = document.querySelector('.random-cover-button');
var randomCover = document.querySelector('.cover-image');
var randomTitle = document.querySelector('.cover-title');
var randomTagline1 = document.querySelector('.tagline-1');
var randomTagline2 = document.querySelector('.tagline-2');
var coverContainer = document.querySelector('.main-cover')

// We've provided a few variables below
window.onload = () => clearElement();

var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


randomCoverButton.addEventListener('click', () =>{
  
  randomTitle.innerText = (titles[getRandomIndex(titles)]);
  randomTagline1.innerText = (descriptors[getRandomIndex(descriptors)])
  randomTagline2.innerText = (descriptors[getRandomIndex(descriptors)])
  randomCover.src = (covers[getRandomIndex(covers)]);
  // createCover() 
})

function clearElement(element){
  while (element.firstChild){
    element.removeChild(element.firstChild)
  }
}
// Create your event handlers and other functions here 👇


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
