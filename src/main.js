// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var discriptorTagLine1 = document.querySelector('.tagline-1');
var discriptorTagLine2 = document.querySelector('.tagline-2');
var showNewCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var mainPageDisplay = document.querySelector('.main-cover');
var displayUserForm = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSaveCoversSection = document.querySelector('.saved-view');
var viewSavedButton = document.querySelector('.view-saved-button');
var userCoverInput = document.querySelector('.user-cover');
var userTitleInput = document.querySelector('.user-title');
var userDescriptorInput1 = document.querySelector('.user-desc1');
var userDescriptorInput2 = document.querySelector('.user-desc2');
var makeABookButton = document.querySelector('.create-new-book-button')




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
showNewCoverButton.addEventListener('click', displayMainPageCover);
makeOwnCoverButton.addEventListener('click', showUserFormPage);
viewSavedButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', homeButtonFunction);
makeABookButton.addEventListener('click', clickHandler);


window.onload = displayMainPageCover;

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function displayMainPageCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor, randomDescriptor2);
  coverImage.setAttribute('src', randomCover);
  coverTitle.innerHTML = randomTitle;
  discriptorTagLine1.innerText = randomDescriptor;
  discriptorTagLine2.innerHTML = randomDescriptor2;
}

function showUserFormPage() {
  mainPageDisplay.classList.add('hidden');
  displayUserForm.classList.remove('hidden');
  showNewCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function viewSavedCovers() {
  viewSaveCoversSection.classList.remove('hidden');
  mainPageDisplay.classList.add('hidden');
  viewSavedButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  showNewCoverButton.classList.add('hidden');
  displayUserForm.classList.add('hidden');
}

function homeButtonFunction() {
  mainPageDisplay.classList.remove('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  showNewCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
}

function createUserPost(event) {
  event.preventDefault();
  var coverValue = userCoverInput.value;
  var titleValue = userTitleInput.value;
  var descriptor1 = userDescriptorInput1.value;
  var descriptor2 = userDescriptorInput2.value;
  covers.push(coverValue);
  titles.push(titleValue);
  descriptors.push(descriptor1, descriptor2);
  currentCover = new Cover(coverValue, titleValue, descriptor1, descriptor2)
  coverImage.setAttribute('src', coverValue);
  coverTitle.innerHTML = titleValue;
  discriptorTagLine1.innerText = descriptor1;
  discriptorTagLine2.innerHTML = descriptor2;
}

function homeFromUserPage() {
  mainPageDisplay.classList.remove('hidden');
  displayUserForm.classList.add('hidden');
  showNewCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
}
function clickHandler(event) {
  createUserPost(event);
  homeFromUserPage();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
