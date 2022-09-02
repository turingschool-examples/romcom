//BUTTON VARIABLES
var homeButton = document.querySelector(".home-button");
var randomButton = document.querySelector(".random-cover-button");
var saveButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");

//PAGE VIEWS
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

//DISPLAYED POSTER ELEMENTS VARIABLES
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

//RANDOM COVER ELEMENTS
var randomImage = covers[getRandomIndex(covers)];
var randomTitle = titles[getRandomIndex(titles)];
var randomTagline1 = descriptors[getRandomIndex(descriptors)];
var randomTagline2 = descriptors[getRandomIndex(descriptors)];

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

//DEFAULT HOME PAGE
var currentCover = new Cover(randomImage, randomTitle, randomTagline1, randomTagline2);

coverImage.src = currentCover.cover;
coverTitle.innerText = currentCover.title;
tagline1.innerText = currentCover.tagline1;
tagline2.innerText = currentCover.tagline2;

//EVENT LISTENERS

randomButton.addEventListener("click", newRandomCover);
makeNewButton.addEventListener("click", showForm);
viewSavedButton.addEventListener("click", showSaved);
homeButton.addEventListener("click", showHome);


//EVENT HANDLERS/MISC FUNCTIONS

function newRandomCover() {
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];

  currentCover = new Cover(randomImage, randomTitle, randomTagline1, randomTagline2);

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
};

function showForm() {
  formView.classList.remove("hidden");
  homeView.classList.add("hidden");
  saveButton.classList.add("hidden")
  randomButton.classList.add("hidden")
  homeButton.classList.remove("hidden")

};
function showSaved(){
savedView.classList.remove("hidden");
homeButton.classList.remove("hidden")
viewSavedButton.classList.add("hidden")
randomButton.classList.add("hidden")
formView.classList.add("hidden");
homeView.classList.add("hidden");
saveButton.classList.add("hidden");
//add every button and view
}
function showHome(){
homeButton.classList.add("hidden");
homeView.classList.remove("hidden");
saveButton.classList.remove("hidden")
randomButton.classList.remove("hidden")
viewSavedButton.classList.add("hidden")
//add every button and view
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
