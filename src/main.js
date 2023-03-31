
// Create variables targetting the relevant DOM elements here 👇
// ** Button Vars** //

var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
var goHomeButton = document.querySelector(".home-button");
var makeBookButton = document.querySelector(".create-new-book-button")
// ** Page vars ** //

var viewForm = document.querySelector(".form-view");
var viewHome = document.querySelector(".home-view");
var viewSaved = document.querySelector(".saved-view");
var saveCover = document.querySelector(".saved-covers-section");

// ** Cover Vars ** //
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// ** Form Vars ** //
var customCover = document.getElementById('cover')
var customTitle = document.getElementById('title')
var customDescriptor1 = document.getElementById('descriptor1')
var customDescriptor2 = document.getElementById('descriptor2')

// ** We've provided a few variables below ** //
// ** Prospective vars ** //
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// ** Event Listeners ** //
randomCoverButton.onclick = handleRandomCoverButtonClicked;
saveCoverButton.onclick = handleSaveCoverButtonClicked;
viewSavedButton.onclick = handleViewSavedButtonClicked;
makeNewButton.onclick = handleNewButtonClicked;
goHomeButton.onclick = handleHomeButtonClicked;
makeBookButton.onclick = createCover;


// Create your event handlers and other functions here 👇

// Hide and Show functions //

function hide(element) {
  element.classList.add("hidden")
}

function show(element) {
  element.classList.remove("hidden")
}


// ** Button functions for navigating site ** //
function handleNewButtonClicked(){
  show(makeNewButton);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  show(viewForm);
  hide(viewHome);
  hide(saveCover)
};

function handleViewSavedButtonClicked(){
  show(makeNewButton);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  show(viewSaved);
  hide(viewForm);
  hide(viewHome);
  hide(saveCover)
};

function handleSaveCoverButtonClicked(){
  show(makeNewButton);
  show(randomCoverButton);
  show(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  hide(viewForm);
  hide(viewHome);
  show(saveCover)
};

function handleHomeButtonClicked(){
  show(makeNewButton);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  hide(viewForm);
  show(viewHome);
  hide(saveCover)
};
//*** Randomizer of front page-cover button function ***//
function handleRandomCoverButtonClicked(){
  var currentCover = randomCover();
  coverImage.src = covers[currentCover.coverImg];
  coverTitle.innerText = titles[currentCover.title];
  tagline1.innerText = descriptors[currentCover.tagline1];
  tagline2.innerText = descriptors[currentCover.tagline2]
}

//*** Randomizer of cover object ***//
function randomCover() {
  var randomCover = {
    id: Date.now(),
    coverImg: getRandomIndex(covers),
    title: getRandomIndex(titles),
    tagline1: getRandomIndex(descriptors),
    tagline2: getRandomIndex(descriptors),
  }
  return randomCover
}

//*** Randomizer of array retrieval function ***//
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// ** Create Cover Function ** //

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
