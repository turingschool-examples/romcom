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

// User form buttons 1.to get there 2.submit
var makeCoverButton = document.querySelector('.make-new-button')
var newBookButton = document.querySelector('.create-new-book-button')


var savedView = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section')


var userForm = document.querySelector('.form-view')


var makeUserFormElements = [homeButton, userForm]
var homePageElements = [homeMainCover, randomButton, saveCoverButton]

// var savedCoverPageElements = [homeButton, savedCovers]
var savedCoverPageElements = [homeButton, savedView]
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here -----------------------------------👇
window.addEventListener('load', generateNewCover)
randomButton.addEventListener("click", generateNewCover)

// --------------- Make new cover Button------------------------- 
// for make your own
makeCoverButton.addEventListener("click", activateCoverButton)
homeButton.addEventListener("click", activateHomeButton)


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

function activateHomeButton() {
  showElements(homePageElements)
  hideElements(makeUserFormElements)
  hideElements(savedCoverPageElements)
}

function activateCoverButton() {
  hideElements(homePageElements)
  showElements(makeUserFormElements)
  hideElements(savedCoverPageElements)
}

function activateViewSavedButton() {
  hideElements(homePageElements)
  hideElements(makeUserFormElements)
  showElements(savedCoverPageElements)
  // savedCoversSection.innerHTML = 
  //   `<img class="mini-cover" src="./assets/prairie.jpg">
  //   <h2 class="mini-cover cover-title">Windswept Hearts</h2>
  //   <h3 class="tagline">A tale of <span class="tagline-1">passion</span> and <span class="tagline-2">woe</span></h3>
  //   <img class="price-tag" src="./assets/price.png">
  //   <img class="overlay" src="./assets/overlay.png">`
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