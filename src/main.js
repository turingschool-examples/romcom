// Create variables targetting the relevant DOM elements here 👇
var showRandomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var buttonMakeNew = document.querySelector('.make-new-button');
var buttonCreateNew = document.querySelector('.create-new-book-button');

var titleCover = document.querySelector('.cover-title');
var titleImage = document.querySelector('.cover-image');
var titleTagLine1 = document.querySelector('.tagline-1');
var titleTagLine2 = document.querySelector('.tagline-2');

var romControls = document.querySelector('.controls');
var romViewHome = document.querySelector('.view.home-view');
var romViewSave = document.querySelector('.view.saved-view');
var romViewForm = document.querySelector('.view.form-view');

var savedCoversSect = document.querySelector('.saved-covers-section')

//getElementById's 🫣
var coverInput = document.getElementById('cover');
var titleInput = document.getElementById('title');
var descriptor1Input = document.getElementById('descriptor1');
var descriptor2Input = document.getElementById('descriptor2');

//add currentCover to array
// var html = `<img class="cover-image" src=${savedCovers[i].cover}>
//   <h2 class="cover-title">${savedCovers[i].title}</h2>
//   <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
//   <img class="price-tag" src="./assets/price.png">
//   <img class="overlay" src="./assets/overlay.png">`

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', getRandomizedCover)
showRandomCoverButton.addEventListener("click", getRandomizedCover)
buttonMakeNew.addEventListener('click', makeCoverPage)
viewSavedButton.addEventListener('click', savedCoversSection)
homeButton.addEventListener('click', homeButtonFunction)
buttonCreateNew.addEventListener('click', createNewCover)
saveCoverButton.addEventListener('click', saveCovers)
savedCoversSect.addEventListener('dblclick', deleteCovers)
// Create your event handlers and other functions here 👇


// We've provided one function to get you started

//iteration0
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//og
// function getRandomizedCover() {
//   currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
//   titleImage.src = currentCover.cover;
//   titleCover.innerText = currentCover.title;
//   titleTagLine1.innerText = currentCover.tagline1;
//   titleTagLine2.innerText = currentCover.tagline2;
// }

//REFACTORED
function getRandomizedCover(coverToDisplay) {
  titleImage.src = coverToDisplay.cover || covers[getRandomIndex(covers)];
  titleCover.innerText = coverToDisplay.title || titles[getRandomIndex(titles)];
  titleTagLine1.innerText = coverToDisplay.tagline1 || descriptors[getRandomIndex(descriptors)];
  titleTagLine2.innerText = coverToDisplay.tagline2 || descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(titleImage.src, titleCover.innerText, titleTagLine1.innerText, titleTagLine2.innerText)
}

//iteration1
function makeCoverPage() {
  romViewForm.classList.remove('hidden');
  romViewHome.classList.add('hidden');
  romViewSave.classList.add('hidden');
  showRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function savedCoversView() {
  romViewForm.classList.add('hidden');
  romViewHome.classList.add('hidden');
  romViewSave.classList.remove('hidden');
  showRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedButton.classList.add('hidden');
  savedCoversSect.classList.remove('hidden')
}

function homeButtonFunction() {
  romViewForm.classList.add('hidden');
  romViewHome.classList.remove('hidden');
  romViewSave.classList.add('hidden');
  showRandomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
}

//iteration2

//OG
// function createNewCover(event) {
//   event.preventDefault()
//   currentCover = new Cover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value)
//   covers.push(coverInput.value);
//   titles.push(titleInput.value);
//   descriptors.push(descriptor1Input.value);
//   descriptors.push(descriptor2Input.value)
//   console.log(currentCover)
//   romViewForm.classList.add('hidden');
//   romViewHome.classList.remove('hidden')
//   saveCoverButton.classList.remove('hidden');
//   viewSavedButton.classList.remove('hidden');
//   getCover()
// }

//refactored
function createNewCover(event) {
  event.preventDefault()
  currentCover = new Cover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value)
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value);
  descriptors.push(descriptor2Input.value)
  console.log(currentCover)
  romViewForm.classList.add('hidden');
  romViewHome.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  getRandomizedCover(currentCover)
}

function getCover() {
  titleImage.src = currentCover.cover;
  titleCover.innerText = currentCover.title;
  titleTagLine1.innerText = currentCover.tagline1;
  titleTagLine2.innerText = currentCover.tagline2;
}

//iteration 3
function savedCoversSection() {
  savedCoversSect.innerHTML = ""
  for (var i = 0; i < savedCovers.length; i++) {
    console.log('savedcoverssect', savedCovers)
    savedCoversSect.innerHTML += `<section class="mini-cover"> <img class="cover-image" id='${savedCovers[i].id}' src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>`

      romViewHome.classList.add('hidden')
      romViewForm.classList.add('hidden')
      romViewSave.classList.remove('hidden')
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
      console.log(savedCovers)
      savedCoversSection()
    }
  }
}
