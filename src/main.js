// Create variables targetting the relevant DOM elements here 👇

//Cover elements
var randomTitle = document.querySelector('.cover-title');
var window = document.querySelector('html')
var randomDescriptor1 = document.querySelector('.tagline-1');
var randomDescriptor2 = document.querySelector(`.tagline-2`);
var image = document.querySelector('.cover-image');

// Buttons
var randomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var makeCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var veiwSavedButton = document.querySelector('.view-saved-button');

//pages
var homePage = document.querySelector('.home-view');
var savedCoversPage = document.querySelector('.saved-view');
var makeCoversPage = document.querySelector('.form-view');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', displayNewCover);
window.addEventListener('load', displayNewCover)
homeButton.addEventListener('click',switchToHome);
veiwSavedButton.addEventListener('click', switchToSavedCovers);
makeCoverButton.addEventListener('click',switchToMakeCovers);

// /* do we create a new function that uses getRandomIndex function as callback?*/

// Create your event handlers and other functions here 👇
function displayNewCover() {
  randomTitle.innerText = titles[getRandomIndex(titles)];
  randomDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  randomDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  image.src = covers[getRandomIndex(covers)];
};


function switchToHome(){
  homeButton.classList.add('hidden')
  saveCoverButton.classList.remove('hidden')
  randomCoverButton.classList.remove('hidden')
  savedCoversPage.classList.add('hidden')
  makeCoversPage.classList.add('hidden')
  homePage.classList.remove('hidden')
}

function switchToSavedCovers(){
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedCoversPage.classList.remove('hidden')
  makeCoversPage.classList.add('hidden')
  homePage.classList.add('hidden')
}

function switchToMakeCovers(){
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedCoversPage.classList.add('hidden')
  makeCoversPage.classList.remove('hidden')
  homePage.classList.add('hidden')
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};


var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');
var createNewBookButton = document.querySelector('.create-new-book-button')

createNewBookButton.addEventListener('click', function(event) {
  event.preventDefault()
  makeUserBook()
});

var newUserBook;

function makeUserBook() {
  newUserBook = {
    image: image.src = userCover.value,
    title: randomTitle.innerText = userTitle.value,
    desc1: randomDescriptor1.innerText = userDesc1.value,
    desc2: randomDescriptor2.innerText = userDesc2.value
  };
  saveUserInputs();
  switchToHome();
  return newUserBook
}

function saveUserInputs() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);
}

///// 

saveCoverButton.addEventListener('click', saveCover);

function saveCover() {
  if (!savedCovers.includes(newUserBook)) {
    savedCovers.push(newUserBook);
  }
  return savedCovers
}



