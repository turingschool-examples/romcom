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
};

function clickViewSavedCovers() {
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.saved-view').classList.remove('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.form-view').classList.add('hidden');
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
  savedCovers.push(currentCover);
};
