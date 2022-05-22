// Create variables targetting the relevant DOM elements here 👇
var showRandomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var makeBookButton = document.querySelector('.create-new-book-button');

var coverTitle = document.querySelector('.cover-title');
var imageCover = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

// var romControls = document.querySelector('.controls');
var homeViewSection = document.querySelector('.view.home-view');
var viewSavedSection = document.querySelector('.view.saved-view');
var viewForm = document.querySelector('.view.form-view');

var savedCoversSection = document.querySelector('.saved-covers-section')

//getElementById's 🫣
var coverInput = document.getElementById('cover');
var titleInput = document.getElementById('title');
var descriptor1Input = document.getElementById('descriptor1');
var descriptor2Input = document.getElementById('descriptor2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', getRandomizedCover)
showRandomCoverButton.addEventListener("click", getRandomizedCover)
makeCoverButton.addEventListener('click', makeCoverPage)
viewSavedButton.addEventListener('click', savedCoversSectionFunction)
homeButton.addEventListener('click', homeButtonFunction)
makeBookButton.addEventListener('click', createNewCover)
saveCoverButton.addEventListener('click', saveCovers)
savedCoversSection.addEventListener('dblclick', deleteCovers)


// We've provided one function to get you started

//iteration0
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Create your event handlers and other functions here 👇

//REFACTORED
function getRandomizedCover(coverToDisplay) {
  imageCover.src = coverToDisplay.cover || covers[getRandomIndex(covers)];
  coverTitle.innerText = coverToDisplay.title || titles[getRandomIndex(titles)];
  tagline1.innerText = coverToDisplay.tagline1 || descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = coverToDisplay.tagline2 || descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(imageCover.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
}

//iteration1
function makeCoverPage() {
  viewForm.classList.remove('hidden');
  homeViewSection.classList.add('hidden');
  viewSavedSection.classList.add('hidden');
  showRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function savedCoversView() {
  viewForm.classList.add('hidden');
  homeViewSection.classList.add('hidden');
  viewSavedSection.classList.remove('hidden');
  showRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedButton.classList.add('hidden');
  savedCoversSection.classList.remove('hidden')
}

function homeButtonFunction() {
  viewForm.classList.add('hidden');
  homeViewSection.classList.remove('hidden');
  viewSavedSection.classList.add('hidden');
  showRandomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
}

//iteration2

//refactored
function createNewCover(event) {
  event.preventDefault()
  currentCover = new Cover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value)

  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value);
  descriptors.push(descriptor2Input.value)

  viewForm.classList.add('hidden');
  homeViewSection.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden');

  viewSavedButton.classList.remove('hidden');
  getRandomizedCover(currentCover)
}

function getCover() {
  imageCover.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

//iteration 3
function savedCoversSectionFunction() {
  savedCoversSection.innerHTML = ""

  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `<section class="mini-cover"> <img class="cover-image" id='${savedCovers[i].id}' src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>`

      homeViewSection.classList.add('hidden')
      viewForm.classList.add('hidden')
      viewSavedSection.classList.remove('hidden')
      saveCoverButton.classList.add('hidden')
      showRandomCoverButton.classList.add('hidden')
      homeButton.classList.remove('hidden')
      viewSavedButton.classList.add('hidden');
  }
}

function saveCovers() {
  if (!savedCovers.includes(currentCover) ) {
      savedCovers.push(currentCover)
  }
};

//iteration 4

function deleteCovers(event) {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == event.target.id) {
      savedCovers.splice(i, 1)
      savedCoversSectionFunction()
    }
  }
}
