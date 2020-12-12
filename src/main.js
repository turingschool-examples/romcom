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

// trying to build a function to toggle between home page & make new cover form
var makeNewButton = document.querySelector(".make-new-button");
// var show = document.querySelector(".show");
//

// Add your event listeners here 👇
window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);

// trying to build a function to toggle between home page & make new cover form
makeNewButton.addEventListener('click', makeNewCover);

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
function makeNewCover() {
  document.querySelector('.view form-view hidden');
}

// trying to build a function to toggle between home page & make new cover form
function toggle(){
  document.querySelector('.view form-view hidden');
}
//
// var hidebutton = document.querySelector(".togglebutton");
// hidebutton.onclick = toggle
