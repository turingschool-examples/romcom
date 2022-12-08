// Create variables targetting the relevant DOM elements here 👇
var homeCover = document.querySelector('.cover-image')
var homeTitle = document.querySelector('.cover-title')
var homeTagline1 = document.querySelector('.tagline-1')
var homeTagline2 = document.querySelector('.tagline-2')
var mainCover = document.querySelector('.main-cover')


var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeCoverButton = document.querySelector('.make-new-button')

var savedCoversSection = document.querySelector('.saved-covers-section')
savedCoversSection.innerHTML = `<h2> ${'Windswept Hearts'} </h2>`


var userForm = document.querySelector('.form-view')
var whatToShow = [homeButton, userForm]
var whatToHide = [mainCover, randomButton, saveCoverButton]
var showSavedCovers = [homeButton, savedCovers]

// We've provided a few variables below-------------------------------
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
// console.log(currentCover)

var currentCover = new Cover(homeCover.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText) 


// Add your event listeners here -----------------------------------👇
window.addEventListener('load', generateNewCover)
// window.addEventListener('load', showCurrentCover)

document.querySelector('.random-cover-button').addEventListener("click", generateNewCover)

// --------------- Make new cover Button------------------------- 
// Can probably use button var names instead of query selectors
// for make your own
document.querySelector('.make-new-button').addEventListener("click", hideElements.bind(null, whatToHide))

document.querySelector('.make-new-button').addEventListener("click", showElements.bind(null, whatToShow))

// for saved cover
document.querySelector('.view-saved-button').addEventListener("click", hideElements.bind(null, whatToHide))

document.querySelector('.view-saved-button').addEventListener("click", showElements.bind(null, showSavedCovers))

// document.querySelector('.random-cover-button').addEventListener("click", showCurrentCover)


// Create your event handlers and other functions here------------- 👇


// show the cover we generated
function generateNewCover() {
  homeCover.src = covers[getRandomIndex(covers)]
  homeTitle.innerText = titles[getRandomIndex(titles)]
  homeTagline1.innerText = descriptors[getRandomIndex(descriptors)]
  homeTagline2.innerText = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(homeCover.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText)
}
// function showCurrentCover() {
//   currentCover = new Cover(homeCover.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText)
// }

function hideElements(hideElementsArray) {
  for (var i = 0; i < hideElementsArray.length; i++) {
    hideElementsArray[i].classList.add('hidden')
  }
}

function showElements(showElementsArray) {
  for (var i = 0; i < showElementsArray.length; i++) {
    showElementsArray[i].classList.remove('hidden')
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function test() {
  console.log('Is this working?')
}


