// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')
var randButton = document.querySelector('.random-cover-button')
var makeOwnCoverButton = document.querySelector('.make-new-button')
var coverData = document.querySelector('.home-view')
var formData = document.querySelector('.form-view')
var homeButton = document.querySelector('.home-button')
var saveButton = document.querySelector('.save-cover-button')
var savedCoversButton = document.querySelector('.view-saved-button')
var savedData = document.querySelector('.saved-view')
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage, coverTitle, descriptor1, descriptor2)

// Add your event listeners here 👇
window.addEventListener('load', getRandomCover)
randButton.addEventListener('click', getRandomCover)
makeOwnCoverButton.addEventListener('click', switchToForm)
savedCoversButton.addEventListener('click', switchToSaved)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)]
  coverTitle.innerText = titles[getRandomIndex(titles)]
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)]
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)]
}
function switchToForm() {
  coverData.classList.add('hidden')
  formData.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  saveButton.classList.add('hidden')
  randButton.classList.add('hidden')
}

function switchToSaved() {
  coverData.classList.add('hidden')
  formData.classList.add('hidden')
  saveButton.classList.add('hidden')
  randButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedData.classList.remove('hidden')
}

//psuedocode here:
// Query Selector notes -
// syntax to affect "random cover button":

// document.querySelector('.random-cover-button')

// Classes to focus upon:

// <img class="cover-image" src="./assets/prairie.jpg"> This should be the cover image location, we will want to write code to enable cycling through all of ./assets in a random manner. Covers array in data.js
// <h2 class ="cover-title"> Windswept Hearts</h2> This should be the title displayed upon the cover image, we should pass the titles array into this location.
// <h3 class = "tagline"> 
// "A tale of"
//<span class="tagline-1">passion</span> For this line as well as tagline 2, this is where we will pass the array of words from descriptors.
//" and "
//<span class="tagline-2">woe</span> **^
//
// "random-cover-button"