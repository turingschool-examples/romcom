// Create variables targetting the relevant DOM elements here 👇
var randomCover = document.querySelector(".cover-image");
var randomTitle = document.querySelector(".cover-title");
var randomTag = document.querySelector(".tagline");
var randomTag1 = document.querySelector(".tagline-1");
var randomTag2 = document.querySelector(".tagline-2");

var formView = document.querySelector(".form-view");
var mainCover = document.querySelector(".home-view");
var viewSavedCovers = document.querySelector(".saved-view");

var homeButton = document.querySelector(".home-button");
var savedCoversButton = document.querySelector(".view-saved-button");
var randomButton = document.querySelector(".random-cover-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var createBookButton = document.querySelector(".create-new-book-button");

var inputCover = document.querySelector("#cover").value;
var inputTitle = document.querySelector("#title").value;
var input1descriptor = document.querySelector("#descriptor1").value;
var input2descriptor = document.querySelector("#descriptor2").value;

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// Add your event listeners here 👇
randomButton.addEventListener('click', randomCovers);

makeNewCoverButton.addEventListener('click', displayForm);

savedCoversButton.addEventListener('click', displaySavedCovers);

homeButton.addEventListener('click', displayHome);

createBookButton.addEventListener('click', makeCover);
// Create your event handlers and other functions here 👇

randomCovers()
function randomCovers() {
  randomCover.src = covers[getRandomIndex(covers)];
  randomTag1.innerText = descriptors[getRandomIndex(descriptors)];
  randomTag2.innerText = descriptors[getRandomIndex(descriptors)];
  randomTitle.innerText = titles[getRandomIndex(titles)];
  currentCover = new Cover(
    randomCover.src,
    randomTag.innerText,
    randomTitle.innerText,
  )
};

function displayForm() {
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  mainCover.classList.add('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
};


function displaySavedCovers() {
  savedCoversButton.classList.remove('hidden');
  viewSavedCovers.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  mainCover.classList.add('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formView.classList.add('hidden');
};

function displayHome() {
  formView.classList.add('hidden');
  mainCover.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
  savedCoversButton.classList.remove('hidden');
  homeButton.classList.add('hidden');

};

function makeCover () {
  event.preventDefault();
  getUserInput();
};
  function getUserInput() {
    var inputCover = document.querySelector("#cover").value;
    var inputTitle = document.querySelector("#title").value;
    var input1descriptor = document.querySelector("#descriptor1").value;
    var input2descriptor = document.querySelector("#descriptor2").value;
    covers.push(inputCover);
    titles.push(inputTitle);
    descriptors.push(input1descriptor, input2descriptor);
    displayCover(inputCover, inputTitle, input1descriptor, input2descriptor)
};

function displayCover(inputCover, inputTitle, input1descriptor, input2descriptor) {
  currentCover = new Cover(inputCover, inputTitle, input1descriptor, input2descriptor);
  displayHome();
    randomCover.src = currentCover.cover;
    randomTitle.innerText = currentCover.title;
    randomTag1.innerText =  currentCover.tagline1;
    randomTag2.innerText = currentCover.tagline2;

};

// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
