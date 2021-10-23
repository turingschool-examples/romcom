// Create variables targetting the relevant DOM elements here 👇
var coverImageSource = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptorOne = document.querySelector('.tagline-1');
var descriptorTwo = document.querySelector('.tagline-2');
var savedView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');
var homeView = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var mainCover = document.querySelector('.main-cover');

var coverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var makeNewButton = document.querySelector('.make-new-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

var coverInputValue = document.querySelector('.user-cover');
var titleInputValue = document.querySelector('.user-title');
var firstDescriptorInputValue = document.querySelector('.user-desc1');
var secondDescriptorInputValue = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', changeCover);
coverButton.addEventListener('click', changeCover);
makeNewButton.addEventListener('click', displayForm);
createNewBookButton.addEventListener('click', getUserData);
viewSavedButton.addEventListener('click', displaySaved);
homeButton.addEventListener('click', displayHome);
saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇
function changeCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );

  coverImageSource.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  descriptorOne.innerText = currentCover.tagline1;
  descriptorTwo.innerText = currentCover.tagline2;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayForm() {
  form.classList.remove('hidden');
  displayHomeButton();
  hideHome();
  hideCoverButton();
  hideSaveCoverButton();
  hideSavedCoversPage();
}

function displaySaved() {
  savedView.classList.remove('hidden');
  displaySavedCovers();
  displayHomeButton();
  hideForm();
  hideHome();
  hideCoverButton();
  hideSaveCoverButton();
}

function hideSavedCoversPage() {
  savedView.classList.add('hidden');
}

function displayHome() {
  homeView.classList.remove('hidden');
  hideHomeButton();
  displaySaveCoverButton();
  displayCoverButton();
  hideForm();
  hideSavedCoversPage();
}

function displayHomeButton() {
  homeButton.classList.remove('hidden');
}

function displaySaveCoverButton() {
  saveCoverButton.classList.remove('hidden');
}

function displayCoverButton() {
  coverButton.classList.remove('hidden');
}

function hideForm() {
  form.classList.add('hidden');
}

function hideHomeButton() {
  homeButton.classList.add('hidden');
}

function hideHome() {
  homeView.classList.add('hidden');
}

function hideCoverButton() {
  coverButton.classList.add('hidden');
}

function hideSaveCoverButton() {
  saveCoverButton.classList.add('hidden');
}

function storeCoverInputValue() {
  var coverValue = coverInputValue.value;
  covers.push(coverValue);
}

function storeTitleInputValue() {
  var titleValue = titleInputValue.value;
  titles.push(titleValue);
}

function storeDescriptorOneInputValue() {
  var descriptorOneValue = firstDescriptorInputValue.value;
  descriptors.push(descriptorOneValue);
}

function storeDescriptorTwoInputValue() {
  var descriptorTwoValue = secondDescriptorInputValue.value;
  descriptors.push(descriptorTwoValue);
}

function getUserData() {
  event.preventDefault();
  displayHome();
  storeCoverInputValue();
  storeTitleInputValue();
  storeDescriptorOneInputValue();
  storeDescriptorTwoInputValue();
  makeNewCover();
}

function makeNewCover() {
  currentCover = new Cover(
    covers[covers.length - 1],
    titles[titles.length - 1],
    descriptors[descriptors.length - 2],
    descriptors[descriptors.length - 1]
  );

  coverImageSource.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  descriptorOne.innerText = currentCover.tagline1;
  descriptorTwo.innerText = currentCover.tagline2;
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function displaySavedCovers() {
  var savedCoversSectionHTML = ``;
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSectionHTML += `<section class="mini-cover">
    <img class="mini-cover" src=${savedCovers[i].cover} alt="No Image Available">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`
  }
  savedCoversSection.innerHTML = savedCoversSectionHTML;
}
