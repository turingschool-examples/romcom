// Create variables targetting the relevant DOM elements here
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var homeButton = document.querySelector('.home-button');
var makeMyBookButton = document.querySelector(".create-new-book-button");
var coverInput = document.querySelector("#cover");
var titleInput = document.querySelector("#title");
var descriptor1Input = document.querySelector("#descriptor1");
var descriptor2Input = document.querySelector("#descriptor2");
var saveCoverButton = document.querySelector(".save-cover-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
coverImage.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];
// Add your event listeners here 👇
randomCoverButton.addEventListener('click', makeNewCover);
window.addEventListener("load", makeNewCover);
makeCoverButton.addEventListener('click', clickMakeCoverButton);
viewSavedButton.addEventListener('click', clickViewSavedCovers);
homeButton.addEventListener('click', clickHomeButton);
makeMyBookButton.addEventListener("click", addUserValue);
saveCoverButton.addEventListener("click", saveCover);
// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function makeNewCover() {
  var src = covers[getRandomIndex(covers)];
  var title = titles[getRandomIndex(titles)];
  var tagline1Text = descriptors[getRandomIndex(descriptors)];
  var tagline2Text = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(src, title, tagline1Text, tagline2Text);
  displayNewCover(currentCover);
};

function displayNewCover(cover) {
  coverImage.src = cover.cover;
  coverTitle.innerText = cover.title;
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
};

function clickMakeCoverButton() {
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.form-view').classList.remove('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
};

function clickViewSavedCovers() {
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.saved-view').classList.remove('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  displayMiniCover();
};

function clickHomeButton() {
  document.querySelector('.home-view').classList.remove('hidden');
  document.querySelector('.save-cover-button').classList.remove('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.remove('hidden');
  document.querySelector('.home-button').classList.add('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  displayCustomCover(currentCover);
};

function addUserValue() {
  event.preventDefault();
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value);
  descriptors.push(descriptor2Input.value);
  createUserCover();
};

function createUserCover() {
  currentCover = new Cover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value);
};

function displayCustomCover(cover) {
  coverImage.src = cover.cover;
  coverTitle.innerText = cover.title;
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover);
} return
};

function displayMiniCover() {
  var displayedCovers = [];
  savedCoversSection.innerHTML = displayedCovers;
  for (i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `<section class="mini-cover">
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`
  }
};
