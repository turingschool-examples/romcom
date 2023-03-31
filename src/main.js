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
var createBookButton = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var tagline1Input = document.querySelector('.user-desc1');
var tagline2Input = document.querySelector('.user-desc2');
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

makeCoverButton.addEventListener('click', makeCustomCoverForms)


// Shows saved covers and hides new random cover, save cover buttons
viewSavedButton.addEventListener('click', showSavedCovers);

// Shows home page
homeButton.addEventListener('click', homePage);

createBookButton.addEventListener('click', function(event) {
  event.preventDefault();
  makeCover();
});



// Create your event handlers and other functions here 👇
function newRandomBook() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  coverImage.src = covers[getRandomIndex(covers)];
}

function makeCustomCoverForms() {
  homeButton.classList.remove('hidden')
  homeView.classList.add('hidden')
  formView.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}

function showSavedCovers() {
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
} 
  
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

function makeCover() {
  coverTitle.innerText = titleInput.value;
  tagline1.innerText = tagline1Input.value;
  tagline2.innerText = tagline2Input.value;
  coverImage.src = coverInput.value;
  homePage();
}

// function pushCustomCover() {
//   titles.push(`${titleInput}`)
// }


// Use the values from the inputs to create a new, unique cover object (part of your data model)
// Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
// Change back to the main home view (hiding the form view again)
// Use the newly created cover object to display the newly created cover image, title, and descriptors in the main view on the DOM




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

