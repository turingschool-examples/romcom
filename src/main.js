// Variables that target DOM elements
var form = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var coverTitle = document.querySelector('.cover-title');
var descriptorOne = document.querySelector('.tagline-1');
var descriptorTwo = document.querySelector('.tagline-2');
var coverImageSource = document.querySelector('.cover-image');
var savedCoversSection = document.querySelector('.saved-covers-section');

// Variables that target HTML button elements
var homeButton = document.querySelector('.home-button');
var makeNewButton = document.querySelector('.make-new-button');
var coverButton = document.querySelector('.random-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

// Variables that target input fields
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
homeButton.addEventListener('click', displayHome);
coverButton.addEventListener('click', changeCover);
saveCoverButton.addEventListener('click', saveCover);
makeNewButton.addEventListener('click', displayForm);
viewSavedButton.addEventListener('click', displaySaved);
createNewBookButton.addEventListener('click', getUserData);
savedCoversSection.addEventListener('dblclick', removeCover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Randomly selects values from the respective arrays 
// applys them to a class and inserts them on the DOM
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

// Applies values from the arrays to an
// instantied class and inserts them on the DOM
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

// Displays 'form' page
function displayForm() {
  form.classList.remove('hidden');
  displayHomeButton();
  hideHome();
  hideCoverButton();
  hideSaveCoverButton();
  hideSavedCoversPage();
}

// Displays 'saved covers' page
function displaySaved() {
  savedView.classList.remove('hidden');
  displaySavedCovers();
  displayHomeButton();
  hideForm();
  hideHome();
  hideCoverButton();
  hideSaveCoverButton();
}

// Display 'home' page
function displayHome() {
  homeView.classList.remove('hidden');
  hideHomeButton();
  displaySaveCoverButton();
  displayCoverButton();
  hideForm();
  hideSavedCoversPage();
}

// Applies the user's input to create a new cover
function getUserData(event) {
  event.preventDefault();

  displayHome();
  storeCoverInputValue();
  storeTitleInputValue();
  storeDescriptorOneInputValue();
  storeDescriptorTwoInputValue();
  makeNewCover();
}

// Funcitons that show/hide various elements
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

function hideSavedCoversPage() {
  savedView.classList.add('hidden');
}

// Functions that collect user input and push the data into their arrays
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

// Does not add the cover to the array if one already exists
function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

// Creates mini sized covers and displays them on the 'saved covers' page
function displaySavedCovers() {
  savedCoversSection.innerHTML = ``;
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += 
    `<section class="mini-cover">
      <img class="cover-image" id=${savedCovers[i].id} src="${savedCovers[i].cover}" alt="No Image Available">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`
  }
}

// Removes a cover when the user double clicks it
function removeCover(event) {
  var something = event.target.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (`${savedCovers[i].id}` === something) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
}
