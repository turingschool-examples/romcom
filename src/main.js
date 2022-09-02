var randomCoverButton = document.querySelector('.random-cover-button')
var mainCoverDisplay = document.querySelector('.main-cover')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedCovers = document.querySelector('.view-save-button')
var makeYourOwnCover = doccument.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var displayCoverImage = document.querySelector('.cover-image')
var displayCoverTitle = document.querySelector('.cover-title')
var displayTagline1 = document.querySelector('.tagline-1')
var displayTagline2 = document.querySelector('.tagline-2')

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover {
currentCover.cover = Math.floor(Math.random(cover) * covers.length)
currentCover.title = Math.floor(Math.random(title) * titles.length)
currentCover.tagline1 = Math.floor(Math.random(tagline1) * descriptors.length)
currentCover.tagline2 = Math.floor(Math.random(tagline2) * descriptors.length)
}
// Add your event listeners here 👇
randomCoverButton.addEventListener('click', displayNewRandom)

// Create your event handlers and other functions here 👇)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createNewRandom() {
  return currentCover
}

function displayNewRandom() {
  mainCoverDisplay.innerHTML = `
     <img src=${currentCover.cover}>
     <h2>${currentCover.title}</h2>
     <span>${currentCover.tagline1}</span>
     <span>${currentCover.tagline2}</span>
    `
  
}

