// Variables
//Cover
var title = document.querySelector(".cover-title")
var img = document.querySelector(".cover-image")
var tagline = document.querySelector(".tagline")
var tagline1 = document.querySelector(".tagline-1")
var tagline2 = document.querySelector(".tagline-2")
var priceTag = document.querySelector(".price-tag")
// Button
var homeButton = document.querySelector(".home-button")
var randomButton = document.querySelector(".random-cover-button")
var saveButton = document.querySelector(".save-cover-button")
var viewButton = document.querySelector(".view-saved-button")
var makeButton = document.querySelector(".make-new-button")
// Form
var coverForm = document.querySelector(".form-view")
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg","Sunsets and Sorrows", "sunsets", "sorrows")
]
var currentCover
// Event Listeners
window.addEventListener("load", randomizeCover)
randomButton.addEventListener("click", randomizeCover)
makeButton.addEventListener("click", makeHidden)
makeButton.addEventListener("click", makeAppear)
// Event Handler
function randomizeCover() {
  title.innerText = titles[getRandomIndex(titles)]
  img.src = covers[getRandomIndex(covers)]
  tagline1.innerText = descriptors[getRandomIndex(descriptors)]
  tagline2.innerText = descriptors[getRandomIndex(descriptors)]
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function makeHidden() {
  title.classList.add("hidden")
  tagline.classList.add("hidden")
  img.classList.add("hidden")
  priceTag.classList.add("hidden")
}

function makeAppear() {
coverForm.classList.remove("hidden")
}
