
// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector(".random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedButton = document.querySelector(".view-saved-button")
var makeNewButton = document.querySelector(".make-new-button")
var coverImage = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var tagline1 = document.querySelector(".tagline-1")
var tagline2 = document.querySelector(".tagline-2")
/////////////////////////////////////////////////////////////////////////
var viewForm = document.querySelector(".form-view")
var viewHome = document.querySelector(".home-view")
var viewSaved = document.querySelector(".saved-view")
var saveCover = document.querySelector(".saved-covers-section")

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.onclick = handleRandomCoverButtonClicked;
/////////////////////////////////////////////////////////////
saveCoverButton.onclick = handleSaveCoverButtonClicked;
 
viewSavedButton.onclick = handleViewSavedButtonClicked;
makeNewButton.onclick = handleNewButtonClicked;

// Create your event handlers and other functions here 👇

function handleNewButtonClicked(){
  makeNewButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove('hidden');
  viewSaved.classList.add("hidden");
  viewForm.classList.remove("hidden");
  viewHome.classList.add("hidden");
  saveCover.classList.add("hidden")
};
function handleViewSavedButtonClicked(){
  makeNewButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove('hidden');
  viewSaved.classList.remove("hidden");
  viewForm.classList.add("hidden");
  viewHome.classList.add("hidden");
  saveCover.classList.add("hidden")
};
function handleSaveCoverButtonClicked(){
  makeNewButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove('hidden');
  viewSaved.classList.add("hidden");
  viewForm.classList.add("hidden");
  viewHome.classList.add("hidden");
  saveCover.classList.remove("hidden")
};

//////////////////////////////////
function handleRandomCoverButtonClicked(){
  var currentCover = randomCover()
  coverImage.src = covers[currentCover.coverImg]
  coverTitle.innerText = titles[currentCover.title]
  tagline1.innerText = descriptors[currentCover.tagline1]
  tagline2.innerText = descriptors[currentCover.tagline2]
}


function randomCover() {
  var randomCover = {
    id: Date.now(),
    coverImg: getRandomIndex(covers),
    title: getRandomIndex(titles),
    tagline1: getRandomIndex(descriptors),
    tagline2: getRandomIndex(descriptors),
  }
  return randomCover;
}

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
