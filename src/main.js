

//Create variables targetting the relevant DOM elements here 👇
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var coverTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");

var randomButton = document.querySelector(".random-cover-button");
var homeButton = document.querySelector(".home-button");
var makeNewButton = document.querySelector(".make-new-button");
var viewSavedButton = document.querySelector(".view-saved-cover");

var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view")

var saveCoverButton = document.querySelector(".save-cover-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var viewSavedCoversButton = document.querySelector(".view-saved-button");

var formMakeMyBookButton = document.querySelector(".create-new-book-button");
var formUserCoverInput = document.querySelector(".user-cover");
var formUserTitleInput = document.querySelector(".user-title");
var formUserDescriptor1Input = document.querySelector(".user-desc1");
var formUserDescriptor2Input = document.querySelector(".user-desc2");

var savedCovers = [];
var currentCover;


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = randomCoverGenerator;

var makeYourOwnCoverButton.addEventListener('click', makeACover);
var homeButton.addEventListener('click', makeAHome);
// var viewSavedCoversButton.addEventListener('click', makeSavedCoversButton);
// var formMakeMyBookButton.addEventListener('click', makeCustomBook);
// var saveCoverButton.addEventListener('click', saveHomeCover);
// var savedCoversSection.addEventListener('dblclick', deleteCover);




randomButton.addEventListener("click", randomCoverGenerator);

// Create your event handlers and other functions here 👇
function randomCoverGenerator() {
  var coverIndex = getRandomIndex(covers);
  coverImage.src = covers[coverIndex];
  var titleIndex = getRandomIndex(titles);
  coverTitle.innerText = titles[titleIndex];
  var tag1Index = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[tag1Index];
  var tag2Index = getRandomIndex(descriptors);
  tagline2.innerText = descriptors[tag2Index];
  currentCover = new Cover(covers[coverIndex], titles[titleIndex], descriptors[tag1Index], descriptors[tag2Index]);
  }

function makeAHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  randomButton.classList.remove('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
