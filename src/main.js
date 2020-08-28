// Create variables targetting the relevant DOM (document object model) elements here 👇
var newCoverImg = document.querySelector('.cover-image');
var newTitle = document.querySelector('.cover-title');
var newDescriptor1 = document.querySelector('.tagline-1');
var newDescriptor2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('view-saved-button');

var formPage = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('saved-view');
var savedCoversArray = document.querySelector('saved-covers-section');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", generateRandomCover);
makeNewButton.addEventListener("click", viewForm);
viewSavedCoversButton.addEventListener("click", viewForm);


// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomCover(){
  var randomCoverImg = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];

  newCoverImg.src = randomCoverImg;
  newTitle.innerText = randomTitle;
  newDescriptor1.innerText = randomDescriptor1;
  newDescriptor2.innerText = randomDescriptor2;

  currentCover = new Cover (newCoverImg, newTitle, newDescriptor1, newDescriptor2);
};

function viewForm() {
  formPage.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
};

function viewSavedCovers() {
  savedCoversArray.innerHTML = '';
  savedCoversView.classList.remove('hidden');
  homeView.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

//I think we need to use the savedCovers variable declared above
