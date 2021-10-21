
// Create variables targetting the relevant DOM elements here 👇
//Iteration 0
var coverImg = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

generateNewBook();

// We've provided a few variables below
//Didn't use for Iteration 1
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  )
];
var currentCover;

//Iteration 1
var newCoverButton = document.querySelector(".random-cover-button");

function generateNewBook() {
  coverImg.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}
newCoverButton.addEventListener("click", generateNewBook);

//Iteration 2
var clickOwnButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homePage = document.querySelector(".home-view");
var formPage = document.querySelector(".form-view");
var viewSavedButton = document.querySelector(".view-saved-button")
var savedPage = document.querySelector(".saved-view")
var showNewButton = document.querySelector(".random-cover-button")

clickOwnButton.addEventListener("click", switchToForm);

function switchToForm() {
  formPage.classList.remove("hidden");
  homePage.classList.add("hidden");
  newCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  //view and make own buttons still show, as instructions say but we wanna make it prettier
}

homeButton.addEventListener("click", goHome);

function goHome() {
  formPage.classList.add("hidden");
  homePage.classList.remove("hidden");
  newCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
}

viewSavedButton.addEventListener("click", viewSavedCovers);

function viewSavedCovers() {
  homePage.classList.add("hidden");
  savedPage.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  showNewButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}


//Iteration 3
var coverInput = document.querySelector(".user-cover");
var titleInput = document.querySelector(".user-title");
var desc1Input = document.querySelector(".user-desc1");
var desc2Input = document.querySelector(".user-desc2");
var customCoverInput = coverInput.value;
var customTitleInput = titleInput.value;
var customDesc1Input = desc1Input.value;
var customDesc2Input = desc2Input.value;
var makeBookButton = document.querySelector(".create-new-book-button");

makeBookButton.addEventListener("click", function() {
  makeNewBook(coverImgSrc, title, descriptor1, descriptor2);
}
);

function makeNewBook() {
  covers.push(customCoverInput);
  titles.push(customTitleInput);
  descriptors.push(desc1Input);
  descriptors.push(desc2Input);
  var newCustomCover = new Cover(customCoverInput, customTitleInput, customDesc1Input, customDesc2Input);

}

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
