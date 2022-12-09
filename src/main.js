var homeImage = document.querySelector('.cover-image')
var homeTitle = document.querySelector('.cover-title')
var homeTagline1 = document.querySelector('.tagline-1')
var homeTagline2 = document.querySelector('.tagline-2')
var homeMainCover = document.querySelector('.main-cover')
var homeCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText) 


var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeCoverButton = document.querySelector('.make-new-button')


var savedCoversSection = document.querySelector('.saved-covers-section')
        savedCoversSection.innerHTML = "<h2> Windswept Hearts </h2>"


var userForm = document.querySelector('.form-view')


var whatToShow = [homeButton, userForm]
var whatToHide = [homeMainCover, randomButton, saveCoverButton]


var savedCoverPageElements = [homeButton, savedCovers]
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here -----------------------------------👇
window.addEventListener('load', generateNewCover)
randomButton.addEventListener("click", generateNewCover)

// --------------- Make new cover Button------------------------- 
// for make your own
makeCoverButton.addEventListener("click", activateCoverButton)


// for saved cover
viewSavedButton.addEventListener("click", activateViewSavedButton)


// Create your event handlers and other functions here------------- 👇
function generateNewCover() {
  homeImage.src = covers[getRandomIndex(covers)]
  homeTitle.innerText = titles[getRandomIndex(titles)]
  homeTagline1.innerText = descriptors[getRandomIndex(descriptors)]
  homeTagline2.innerText = descriptors[getRandomIndex(descriptors)]
  homeCover = new Cover(homeImage.src, homeTitle.innerText, homeTagline1.innerText, homeTagline2.innerText)
}

function activateCoverButton() {
  hideElements(whatToHide)
  showElements(whatToShow)
}

function activateViewSavedButton() {
  hideElements(whatToHide)
  showElements(savedCoverPageElements)
}

function hideElements(elementsToHide) {
  for (var i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].classList.add('hidden')
  }
}

function showElements(elementsToShow) {
  for (var i = 0; i < elementsToShow.length; i++) {
    elementsToShow[i].classList.remove('hidden')
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function test() {
  console.log('Is this working?')
}