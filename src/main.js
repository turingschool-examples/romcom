// Create variables targetting the relevant DOM elements here 👇
var titlesIndex = getRandomIndex(titles)
var taglineIndex = getRandomIndex(descriptors)
var taglineIndex2 = getRandomIndex(descriptors)
var coverIndex = getRandomIndex(covers)
var title = document.querySelector('h2');
var tagline = document.querySelector('h3');
var mainCover = document.querySelector('img')
var randomCoverButton = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {
  id: Date.now(),
  coverImg: covers[coverIndex],
  title: titles[titlesIndex],
  tagline1: descriptors[taglineIndex],
  tagline2: descriptors[taglineIndex2]
}

function randomCover() {
  title.innerHTML = currentCover.title;
  mainCover.src = currentCover.coverImg;
  tagline.innerHTML = `A tale of ${currentCover.tagline1} and ${currentCover.tagline2}`
}

randomCover(currentCover);

// Add your event listeners here 
randomCoverButton.addEventListener("click", randomCover)

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

