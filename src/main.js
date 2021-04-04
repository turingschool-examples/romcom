// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var userCover = document.getElementById('cover');
var userTitle = document.getElementById('title');
var userDesc1 = document.getElementById('descriptor1');
var userDesc2 = document.getElementById('descriptor2');

//BUTTON VARS
var showRandomCoverBtn = document.querySelector('.random-cover-button');
var makeYourOwnCoverBtn = document.querySelector('.make-new-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var createNewBookBtn = document.querySelector('.create-new-book-button');
var homeBtn = document.querySelector('.home-button');

//PAGE AREA VARS
var formArea = document.querySelector('.form-view');
var homePageArea = document.querySelector('.home-view');
var savedCoversArea = document.querySelector('.saved-view');

// We've provided a few variables below this
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomCover);
showRandomCoverBtn.addEventListener('click', randomCover);
makeYourOwnCoverBtn.addEventListener('click', hideHomePage);
viewSavedBtn.addEventListener('click', showSavedArea);
homeBtn.addEventListener('click', exposeHomePage);
createNewBookBtn.addEventListener('click', createNewBook);
saveCoverBtn.addEventListener('click', addCoverToSaved);
savedCoversArea.addEventListener('dblclick', deleteSavedCover);

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomCover(event) {
  event.preventDefault();
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
};

function createNewBook(event) {
  event.preventDefault();
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value, userDesc2.value);
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  formArea.classList.add('hidden');
  homePageArea.classList.remove('hidden');
  coverImage.src = covers.pop();
  coverTitle.innerText = titles.pop();
  tagline2.innerText = descriptors.pop();
  tagline1.innerText = descriptors.pop();
  saveCoverBtn.classList.remove('hidden');
}

function addCoverToSaved() {
  if(!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover);
  }
};

function deleteSavedCover() {
  var coverToTrash = event.target.closest('.mini-cover');
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === Number(coverToTrash.id)) {
      savedCovers.splice([i], 1);
      savedCoversArea.innerHTML = '';
      displaySavedCovers(savedCovers);
    }
  }
};

function displaySavedCovers(savedCovers) {
  savedCoversArea.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    var savedMiniCover =
      `
      <section class="saved-covers-section mini-cover" id=${savedCovers[i].id}>
        <img class="cover-image" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
     `
     savedCoversArea.insertAdjacentHTML('afterbegin', savedMiniCover);
   }
};

// HIDE PAGE AREA FUNCTIONS TO REFACTOR

function homeAddHidden() {
  homePageArea.classList.add('hidden');
};

function homeRemoveHidden() {
  homePageArea.classList.remove('hidden');
};

function formAddHidden() {
  formArea.classList.add('hidden');
};

function formRemoveHidden() {
  formArea.classList.remove('hidden');
};

function savedAreaAddHidden() {
  savedCoversArea.classList.add('hidden');
};

function savedAreaRemoveHidden() {
  savedCoversArea.classList.remove('hidden');
};

function saveCoverBtnAddHidden() {
  saveCoverBtn.classList.add('hidden');
};

function saveCoverBtnRemoveHidden() {
  saveCoverBtn.classList.remove('hidden');
};

function hideHomePage() {
  homeAddHidden();
  formRemoveHidden();
  savedAreaAddHidden();
  saveCoverBtnAddHidden();
  showRandomCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
};

function showSavedArea() {
  homeAddHidden();
  savedAreaRemoveHidden();
  formAddHidden();
  showRandomCoverBtn.classList.add('hidden');
  saveCoverBtnAddHidden();
  homeBtn.classList.remove('hidden');
  savedCoversArea.classList.add('mini-cover');
  displaySavedCovers(savedCovers);
};

function exposeHomePage() {
  homeRemoveHidden();
  formAddHidden();
  savedAreaAddHidden();
  saveCoverBtnRemoveHidden();
  showRandomCoverBtn.classList.remove('hidden');
  homeBtn.classList.add('hidden');
};
