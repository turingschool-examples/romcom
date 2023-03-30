// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var coverImage = document.querySelector('.cover-image');
var randomButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var saveCoverButton = document.querySelector('.save-cover-button')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// Displays random cover when random cover button is clicked
randomButton.addEventListener('click', newRandomBook)

// Displays random cover on Load
window.addEventListener('DOMContentLoaded', newRandomBook)

// Shows saved covers and hides new random cover, save cover buttons
viewSavedButton.addEventListener('click', showSavedCovers);

// Shows make your own cover form
// makeCoverButton.addEventListener('click', makeCoverForm);

// Shows home page
homeButton.addEventListener('click', homePage);

// Create your event handlers and other functions here 👇
function newRandomBook() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  coverImage.src = covers[getRandomIndex(covers)];
}

//  Write a function that:
  // 1. shows the home button
  // 2. hides the home view
  // 3. shows the make your own cover form
  // 4. hides the random cover button
  // 5. hides the save cover button

// function makeCoverForm() {
//   homeButton.classList.remove('hidden');
//   homeView.classList.add("hidden");
//   formView.classList.remove('hidden');
//   randomButton.classList.add('hidden');
//   saveCoverButton.classList.add('hidden');
// }

// write a function that:
  // 1. shows the saved covers section
  // 2. hides show new random cover and save cover buttons
  // 3. shows the home button
  // 4. hides the make new cover form
  // 5. hides the main cover

  function showSavedCovers() {
    randomButton.classList.add('hidden');
    saveCoverButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
    savedView.classList.remove('hidden');
    formView.classList.add('hidden');
    homeView.classList.add('hidden');
  } 

  // write a function that:
    // shows home view
    // hides make cover form
    // hides saved cover view
    // hides home button
    // shows save cover button
    // shows saved covers button
    // shows make your own cover button
  
  function homePage() {
    homeView.classList.remove('hidden');
    formView.classList.add('hidden');
    savedView.classList.add('hidden');
    homeButton.classList.add('hidden');
    saveCoverButton.classList.remove('hidden');
    makeCoverButton.classList.remove('hidden');
    randomButton.classList.remove('hidden');
    viewSavedButton.classList.remove('hidden');
  };





// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

