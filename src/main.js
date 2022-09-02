var randomCoverButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeYourOwnButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var mainCoverDisplay = document.querySelector('.main-cover')
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
var generatedCover = covers[getRandomIndex(covers)]
var generatedTitle = titles[getRandomIndex(titles)]
var generatedTagline1 = descriptors[getRandomIndex(descriptors)]
var generatedTagline2 = descriptors[getRandomIndex(descriptors)]

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', displayNewRandom)
makeYourOwnButton.addEventListener('click', displayFormPage)
viewSavedButton.addEventListener('click', displaySavedPage)
homeButton.addEventListener('click', displayHomePage)

// Create your event handlers and other functions here 👇)
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createNewRandom() {
  var currentCover = new Cover()
  currentCover.cover = covers[getRandomIndex(covers)]
  currentCover.title = titles[getRandomIndex(titles)]
  currentCover.tagline1 = descriptors[getRandomIndex(descriptors)]
  currentCover.tagline2 = descriptors[getRandomIndex(descriptors)]
  return currentCover
}

// function generateRandom() {
//   var coverImgSrc = covers[getRandomIndex(covers)]
//   var title = titles[getRandomIndex(titles)]
//   var descriptor1 = descriptors[getRandomIndex(descriptors)]
//   var descriptor2 = descriptors[getRandomIndex(descriptors)]
//   var randomCover = new Cover(coverImgSrc, title, descriptor1, descriptor2)
//   return randomCover
// }

function displayNewRandom() {

  displayCoverImage.src = currentCover.cover
  displayCoverTitle.innerText = currentCover.title
  displayTagline1.innerText = currentCover.tagline1
  displayTagline2.innerText = currentCover.tagline2
  
}

function displayFormPage() {
  formPage.classList.remove('hidden')
  homePage.classList.add('hidden')
  savedPage.classList.add('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}

function displayHomePage() {
  formPage.classList.add('hidden')
  homePage.classList.remove('hidden')
  savedPage.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}

function displaySavedPage() {
  formPage.classList.add('hidden')
  homePage.classList.add('hidden')
  savedPage.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}