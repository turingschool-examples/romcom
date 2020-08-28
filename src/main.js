// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverDescriptor = document.querySelector('.tagline');
var showRandomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCover = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeViewButton = document.querySelector('.home-button');
var savedViewButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
showRandomCoverButton.addEventListener('click', displayNewCover);
makeOwnCover.addEventListener('click', unhideFormView);
savedViewButton.addEventListener('click', unhideSavedView);
homeViewButton.addEventListener('click', unhideHomeView);

// Create your event handlers and other functions here 👇
function getRandomIndex(bookItem) {
  var randomIndex = Math.floor(Math.random() * bookItem.length)
  return bookItem[randomIndex]
}

function createNewCover(){
  currentCover = new Cover(getRandomIndex(covers), getRandomIndex(titles), getRandomIndex(descriptors), getRandomIndex(descriptors))
  if (currentCover.tagline1 === currentCover.tagline2) {
    createNewCover()
  }
  return currentCover
}

function displayNewCover() {
  coverImage.src = createNewCover().cover
  coverTitle.textContent = createNewCover().title
  coverDescriptor.textContent = `A tale of ${createNewCover().tagline1} and ${createNewCover().tagline2}`
}

function unhideFormView() {
  formView.style.display = 'block'
  homeView.style.display = 'none'
  showRandomCoverButton.style.display = 'none'
  saveCoverButton.style.display = 'none'
  homeViewButton.style.display = 'block'
}

function unhideSavedView() {
  savedView.style.display = 'block'
  homeView.style.display = 'none'
  showRandomCoverButton.style.display = 'none'
  saveCoverButton.style.display = 'none'
  homeViewButton.style.display = 'block'
  formView.style.display = 'none'
}

function unhideHomeView() {
  savedView.style.display = 'none'
  homeView.style.display = 'block'
  showRandomCoverButton.style.display = 'block'
  saveCoverButton.style.display = 'block'
  homeViewButton.style.display = 'none'
  formView.style.display = 'none'
}

displayNewCover()
