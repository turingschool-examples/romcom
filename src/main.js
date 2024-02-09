// Create variables targetting the relevant DOM elements here 👇

var mainCover = document.querySelector('.main-cover')
var coverImage = document.querySelector('.cover-image')
var imageTitle = document.querySelector('.poster-title')
var coverTitle = document.querySelector('.cover-title')
var tag1 = document.querySelector('.tagline-1')
var tag2 = document.querySelector('.tagline-2')
var coverButton = document.querySelector('.random-cover-button')


var randomCoverIndex = getRandomIndex(covers)
var randomTitleIndex = getRandomIndex(titles)
var randomTags1Index = getRandomIndex(descriptors)
var randomTags2Index = getRandomIndex(descriptors)

var chosenRandomTitle = titles[randomTitleIndex]
var chosenRandomCoverPath = covers[randomCoverIndex]
var chosenRandomTag1 = descriptors[randomTags1Index]
var chosenRandomTag2 = descriptors[randomTags2Index]









// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇

coverButton.addEventListener('click', createRandomCover)

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

function createRandomCover() {
  var randomCoverIndex = getRandomIndex(covers)
  var randomTitleIndex = getRandomIndex(titles)
  var randomTags1Index = getRandomIndex(descriptors)
  var randomTags2Index = getRandomIndex(descriptors)
  
  var chosenRandomCoverPath = covers[randomCoverIndex]
  var chosenRandomTitle = titles[randomTitleIndex]
  var chosenRandomTag1 = descriptors[randomTags1Index]
  var chosenRandomTag2 = descriptors[randomTags2Index]

  coverImage.src = chosenRandomCoverPath
  coverTitle.innerText = chosenRandomTitle
  tag1.innerText = chosenRandomTag1
  tag2.innerText = chosenRandomTag2

  currentCover = createCover(chosenRandomCoverPath, chosenRandomTitle, chosenRandomTag1, chosenRandomTag2);
}
