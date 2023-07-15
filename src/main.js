// Create variables targeting the relevant DOM elements here 👇
//buttons:
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var makeMyCoverButton = document.querySelector('.create-new-book-button');
//views:
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  createCover(
    'http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg',
    'Sunsets and Sorrows',
    'sunsets',
    'sorrows'
  ),
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', displayRandomCover);
randomCoverButton.addEventListener('click', displayRandomCover);
viewSavedCoversButton.addEventListener('click', toggleViewSaveCoverBtn);
makeNewCoverButton.addEventListener('click', toggleViewMakeCoverBtn);
homeButton.addEventListener('click', showHomeViewBtn);
makeMyCoverButton.addEventListener('click', makeMyBookBtn);

// Create your event handlers and other functions here 👇

function displayRandomCover() {
  currentCover = getRandomCover();
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function getRandomCover() {
  var coverImageIndex = getRandomIndex(covers);
  var coverTitlesIndex = getRandomIndex(titles);
  var coverDescriptor1Index = getRandomIndex(descriptors);
  var coverDescriptors2Index = getRandomIndex(descriptors);

  var randomCover = createCover(
    covers[coverImageIndex],
    titles[coverTitlesIndex],
    descriptors[coverDescriptor1Index],
    descriptors[coverDescriptors2Index]
  );
  return randomCover;
}

function toggleViewSaveCoverBtn() {
  //show saved cover section hidden
  //home page hidden
  var hideHome = document.querySelector('.home-view');
  var viewSavedCovers = document.querySelector('.saved-view');
  var switchView = document.querySelector('.form-view');

  hideHome.classList.add('hidden');
  viewSavedCovers.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  switchView.classList.add('hidden');
}

function userNewCover() {
  // Variables that connect to the DOM elements we want to target
  var coverImage = document.querySelector('.user-cover');
  var title = document.querySelector('.user-title');
  var descript1 = document.querySelector('.user-desc1');
  var descript2 = document.querySelector('.user-desc2');

  //I don't think we even need the innerText here? we're pushing the user input to an array - we're not really changing the innerText value of any element
  //we're actually adding data
  // Variables to capture the user input
  var userInputCover = coverImage.value;
  var userInputTitle = title.value;
  var userInputDescript1 = descript1.value;
  var userInputDescript2 = descript2.value;

  // Now we need to use the "captured" user input value and "save" it.
  // Use starter function creatCover - with userInputs
  var userCoverSelections = createCover(
    userInputCover,
    userInputTitle,
    userInputDescript1,
    userInputDescript2
  );

  //Now we "push" to each corresponding value to its respective array (covers, titles, descriptors)
  //build the .push code fo each of the 4 elements
  covers.push(userInputCover);

  //Change back to home view

  //Display userCoverSelections on home page
  // innerText.value hooked to the DOM elements - does this functionality already exist in randomCover...?
}

function makeMyBookBtn() {
  var userInputAll = userNewCover();
  return userInputAll;
}

//on the view saved cover button the form/view needs to be hidden

function toggleViewMakeCoverBtn() {
  var switchView = document.querySelector('.form-view');
  var hideHome = document.querySelector('.home-view');

  hideHome.classList.toggle('hidden');
  switchView.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
}

function showHomeViewBtn() {
  var switchView = document.querySelector('.form-view');
  var hideHome = document.querySelector('.home-view');
  var viewSavedCovers = document.querySelector('.saved-view');

  hideHome.classList.remove('hidden');
  switchView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedCoversButton.classList.remove('hidden');
  viewSavedCovers.classList.add('hidden');
}

//on the view saved cover button the form/view needs to be hidden

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2,
  };
  return cover;
}

//pseudocode - thought for later iteration:
//maybe not a push to savedCover array yet - this may come with a later iteration

////note the rubric states to not have redundant code so maybe we take Nats suggestion and create a way to condense all our hidden classes

///BUG when in make your own cover and clicking the view saved covers section still only shows the form and not the saved covers page and vice versa

//
