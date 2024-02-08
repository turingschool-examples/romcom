// Create variables targetting the relevant DOM elements here 👇
document.addEventListener('DOMContentLoaded', function () {
  // Get references to different sections and buttons
  var homeSection = document.querySelector('.home-view');
  var formSection = document.querySelector('.form-view');
  var savedCoversSection = document.querySelector('.saved-covers-view');
  
  var homeButton = document.querySelector('.home-button');
  var randomCoverButton = document.querySelector('.random-cover-button');
  var saveCoverButton = document.querySelector('.save-cover-button');
  var viewSavedButton = document.querySelector('.view-saved-button');
  var makeNewButton = document.querySelector('.make-new-button');
  
  // Event listener for "Make Your Own Cover" button
  makeNewButton.addEventListener('click', function () {
    // Hide homepage, show form view
    homeSection.classList.add('hidden');
    formSection.classList.remove('hidden');
    
    // Hide other buttons
    viewSavedButton.style.display = 'none';
    randomCoverButton.style.display = 'none';
    saveCoverButton.style.display = 'none';
  });
  
  // Event listener for "View Saved Covers" button
  viewSavedButton.addEventListener('click', function () {
    // Hide homepage, show saved covers view
    homeSection.classList.add('hidden');
    viewSavedButton.classList.remove('hidden');
    
    // Hide other buttons
    makeNewButton.style.display = 'none';
    randomCoverButton.style.display = 'none';
    saveCoverButton.style.display = 'none';
  });
  
  // Event listener for "Home" button
  homeButton.addEventListener('click', function () {
    // Show homepage, hide other views
    homeSection.classList.remove('hidden');
    formSection.classList.add('hidden');
    //savedCoversSection.classList.add('hidden');
    
    // Show other buttons
    makeNewButton.style.display = 'inline-block';
    viewSavedButton.style.display = 'inline-block';
    randomCoverButton.style.display = 'inline-block';
    saveCoverButton.style.display = 'inline-block';
  });
});


// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


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

