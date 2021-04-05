// Cover Variables
var coverTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var coverTagline = document.querySelector(".tagline");
var coverDesc1 = document.querySelector(".tagline-1");
var coverDesc2 = document.querySelector(".tagline-2");
// Header Buttons
var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
//Form Variables
var formView = document.querySelector(".form-view");
var createNewBookButton = document.querySelector(".create-new-book-button");
// User Input (Form) Variable
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var userDesc1 = document.querySelector(".user-desc1");
var userDesc2 = document.querySelector(".user-desc2");
// Home Variables
var homeView = document.querySelector(".home-view");
// Saved Variables
var savedView = document.querySelector(".saved-view");
var savedCoverSection = document.querySelector(".saved-covers-section");
// Saved Covers Variable
var savedCovers = [];
// Event Listeners
window.addEventListener("load", randomizeCover);
randomCoverButton.addEventListener("click", randomizeCover);
makeNewButton.addEventListener("click", viewForm);
homeButton.addEventListener("click", viewHome);
viewSavedButton.addEventListener("click", viewSave);
createNewBookButton.addEventListener("click", pushCover);
saveCoverButton.addEventListener("click", saveCover);
coverImage.addEventListener("dbleclick", deleteCover);
// Helper Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function randomizeCover() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverImage.src = covers[getRandomIndex(covers)];
  coverDesc1.innerText = descriptors[getRandomIndex(descriptors)];
  coverDesc2.innerText = descriptors[getRandomIndex(descriptors)];
}
function pushCover(e) {
  e.preventDefault();
  var savedCovers = new Cover(
    userCover.value,
    userTitle.value,
    userDesc1.value,
    userDesc2.value
  );
  covers.push(savedCovers.title);
  titles.push(savedCovers.cover);
  descriptors.push(savedCovers.tagline1);
  descriptors.push(savedCovers.tagline2);
  makeNewCover(savedCovers);
  viewHome();
}
function makeNewCover(cover) {
  coverTitle.innerText = cover.title;
  coverImage.src = cover.cover;
  coverDesc1.innerText = cover.tagline1;
  coverDesc2.innerText = cover.tagline2;
}
// Event Handlers
function viewForm() {
  homeButton.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  savedView.classList.add("hidden");
}
function viewSave() {
  homeButton.classList.remove("hidden");
  viewSavedButton.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  savedView.classList.remove("hidden");
}
function updateSavedCovers(currentCover) {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i] === currentCover) {
      savedCoverSection.innerHTML += `<section class="mini-cover">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  </section>`;
    }
  }
}
function viewHome() {
  homeButton.classList.add("hidden");
  viewSavedButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  savedCoverSection.classList.add("hidden");
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
}
function saveCover(e) {
  e.preventDefault();
  var currentCover = new Cover(
    coverImage.src,
    coverTitle.innerText,
    coverDesc1.innerText,
    coverDesc2.innerText
  );
  savedCovers.push(currentCover);
  updateSavedCovers(currentCover);
}
