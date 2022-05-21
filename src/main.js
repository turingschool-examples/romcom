// Create variables targetting the relevant DOM elements here 👇
var mainCover = document.querySelector('.main-cover')

var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var savedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var formView = document.querySelector('.form-view')
var savedView = document.querySelector('.saved-view')

var coverTitle = document.querySelector('.cover-title')
var coverImage = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover();

// Add your event listeners here 👇

randomButton.addEventListener('click', getRandomCoverPageLoad);

//randomButton.addEventListener('click', randomCover);
// saveCoverButton.addEventListener('click', saveCover);
// viewSavedButton.addEventListener('click', viewSaved);
// makeNewButton.addEventListener('click', makeNewCover);
// homeButton.addEventListener('click', goHome);


// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var currentCover = new Cover()

function getRandomCoverPageLoad() {
  var cover = covers[getRandomIndex(covers)]
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(cover, title, descriptor1, descriptor2)
  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  taglineOne.innerText = currentCover.tagline1
  taglineTwo.innerText = currentCover.tagline2
}
getRandomCoverPageLoad()

// randomButton.addEventListener('click', randomCover);
// saveCoverButton.addEventListener('click', saveCover);
savedButton.addEventListener('click', viewSaved);
makeNewButton.addEventListener('click', makeNewCover);
homeButton.addEventListener('click', goHome);

function makeNewCover() {
  mainCover.classList.remove("visible");
  mainCover.classList.add("hidden");
  formView.classList.remove("hidden");
  formView.classList.add("visible");
  randomButton.classList.add("hidden");
  randomButton.classList.remove("visible");
  saveCoverButton.classList.add("hidden");
  saveCoverButton.classList.remove("visible");
  homeButton.classList.remove("hidden");
  homeButton.classList.add("visible");
}
function goHome() {
  mainCover.classList.remove("hidden");
  mainCover.classList.add("visible");
  formView.classList.remove("visible");
  formView.classList.add("hidden");
  randomButton.classList.add("visible");
  randomButton.classList.remove("hidden");
  saveCoverButton.classList.add("visible");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.remove("visible");
  homeButton.classList.add("hidden");
}
function viewSaved() {
  randomButton.classList.add("hidden");
  randomButton.classList.remove("visible");
  saveCoverButton.classList.add("hidden");
  saveCoverButton.classList.remove("visible");
  savedButton.classList.remove("visible");
  savedButton.classList.remove("hidden");
  mainCover.classList.remove("visible");
  mainCover.classList.add("hidden");
  savedView.classList.remove("hidden");
  savedView.classList.add("visible");
  homeButton.classList.remove("hidden");
  homeButton.classList.add("visible");
}

//
// }

//
// viewHomeImage
// formView/main view all saved buttons
//toggle hidden tag --> code pen with elephant used method to toggle from css to js --> method + classList use with hidden tag
// css file there is a hidden tag to use
//want to hide main-cover(home) and show the form
