// Create variables targetting the relevant DOM elements here 👇
var coverImageSource = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptorOne = document.querySelector('.tagline-1');
var descriptorTwo = document.querySelector('.tagline-2');
var homeView = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var mainCover = document.querySelector('.main-cover');

var coverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var makeNewButton = document.querySelector('.make-new-button');
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
var currentCover = new Cover(coverImageSource, coverTitle, descriptorOne, descriptorTwo);

// Add your event listeners here 👇
coverButton.addEventListener('click', changeCover);
makeNewButton.addEventListener('click', displayForm);
createNewBookButton.addEventListener('click', makeMyBook);
// Create your event handlers and other functions here 👇
function changeCover() {
  currentCover.cover.src = covers[getRandomIndex(covers)];
  currentCover.title.innerText = titles[getRandomIndex(titles)];
  currentCover.tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover.tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

function displayForm() {
  form.style.display = 'initial';
  displayHomeButton();
  hideHome();
  hideCoverButton();
  hideSaveCoverButton();
}

function displayHomeButton() {
  homeButton.style.display = 'initial';
}

function hideHome() {
  homeView.style.display = 'none';
}

function hideCoverButton() {
  coverButton.style.display = 'none';
}

function hideSaveCoverButton() {
  saveCoverButton.style.display = 'none';
}

function makeMyBook() {
  displayForm();
  covers.push(coverInputValue.value);
  titles.push(titleInputValue.value);
  descriptors.push(firstDescriptorInputValue.value);
  descriptors.push(secondDescriptorInputValue.value);

  currentCover.cover.src = covers[covers.length - 1];
  currentCover.title.innerText = titles[titles.length - 1];
  currentCover.tagline1.innerText = descriptors[descriptors.length - 2];
  currentCover.tagline2.innerText = descriptors[descriptors.length -1];

  mainCover.style.display = 'inherit';
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
