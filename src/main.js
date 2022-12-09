// Create variables targetting the relevant DOM elements here 👇
var homeButton = document.querySelector(".home-button.hidden");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeOwnCoverButton = document.querySelector(".make-new-button");
var makeMyBookButton = document.querySelector(".create-new-book-button");

var covImage = document.querySelector(".cover-image");
var covTitle = document.querySelector(".cover-title");
var firstCovTag = document.querySelector(".tagline-1");
var secCovTag = document.querySelector(".tagline-2");

var homePageSection = document.querySelector(".main-cover");
var savedCoversSection = document.querySelector(".view.saved-view.hidden");

var newCoverForm = document.querySelector(".view.form-view.hidden");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.onload = makeCovAndUpdate();

randomCoverButton.addEventListener("click", makeCovAndUpdate);

saveCoverButton.addEventListener("click", saveCover);

viewSavedButton.addEventListener("click", viewSavedCovers);

makeOwnCoverButton.addEventListener("click", viewForm);

homeButton.addEventListener("click", viewHome);

makeMyBookButton.addEventListener("click", saveFormData);

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function makeCovAndUpdate() {
  newRandCover();
  updateHome();
};

function newRandCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
};

function updateHome() {
  covImage.src = currentCover.cover;
  covTitle.innerText = currentCover.title;
  firstCovTag.innerText = currentCover.tagline1;
  secCovTag.innerText = currentCover.tagline2;
};

function saveCover() {
  savedCovers.push(currentCover);
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === currentCover.id) {
      return;
    };
  };
};

function viewSavedCovers() {
  randomCoverButton.style.display = "none";
  saveCoverButton.style.display = "none";
  homePageSection.style.display = "none";
  newCoverForm.style.display = "none";
  homeButton.style.display = "block";
  savedCoversSection.style.display = "flex";
};

function displaySavedCovers() {
  for (var i = 0; i < savedCovers.length; i++) {

  }
};



function viewForm() {
  saveCoverButton.style.display = "none";
  homePageSection.style.display = "none";
  randomCoverButton.style.display = "none";
  homeButton.style.display = "block";
  newCoverForm.style.display = "block";
};

function viewHome() {
  savedCoversSection.style.display = "none";
  newCoverForm.style.display = "none";
  homeButton.style.display = "none";
  saveCoverButton.style.display = "block";
  randomCoverButton.style.display = "block";
  homePageSection.style.display = "block";
};

function saveFormData() {
  event.preventDefault();
  var coverInput = document.querySelector("#cover").value;
  var titleInput = document.querySelector("#title").value;
  var desc1Input = document.querySelector("#descriptor1").value;
  var desc2Input = document.querySelector("#descriptor2").value;

  covers.push(coverInput);
  titles.push(titleInput);
  descriptors.push(desc1Input, desc2Input);

  currentCover = new Cover(coverInput, titleInput, desc1Input, desc2Input);

  viewHome();
  updateHome();
 
  document.querySelector("#cover").value = "";
  document.querySelector("#title").value = "";
  document.querySelector("#descriptor1").value = "";
  document.querySelector("#descriptor2").value = "";
};
