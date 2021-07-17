// Create variables targeting the relevant DOM elements here 👇
// variables accessing book cover HTML elements
var coverOnLoad = document.querySelector('img');
var titleOnLoad = document.querySelector('h2');
var firstDescriptorOnLoad = document.querySelector('.tagline-1');
var secondDescriptorOnLoad = document.querySelector('.tagline-2');

// Button variables
var randomButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

function createCover() {
  var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverOnLoad.src = currentCover.cover;
  titleOnLoad.innerText = currentCover.title;
  firstDescriptorOnLoad.innerText = currentCover.tagline1;
  secondDescriptorOnLoad.innerText = currentCover.tagline2;
}

// Add your event listeners here 👇
document.addEventListener("DOMContentLoaded", createCover);

var viewSavedCoversButton = document.querySelector('.view-saved-button');
viewSavedCoversButton.addEventListener('click', togglePage);

var makeCoverButton = document.querySelector('.make-new-button');
makeCoverButton.addEventListener('click', makeCoverPage);

// Create your event handlers and other functions here 👇
randomButton.addEventListener("click", createCover);

// var saveCoverButton = document.querySelector('.save-cover-button');
// saveCoverButton.addEventListener('click', togglePage);

function makeCoverPage() {
  var hidePage = document.querySelector('.view home-view hidden');
  hidePage.classList.remove('view');

  var showPage = document.querySelector('.view form-view hidden');
  showPage.classList.remove('hidden');

  var hideButton = document.querySelector('.random-cover-button');
  hideButton.classList.add('hidden');

  var hideButton1 = document.querySelector('.save-cover-button');
  hideButton1.classList.add('hidden');

  var showButton = document.querySelector('.view home-button hidden');
  showButton.classList.remove('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
