// Create variables targetting the relevant DOM elements here 👇

var homePage = document.querySelector('.home-view')
var formPage = document.querySelector('.form-view')
var controls = document.querySelector('.controls')
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedCoverButton = document.querySelector('.view-saved-button')
var makeYourOwnCoverButton = document.querySelector('.make-new-button')


// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

  }
}
// Add your event listeners here 👇

randomCoverButton.addEventListener('click', getRandomCover)


// Create your event handlers and other functions here 👇


switchToFormView()

function getRandomCover() {
  currentCover = new Cover (
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  )
  displayCover()
}

function displayCover() {
  coverImage.setAttribute('src', currentCover.cover);
  coverTitle.innerText = currentCover.title
  tagLine1.innerText = currentCover.tagline1
  tagLine2.innerText = currentCover.tagline2
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
