// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var currentDescription1 = document.querySelector('.tagline-1');
var currentDescription2 = document.querySelector('.tagline-2');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var randomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var createOwnCoverButton = document.querySelector('.make-new-button');
var savedCoverButton = document.querySelector('.save-cover-button');





// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇

//This will load a random cover when page loads
window.addEventListener('load', createRandomCover);

//this will create a random cover when button "show new random cover" is clicked.
randomCoverButton.addEventListener('click', createRandomCover);


/*________________________________________ Create your event handlers and other functions here 👇________*/
//Will randomize elements in the array in class ****stuff***.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//function declared that will be called when button is clicked for Show New Random Cover
function createRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  currentDescription1.innerText = currentCover.tagline1;
  currentDescription2.innerText = currentCover.tagline2;
}

/*---When a user clicks the “Make Your Own Cover” button, we should see the form,
-----and the homepage view should be hidden*/
