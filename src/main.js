// Create variables targetting the relevant DOM elements here 👇

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");
var randomCover = document.querySelector(".random-cover-button")
var makeYourOwnButton = document.querySelector(".make-new-button")
var formView = document.querySelector(".form-view")
var homeView = document.querySelector(".main-cover")
var showRandomButton = document.querySelector('#random-cover-button')
var saveButton = document.querySelector(".save-cover-button")
var homeButton = document.querySelector(".home-button")
var savedView = document.querySelector(".view-saved-button")
var savedSection = document.querySelector(".saved-view")
var makeBookButton = document.querySelector(".create-new-book-button")
var customCover = document.querySelector("#cover")
var customTitle = document.querySelector("#title")
var customTagLine1 = document.querySelector("#descriptor1")
var customTagLine2 = document.querySelector("#descriptor2")

// Add your event listeners here 👇

randomCover.addEventListener("click", showNewRandomCover)
makeYourOwnButton.addEventListener("click", showForm)
savedView.addEventListener("click", viewSaved)
homeButton.addEventListener("click", viewHome)
makeBookButton.addEventListener("click", function(event) {
  event.preventDefault()
  makeBook()
})

// Create your event handlers and other functions here 👇
function makeBook(){
  viewHome();
  storeBook();
  showForm();
  viewSaved();
  coverTitle.innerText = customTitle.value;
  coverImage.src = customCover.value;
  tagLine1.innerText = customTagLine1.value;
  tagLine2.innerText = customTagLine2.value;



}

function storeBook(){
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
  titles.push(customTitle.value);
  covers.push(customCover.value);
  descriptors.push(customTagLine1.value, customTagLine2.value);
}



function viewSaved(){
  homeView.classList.toggle("hidden")
  savedSection.classList.toggle("hidden")
  showRandomButton.classList.toggle("hidden")
  saveButton.classList.toggle("hidden")
  homeButton.classList.toggle("hidden")
}

function viewHome(){
  homeView.classList.toggle("hidden")
  savedSection.classList.toggle("hidden")
  showRandomButton.classList.toggle("hidden")
  saveButton.classList.toggle("hidden")
  homeButton.classList.toggle("hidden")
}

function hideCover() {

}

function showForm() {
  formView.classList.toggle("hidden")
  homeView.classList.toggle("hidden")
  showRandomButton.classList.toggle("hidden")
  saveButton.classList.toggle("hidden")
  homeButton.classList.toggle("hidden")
}

//split into two, generatecover
//
function showNewRandomCover() {
coverTitle.innerText = titles[getRandomIndex(titles)]
coverImage.src = covers[getRandomIndex(covers)]
tagLine1.innerText = descriptors[getRandomIndex(descriptors)]
tagLine2.innerText = descriptors[getRandomIndex(descriptors)]
newRandomCover()
}

 function newRandomCover() {
   currentCover = new Cover(coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
 }
showNewRandomCover();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
