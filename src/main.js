// Create variables targetting the relevant DOM elements here
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
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
