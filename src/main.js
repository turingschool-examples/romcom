var newCustomCover;

// Create variables targetting the relevant DOM elements here 👇
//Iterations 0 & 1
var coverImg = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

generateNewBook()

function generateNewBook() {
  coverImg.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}

var newRandomCoverButton = document.querySelector(".random-cover-button");

newRandomCoverButton.addEventListener("click", generateNewBook);

// We've provided a few variables below

// var savedCovers = [
//   new Cover(
//     "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
//     "Sunsets and Sorrows",
//     "sunsets",
//     "sorrows"
//   )
// ];
// var currentCover;

//Iteration 2
var makeOwnButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homePage = document.querySelector(".home-view");
var formPage = document.querySelector(".form-view");
var viewSavedButton = document.querySelector(".view-saved-button")
var savedPage = document.querySelector(".saved-view")
var showNewButton = document.querySelector(".random-cover-button")

makeOwnButton.addEventListener("click", switchToForm);

function switchToForm() {
  formPage.classList.remove("hidden");
  homePage.classList.add("hidden");
  showNewButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
}

homeButton.addEventListener("click", goHome);

function goHome() {
  formPage.classList.add("hidden");
  homePage.classList.remove("hidden");
  showNewButton.classList.remove("hidden");
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

// var customCoverInput = coverInput.value;
// var customTitleInput = titleInput.value;
// var customDesc1Input = desc1Input.value;
// var customDesc2Input = desc2Input.value;

var makeBookButton = document.querySelector(".create-new-book-button");


makeBookButton.addEventListener("click", function() {
  event.preventDefault();
  makeNewBook(coverInput.value, titleInput.value, desc1Input.value, desc2Input.value);
  displayNewCover();
  goHome();
});
//event.preventDefault() CAN THIS WORK ANYWHERE, WHY PAGE RUNS

function displayNewCover() {
  coverImg.src = newCustomCover.cover;
  coverTitle.innerText = newCustomCover.title;
  tagline1.innerText = newCustomCover.tagline1;
  tagline2.innerText = newCustomCover.tagline2;
}

function makeNewBook(customCoverInput, customTitleInput, desc1Input,desc2Input) {
  covers.push(customCoverInput);
  titles.push(customTitleInput);
  descriptors.push(desc1Input);
  descriptors.push(desc2Input);
  // coverImg.classList.add("hidden");
  // coverTitle.classList.add("hidden");
  // tagline1.classList.add("hidden");
  // tagline2.classList.add("hidden");
  newCustomCover = new Cover(customCoverInput, customTitleInput, desc1Input, desc2Input);
  console.log("hello");

}

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
