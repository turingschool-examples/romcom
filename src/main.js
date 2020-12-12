var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var body = document.querySelector('body');
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var pageLoad = document.querySelector('html');
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector(`.cover-title`);
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var hiddenForm = document.querySelector('.form-view');
var coverView = document.querySelector('.home-view');

// Add your event listeners here 👇
window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);
makeNewButton.addEventListener('click', showFormPage);

// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  for ( var i = 0; i < array.length; i++) {
  var randomIndex = array[Math.floor(Math.random() * array.length)];
  }
  return randomIndex;
};
function generateRandomCover() {
  title.innerText = getRandomIndex(titles);
  coverImage.src = getRandomIndex(covers);
  tagline1.innerText = getRandomIndex(descriptors);
  tagline2.innerText = getRandomIndex(descriptors);
};
function showFormPage() {
  hiddenForm.classList.remove('hidden');
  // coverImage.classList.add('hidden');
  // title.classList.add('hidden');
  // tagline1.classList.add('hidden');
  // tagline2.classList.add('hidden');
  coverView.classList.add('hidden');
};



//
// var hidebutton = document.querySelector(".togglebutton");
// hidebutton.onclick = toggle
