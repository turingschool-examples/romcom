// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
var randomButton =  document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homePage = document.querySelector('.home-view');
var coverForm = document.querySelector('.form-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', generateBook);
randomButton.addEventListener('click', generateBook);
makeNewButton.addEventListener('click', showForm)


// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateBook() {
   currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

   coverImage.src = currentCover.cover;
   coverTitle.innerText = currentCover.title;
   tagLine1.innerText = currentCover.tagline1;
   tagLine2.innerText = currentCover.tagline2;
}

function showForm() {
  homePage.classList.add('hidden');
  coverForm.classList.remove('hidden');
}


// When a user clicks the “Make Your Own Cover” button, we should see the form, and the homepage view should be hidden
// When the Form view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden
// When the Form view is visible, the “Home” button should be visible
