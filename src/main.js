// Create variables targetting the relevant DOM elements here 👇
var buttonShowRandomCover = document.querySelector('.random-cover-button');

var buttonHome = document.querySelector('.home-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonViewSaved = document.querySelector('.view-saved-button');
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
buttonShowRandomCover.addEventListener("click", getRandomizedCover)
buttonMakeNew.addEventListener('click', makeCoverPage)
buttonViewSaved.addEventListener('click', savedCoversSection)
buttonHome.addEventListener('click', homeButton)
buttonCreateNew.addEventListener('click', createNewCover)
buttonSaveCover.addEventListener('click', saveCovers)
savedCoversSect.addEventListener('dblclick', deleteCovers)
// Create your event handlers and other functions here 👇


// We've provided one function to get you started

//iteration0
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomizedCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  titleImage.src = currentCover.cover;
  titleCover.innerText = currentCover.title;
  titleTagLine1.innerText = currentCover.tagline1;
  titleTagLine2.innerText = currentCover.tagline2;
}

//iteration1
function makeCoverPage() {
  romViewForm.classList.remove('hidden');
  romViewHome.classList.add('hidden');
  romViewSave.classList.add('hidden');
  buttonShowRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
  buttonHome.classList.remove('hidden');
}

function savedCoversView() {
  romViewForm.classList.add('hidden');
  romViewHome.classList.add('hidden');
  romViewSave.classList.remove('hidden');
  buttonShowRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
  buttonHome.classList.remove('hidden');
  buttonViewSaved.classList.add('hidden');
  savedCoversSect.classList.remove('hidden')
}

function homeButton() {
  romViewForm.classList.add('hidden');
  romViewHome.classList.remove('hidden');
  romViewSave.classList.add('hidden');
  buttonShowRandomCover.classList.remove('hidden');
  buttonSaveCover.classList.remove('hidden');
  buttonHome.classList.add('hidden');
  buttonViewSaved.classList.remove('hidden');
}

//iteration2

// function imageInput() {
//   currentCover = new Cover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value)
// }

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
  buttonSaveCover.classList.remove('hidden');
  buttonViewSaved.classList.remove('hidden');
  getCover()
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
      buttonSaveCover.classList.add('hidden')
      buttonShowRandomCover.classList.add('hidden')
      buttonHome.classList.remove('hidden')
      buttonViewSaved.classList.add('hidden');
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

