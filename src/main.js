// Create variables targetting the relevant DOM elements here 👇
var newRandom = document.querySelector('.random-cover-button')
var saveCover = document.querySelector('.save-cover-button')
var viewSaved = document.querySelector('.view-saved-button')
var makeCover = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.cover-image')
var mainTitle = document.querySelector('.cover-title')
var mainTag1 = document.querySelector('.tagline-1')
var mainTag2 = document.querySelector('.tagline-2')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
newRandom.addEventListener("click", generateRandomCover)


// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover(){
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  console.log(currentCover);

  pageLoadRandom()
}

function pageLoadRandom(){
  mainCover.src = currentCover.cover
  mainTitle.innerText = currentCover.title
  mainTag1.innerText = currentCover.tagline1
  mainTag2.innerText = currentCover.tagline2
}

function test(){
  console.log("event works")
}

//generate a new instance of a Cover every time the page loads.
//generate a new instance of a Cover every time you click the show random button
//


generateRandomCover();