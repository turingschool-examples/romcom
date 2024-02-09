// Create variables targetting the relevant DOM elements here 👇

// iteration 0 variables

var mainCover = document.querySelector('.main-cover')
var coverImage = document.querySelector('.cover-image')
var imageTitle = document.querySelector('.poster-title')
var coverTitle = document.querySelector('.cover-title')
var tag1 = document.querySelector('.tagline-1')
var tag2 = document.querySelector('.tagline-2')

//iteration 1 variables 

var coverButton = document.querySelector('.random-cover-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')

var formView = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')

//iteration 2 variables 

var createNewBookButton = document.querySelector('.make-new-button')


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

//iteration 0 event listener

coverButton.addEventListener('click', createRandomCover)

// iteration 1 event listeners

makeNewButton.addEventListener('click', reactMakeNew)
homeButton.addEventListener('click', reactHomeButton)
viewSavedButton.addEventListener('click', reactViewSaved)

//iteration 2 event listeners

// createNewBookButton.addEventListener('click', function(event) {
//   event.preventDefault()
  
// }
// Create your event handlers and other functions here 👇

// iteration 0 functions

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

//iteration 1 functions 

function reactMakeNew(){
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  coverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden')
  viewSavedButton.classList.remove('hidden')
}

function reactHomeButton(){
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  coverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden')
}

function reactViewSaved(){
  homeView.classList.add('hidden');
  formView.classList.add('hidden')
  savedView.classList.remove('hidden');
  coverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden')
}

//iteration 2 functions 



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

