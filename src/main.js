//Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var mainCover = document.querySelector('.main-cover');
var newRandomCoverBtn = document.querySelector('.random-cover-button');
var makeOwnCoverBtn = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var homeBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoverBtn = document.querySelector('.view-saved-button');
var savedCoverView = document.querySelector('.saved-view');
var savedCoverSection = document.querySelector('.saved-covers-section')
///////////////////VARIABLE FOR INPUT FIELDS////////////////////

var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDescript1 = document.querySelector('#descriptor1');
var userDescript2 = document.querySelector('#descriptor2');
var createCoverBtn = document.querySelector('.create-new-book-button');

/////////// GLOBAL VARIABLES //////////

var currentCover = null;

var savedCovers = [
  new Cover('http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"')
];

/////// EVENT LISTENERS👇//////

window.onload = getRandomCover
newRandomCoverBtn.addEventListener('click', showRandomCover)
makeOwnCoverBtn.addEventListener('click', showForm)
viewSavedCoverBtn.addEventListener('click', showSavedCoverView)
homeBtn.addEventListener('click', showMainView)
createCoverBtn.addEventListener('click', createNewCover)
saveCoverBtn.addEventListener('click', saveCurrentCover)

////// EVENT HANDLERS AND OTHER FUNCTIONS👇///////////

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
}

function showRandomCover() {
  getRandomCover()
}

function showForm() {
  formView.classList.remove('hidden')
  mainCover.classList.add('hidden')
  homeBtn.classList.remove('hidden')
  newRandomCoverBtn.classList.add('hidden')
  saveCoverBtn.classList.add('hidden')
  savedCoverView.classList.add('hidden')

}

function showSavedCoverView() {
  savedCoverView.classList.remove('hidden')
  formView.classList.add('hidden')
  mainCover.classList.add('hidden')
  homeBtn.classList.remove('hidden')
  newRandomCoverBtn.classList.add('hidden')
  saveCoverBtn.classList.add('hidden')
}

function showMainView() {
  mainCover.classList.remove('hidden')
  formView.classList.add('hidden')
  savedCoverView.classList.add('hidden')
  newRandomCoverBtn.classList.remove('hidden')
  saveCoverBtn.classList.remove('hidden')
  homeBtn.classList.add('hidden')
}

function createNewCover() {
  event.preventDefault()
  coverImage.src = userCover.value
  coverTitle.innerText = userTitle.value
  tagline1.innerText = userDescript1.value
  tagline2.innerText = userDescript2.value
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
  showMainView()
  pushNewCover()
}

function pushNewCover() {
  covers.push(userCover.value)
  titles.push(userTitle.value)
  descriptors.push(userDescript1.value, userDescript2.value)
}

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    showSavedCovers()
  }
}

function showSavedCovers() {
  savedCoverSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoverSection.innerHTML += `<section class='mini-cover' id=${savedCovers[i].id}>
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`
  }
}