// Create variables targetting the relevant DOM elements here 👇
//current cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
//pages
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
//buttons
var homeButton = document.querySelector('.home-button');
var randomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var newCoverButton = document.querySelector('.make-new-button');
var generateCoverButton = document.querySelector('create-new-book-button');
//form inputs

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

//home page
coverImage.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
coverTagline1.innerText = descriptors[getRandomIndex(descriptors)];
coverTagline2.innerText = descriptors[getRandomIndex(descriptors)];

// Add your event listeners here 👇
homeButton.onclick = viewHome;
randomButton.onclick = randomCover;
newCoverButton.onclick = viewForm;
viewSavedButton.onclick = viewSavedCover;
generateCoverButton.onclick = generateCustomCover;


// Create your event handlers and other functions here 👇
function randomCover() {
 currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
 coverImage.src = currentCover.cover;
 coverTitle.innerText = currentCover.title;
 coverTagline1.innerText = currentCover.tagline1;
 coverTagline2.innerText = currentCover.tagline2;
}

function viewForm() {
  homeView.style.display = "none";
  savedCoversView.style.display = "none";
  formView.style.display = "block";
  homeButton.style.display = "block";
  randomButton.style.display = "none";
  saveCoverButton.style.display = "none";
  viewSavedButton.style.display = "block";
  newCoverButton.style.display = "none";
}

function viewSavedCover() {
  homeView.style.display = "none";
  savedCoversView.style.display = "block";
  formView.style.display = "none";
  homeButton.style.display = "block";
  randomButton.style.display = "none";
  saveCoverButton.style.display = "none";
  viewSavedButton.style.display = "none";
  newCoverButton.style.display = "block";
}

function viewHome() {
  homeView.style.display = "block";
  savedCoversView.style.display = "none";
  formView.style.display = "none";
  homeButton.style.display = "none";
  randomButton.style.display = "block";
  saveCoverButton.style.display = "block";
  viewSavedButton.style.display = "block";
  newCoverButton.style.display = "block";
}

/*function generateCustomCover() {
  var imageInput = document.querySelector('.user-cover'.value);
  var titleInput = document.querySelector('.user-title'.value);
  coverImage.src = imageInput;
  coverTitle.innerText = titleInput;
  covers.push(imageInput);
  viewhome();
}*/


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
