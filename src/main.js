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
buttonShowRandomCover.addEventListener("click", getRandomizedCover)
buttonMakeNew.addEventListener('click', makeCoverPage)
buttonViewSaved.addEventListener('click', savedCoversView)
buttonHome.addEventListener('click', homeButton)
buttonCreateNew.addEventListener('click', createNewCover)

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
}

function homeButton() {
  romViewForm.classList.remove('hidden');
  romViewHome.classList.remove('hidden');
  romViewSave.classList.add('hidden');
  buttonShowRandomCover.classList.remove('hidden');
  buttonSaveCover.classList.remove('hidden');
  buttonHome.classList.add('hidden');
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
}




// function printHello() {
//   console.log('hello')
// }
