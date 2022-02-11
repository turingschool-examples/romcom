// Create variables targetting the relevant DOM elements here 👇

// Cover section
var title = document.querySelector('h2');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var image = document.querySelector('.cover-image');

// Buttons
var makeRandomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedCoverButton = document.querySelector('.view-saved-button')
var homeButton = document.querySelector('.home-button')

var currentCover;

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇

window.addEventListener('load', newCover);

makeRandomCoverButton.addEventListener('click', newCover);

makeOwnCoverButton.addEventListener('click', function(){
  document.querySelector('.form-view').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
});

viewSavedCoverButton.addEventListener('click', function(){
  document.querySelector('.saved-view').classList.remove('hidden');
  document.querySelector('.home-view').classList.add('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.add('hidden');
  document.querySelector('.save-cover-button').classList.add('hidden');
  document.querySelector('.home-button').classList.remove('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
});

homeButton.addEventListener('click', function(){
  document.querySelector('.home-view').classList.remove('hidden');
  document.querySelector('.form-view').classList.add('hidden');
  document.querySelector('.saved-view').classList.add('hidden');
  document.querySelector('.random-cover-button').classList.remove('hidden');
  document.querySelector('.save-cover-button').classList.remove('hidden');
  document.querySelector('.home-button').classList.add('hidden');
  document.querySelector('.view-saved-button').classList.remove('hidden');
  document.querySelector('.make-new-button').classList.remove('hidden');
});

saveCoverButton.addEventListener('click');

// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function newCover() {
  title.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  image.src = covers[getRandomIndex(covers)];
  currentCover = new Cover(image.src, title.innerText, tagline1.innerText, tagline2.innerText);
}
