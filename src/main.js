var randomCoverButton = document.querySelector('.random-cover-button')
var mainCoverDisplay = document.querySelector('.main-cover')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedCovers = document.querySelector('.view-saved-button')
var makeYourOwnCover = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var displayCoverImage = document.querySelector('.cover-image')
var displayCoverTitle = document.querySelector('.cover-title')
var displayTagline1 = document.querySelector('.tagline-1')
var displayTagline2 = document.querySelector('.tagline-2')
var formPage = document.querySelector('.form-view')
var homePage = document.querySelector('.home-view')
var savedPage = document.querySelector('.saved-view')


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover() 

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', displayNewRandom)
makeYourOwnCover.addEventListener('click', displayFormPage)
viewSavedCovers.addEventListener('click', displaySavedPage)
homeButton.addEventListener('click', displayHomePage)

// Create your event handlers and other functions here 👇)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createNewRandom(currentCover) {
  currentCover.cover = covers[getRandomIndex(covers)]
  currentCover.title = titles[getRandomIndex(titles)]
  currentCover.tagline1 = descriptors[getRandomIndex(descriptors)]
  currentCover.tagline2 = descriptors[getRandomIndex(descriptors)]
  return currentCover
}

function displayNewRandom() {
displayCoverImage.src = currentCover.cover
displayCoverTitle.innerText = currentCover.title
displayTagline1.innerText = currentCover.tagline1
displayTagline2.innerText = currentCover.tagline2
  
}

function displayFormPage() {
  formPage.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  homePage.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}

function displayHomePage() {
  savedPage.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  formPage.classList.add('hidden')
}

function displaySavedPage() {
  savedPage.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  formPage.classList.add('hidden')
}