var currentCover;
var title = document.querySelector('.cover-title')
var cover = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var viewForm = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

//Button Variables
var randomCoverButton = document.querySelector('.random-cover-button')
var homeButton = document.querySelector(".home-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var makeCoverButton = document.querySelector(".make-new-button")

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandom);
window.addEventListener("load", generateRandom)
makeCoverButton.addEventListener("click", viewMakeCover)

//  Create your event handlers and other functions here 👇
function generateRandom() {
  var titleIndex = getRandomIndex(titles)
  var coverIndex = getRandomIndex(covers)
  var taglineOneIndex = getRandomIndex(descriptors)
  var taglineTwoIndex = getRandomIndex(descriptors)
  
  currentCover = new Cover (covers[coverIndex], titles[titleIndex], descriptors[taglineOneIndex], descriptors[taglineTwoIndex])

  title.innerText = titles[titleIndex]
  cover.src =covers[coverIndex]
  taglineOne.innerText = descriptors[taglineOneIndex]
  taglineTwo.innerText = descriptors[taglineTwoIndex]
} 

function viewMakeCover () {
viewForm.classList.remove("hidden")
homeView.classList.add("hidden")
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}




