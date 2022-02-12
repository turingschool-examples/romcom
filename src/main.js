//Global Variables below

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

var savedView = document.querySelector(".saved-view");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");

var viewSavedB = document.querySelector(".view-saved-button");
var homeB = document.querySelector(".home-button");
var randomCoverB = document.querySelector(".random-cover-button");
var makeNewB = document.querySelector(".make-new-button");
var saveCoverB = document.querySelector(".save-cover-button");
var createNewBookB = document.querySelector(".create-new-book-button");

var saveInputCover = document.querySelector(".user-cover");
var saveInputTitle = document.querySelector(".user-title");
var saveInputDesc1 = document.querySelector(".user-desc1");
var saveInputDesc2 = document.querySelector(".user-desc2");

var currentCover = new Cover();

var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];

// Add your event listeners here 👇
window.onload = makeRandomBook();
randomCoverB.addEventListener("click", makeRandomBook);
makeNewB.addEventListener("click", showFormView);
viewSavedB.addEventListener("click", showSavedView);
homeB.addEventListener("click", showHomeView);
createNewBookB.addEventListener("click", storeUserInput);
saveCoverB.addEventListener("click", saveCover);

// Create your event handlers and other functions here 👇
function saveCover() {
  if (savedCovers[0] == currentCover) {
    alert("You've already saved this cover darling.");
  } else {
    savedCovers.unshift(currentCover);
    alert("This book has been saved darling.");
  }
}

function makeRandomBook() {
  var randImage = covers[getRandomIndex(covers)];
  var randTitle = titles[getRandomIndex(titles)];
  var randDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randDescriptor2 = descriptors[getRandomIndex(descriptors)];
  createCover(randImage, randTitle, randDescriptor1, randDescriptor2);
}

function createCover(randImage, randTitle, randDescriptor1, randDescriptor2) {
  currentCover = new Cover(
    randImage,
    randTitle,
    randDescriptor1,
    randDescriptor2
  );
  coverImage.src = randImage;
  coverTitle.innerText = randTitle;
  tagline1.innerText = randDescriptor1;
  tagline2.innerText = randDescriptor2;
}

function storeUserInput() {
  event.preventDefault();
  currentCover = new Cover(
    saveInputCover.value,
    saveInputTitle.value,
    saveInputDesc1.value,
    saveInputDesc2.value
  );
  dataArrays();
  showHomeView();
  displayCover();
}

function dataArrays() {
  covers.unshift(saveInputCover.value);
  titles.unshift(saveInputTitle.value);
  descriptors.unshift(saveInputDesc1.value);
  descriptors.unshift(saveInputDesc2.value);
}
var displayUserCover = document.querySelector(".main-cover");

function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function viewElement(classToEdit) {
  classToEdit.classList.remove("hidden");
}

function hideElement(classToEdit) {
  classToEdit.classList.add("hidden");
}

function showHomeView() {
  viewElement(homeView);
  viewElement(saveCoverB);
  viewElement(randomCoverB);
  hideElement(homeB);
  hideElement(formView);
  hideElement(savedView);
}
function showSavedView() {
  viewElement(savedView);
  viewElement(homeB);
  hideElement(homeView);
  hideElement(randomCoverB);
  hideElement(saveCoverB);
  hideElement(formView);
}
function showFormView() {
  viewElement(formView);
  viewElement(homeB);
  hideElement(homeView);
  hideElement(randomCoverB);
  hideElement(saveCoverB);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
