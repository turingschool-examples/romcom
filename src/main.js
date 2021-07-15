// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button');
var form = document.querySelector('.form-view');
var home = document.querySelector('.home-view');
var newCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var savedCoversView = document.querySelector('.saved-view');
var viewSavedButton = document.querySelector('.view-saved-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomButton.onclick = newCover;
newCoverButton.onclick = viewForm;
viewSavedButton.onclick = viewSavedCover;
homeButton.onclick = viewHome;

// Create your event handlers and other functions here 👇
function newCover() {
 currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
 coverImage.src = currentCover.cover;
 coverTitle.innerText = currentCover.title;
 coverTagline1.innerText = currentCover.tagline1;
 coverTagline2.innerText = currentCover.tagline2;
}

function viewForm() {
  form.style.display = "block";
  home.style.display = "none";
  saveCoverButton.style.display = "none";
  randomButton.style.display = "none";
  homeButton.style.display = "block";
  newCoverButton.style.display = "none";
}

function viewSavedCover() {
  home.style.display = "none";
  homeButton.style.display = "block";
  saveCoverButton.style.display = "none";
  savedCoversView.style.display = "block";
  randomButton.style.display = "none";
  viewSavedButton.style.display = "none";
}

function viewHome() {
  home.style.display = "block";
  form.style.display = "none";
  savedCoversView.style.display = "none";
  randomButton.style.display = "block";
  viewSavedButton.style.display = "block";
  saveCoverButton.style.display = "block";
  homeButton.style.display = "none";
  newCoverButton.style.display = "block";
}

coverImage.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
coverTagline1.innerText = descriptors[getRandomIndex(descriptors)];
coverTagline2.innerText = descriptors[getRandomIndex(descriptors)];
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
