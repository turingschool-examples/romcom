// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var saveButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var coverTitle = document.querySelector('.cover-title')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')
var coverImage = document.querySelector('.cover-image')

var formView = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', generateRandomCover)

makeNewButton.addEventListener('click', function(){
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
})

function generateRandomCover() {
  coverTitle.innerText = titles[getRandomIndex(titles)]
  tagline1.innerText = descriptors[getRandomIndex(descriptors)]
  tagline2.innerText = descriptors[getRandomIndex(descriptors)]
  coverImage.src = covers[getRandomIndex(covers)]
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
