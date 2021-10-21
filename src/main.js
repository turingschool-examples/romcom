// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;



















var homeButton = document.querySelector('.home-button')

var homeView = document.querySelector('.home-view')
var form = document.querySelector('.form-view')

// Add your event listeners here 👇
document.addEventListener('click', displayForm)

// Create your event handlers and other functions here 👇
function displayForm(){
  form.style.display = 'initial'
  displayHomeButton()
  hideHome()
  hideCoverButton()
}

function displayHomeButton(){
  homeButton.style.display = 'initial'
}

function hideHome(){
  homeView.style.display = 'none'
}

function hideCoverButton(){
  coverButton.style.display = 'none'
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
