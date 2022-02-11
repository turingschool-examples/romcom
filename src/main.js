//Global Variables below

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var diyCover = document.querySelector(".make-new-button");
var viewSaved = document.querySelector(".view-saved-button");
//var homeView = document.querySelector(".home-view", ".form-view");
//var homeButton = document.querySelector(".home-button");
//var formView = document.querySelector(".form-view");
//var showRandCover = document.querySelector(".random-cover-button");
//var saveCover = document.querySelector(".save-cover-button");
var currentCover = new Cover();

//savedCovers will be used in  ITERATION 2
// var savedCovers = [
// //can change this or the arguments passed through
// new Cover(
// "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
// "Sunsets and Sorrows",
// "sunsets",
// "sorrows"
// ),
// ];

// Add your event listeners here 👇
window.onload = makeRandomBook();
randomCoverButton.addEventListener("click", makeRandomBook);
// diyCover.addEventListener("click", function () {
//   document.querySelector(".view home-view").hidden = true;
//   document.querySelector(".view form-view hidden").hidden = false;
// });
diyCover.addEventListener("click", function () {
  document.querySelector(".form-view").classList.remove("hidden"));
  document.querySelector(".home-button").classList.remove("hidden"));
  hideElement(document.querySelector(".home-view"));
  hideElement(document.querySelector(".random-cover-button"));
  hideElement(document.querySelector(".save-cover-button"));
});
//..........TRY AN ARRAY? for dryer code since we're repeating ourselves..?
viewSaved.addEventListener("click", function () {
  viewElement(document.querySelector(".saved-view"));
  viewElement(document.querySelector(".home-button"));
  hideElement(document.querySelector(".home-view"));
  hideElement(document.querySelector(".random-cover-button"));
  hideElement(document.querySelector(".save-cover-button"));
});
// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomBook() {
  var randImage = covers[getRandomIndex(covers)];
  var randTitle = titles[getRandomIndex(titles)];
  var randDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randDescriptor2 = descriptors[getRandomIndex(descriptors)];
  createCover(randImage, randTitle, randDescriptor1, randDescriptor2);
}

function createCover(randImage, randTitle, randDescriptor1, randDescriptor2) {
  currentCover = new Cover(
    randImage,
    randTitle,
    randDescriptor1,
    randDescriptor2
  );
  coverImage.src = randImage;
  coverTitle.innerText = randTitle;
  tagline1.innerText = randDescriptor1;
  tagline2.innerText = randDescriptor2;
  //console.log(currentCover)
}
function viewElement(removeDisplay) {
  removeDisplay.classList.remove("hidden");
}

function hideElement(addDisplay) {
  addDisplay.classList.add("hidden");
}
//console.log(savedCovers);
