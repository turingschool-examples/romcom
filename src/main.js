// Create variables targetting the relevant DOM elements here 👇
var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var covImage = document.querySelector(".cover-image");
var covTitle = document.querySelector(".cover-title");
var firstCovTag = document.querySelector(".tagline-1");
var secCovTag = document.querySelector(".tagline-2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.onload = newCover(), updateHome();
randomCoverButton.addEventListener("click", newCover);
randomCoverButton.addEventListener("click", updateHome);
saveCoverButton.addEventListener("click", saveCover);
// viewSavedButton.addEventListener("click", );
// makeNewCoverButton.addEventListener("click", );
// homeButton.addEventListener("click", );

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function newCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
};

function updateHome () {
  covImage.src = currentCover.cover;
  covTitle.innerHTML = currentCover.title;
  firstCovTag.innerHTML = currentCover.tagline1;
  secCovTag.innerHTML = currentCover.tagline2;
};

function saveCover () {
  savedCovers.push(currentCover);
}