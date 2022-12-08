// Create variables targetting the relevant DOM elements here 👇
var homeCover = document.querySelector('.cover-image')

var homeTitle = document.querySelector('.cover-title')

var homeTagline1 = document.querySelector('.tagline-1')

var homeTagline2 = document.querySelector('.tagline-2')

var randomButton = document.querySelector('.random-cover-button')

var homeButton = document.querySelector('.home-button')

var mainCover = document.querySelector('.main-cover')

var makeCoverButton = document.querySelector('.make-new-button')

var hidden = document.querySelectorAll('.hidden')

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

// Can probably use button var names instead of query selectors
document.querySelector('.make-new-button').addEventListener("click", hideElements)

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

function hideElements() {
  mainCover.classList.add('hidden');
}

function showElements(parentElement) {
  parentElement.classList.remove('.hidden');
}

function test() {
  console.log('Is this working?')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}




