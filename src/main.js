// Variables
//Cover

var title = document.querySelector('.cover-title')
var img = document.querySelector('.cover-image')
var tagline = document.querySelector('.tagline')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')
var priceTag = document.querySelector('.price-tag')
// Button
var homeButton = document.querySelector('.home-button')
var randomButton = document.querySelector('.random-cover-button')
var saveButton = document.querySelector('.save-cover-button')
var viewSaveButton = document.querySelector('.view-saved-button')
var makeButton = document.querySelector('.make-new-button')
// Form
var coverForm = document.querySelector('.form-view')
var userCover = document.querySelector('.user-title')
var userTitle = document.querySelector('.user-title')
var userDesc1 = document.querySelector('.user-desc1')
var userDesc2 = document.querySelector('.user-desc2')
var userBook = (userCover, userTitle, userDesc1, userDesc2)
var createButton = document.querySelector('.create-new-book-button')
// Views
var homeView = document.querySelector('.home-view')
var saveView = document.querySelector('.saved-covers-section')
// Saved Books
var coverArr = []
var titleArr = []
var taglineArr1 = []
var taglineArr2 = []

var savedCovers = [
  new Cover('http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg','Sunsets and Sorrows', 'sunsets', 'sorrows')
]
var currentCover;
// Event Listeners
window.addEventListener('load', randomizeCover)
randomButton.addEventListener('click', randomizeCover)
makeButton.addEventListener('click', viewForm)
viewSaveButton.addEventListener('click', viewSave)
homeButton.addEventListener('click', viewHome)
createButton.addEventListener('click', saveData)
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
function viewForm() {
  homeView.classList.add('hidden')
  coverForm.classList.remove('hidden')
}
function viewSave() {
  homeView.classList.add('hidden')
  saveButton.classList.add('hidden')
  randomButton.classList.add('hidden')
  saveView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
}
function viewHome() {
  homeView.classList.remove('hidden')
  homeButton.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveButton.classList.remove('hidden')
}
function saveData() {
  //push all info to existing arrays, create a new instance with info, and display instance
  covers.push(userCover.value)
  titles.push(userTitle.value)
  descriptors.push(userDesc1.value, userDesc2.value)

var newCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
title.innerText = newCover.titles
cover.innerText = newCover.cover
tagline1.innerText = newCover.tagline1
tagline2.innerText = newCover.tagline2
}
