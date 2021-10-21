

//Create variables targetting the relevant DOM elements here 👇
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var coverTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var randomButton = document.querySelector(".random-cover-button");
var homeButton = document.querySelector(".home-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var viewSavedCoverButton = document.querySelector(".view-saved-cover");
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

// Add your event listeners here 👇
window.onload = randomCoverGenerator;

randomButton.addEventListener("click", randomCoverGenerator);
makeYourOwnCoverButton.addEventListener("click", makeACover);
homeButton.addEventListener("click", makeAHome);
viewSavedCoversButton.addEventListener("click", showSavedCovers);
formMakeMyBookButton.addEventListener("click", makeCustomBook);
saveCoverButton.addEventListener("click", saveHomeCover);
savedCoversSection.addEventListener("dblclick", deleteCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

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

function saveHomeCover() {
  if (isUniqueCover(currentCover) === true) {
  saveCover(currentCover.cover, currentCover.title, currentCover.tagline1, currentCover.tagline2);
  }
}


function makeAHome() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
  randomButton.classList.remove("hidden");
}

function makeACover() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  randomButton.classList.add("hidden");
  savedView.classList.add("hidden");
}

function showSavedCovers() {
  savedCoversSection.innerHTML = "";
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  savedView.classList.remove("hidden");
  savedCoversSection.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  randomButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  displaySavedCovers();
}

function deleteCover(event) {
  var bookToDelete = event.target.closest(".mini-cover");
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id == bookToDelete.dataset.id) {
        savedCovers.splice(i, 1);
      }
    }
    showSavedCovers();
}