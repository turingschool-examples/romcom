// Create variables targetting the relevant DOM elements here 👇

var coverTitle = document.querySelector('.cover-title')
var coverImage = document.querySelector('.cover-image');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2')

var buttonViewSavedCover = document.querySelector(".view-saved-button");
var buttonRandomCover = document.querySelector('.random-cover-button')
var buttonMakeYourOwnCover = document.querySelector(".make-new-button")
var buttonHome = document.querySelector('.home-button')
var buttonSaveCover = document.querySelector(".save-cover-button")
var buttonMakeMyBook = document.querySelector("create-new-book-button");

var viewMakeYourOwnCoverForm = document.querySelector(".form-view")
var viewHome = document.querySelector(".home-view")
var viewSavedCoversPage = document.querySelector(".saved-view");

var inputCover = document.getElementById("cover");
var inputTitle = document.getElementById("title");
var inputFirstDescriptor = document.getElementById("descriptor1");
var inputSecondDescriptor = document.getElementById("descriptor2");
//query select saved cover button- 


// We've provided a few variables below
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover;

// Add your event listeners here 👇

window.addEventListener("load", makeRandomCover);
buttonRandomCover.addEventListener("click", makeRandomCoversButton);
buttonMakeYourOwnCover.addEventListener("click", makeNewCoverForm);
buttonViewSavedCover.addEventListener('click', viewSavedCovers);
buttonHome.addEventListener("click", viewHomePage);
buttonMakeMyBook.addEventListener('click', makeMyBook); 


// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  var newCovers = covers[getRandomIndex(covers)]  
  var newTitles = titles[getRandomIndex(titles)]
  var newDescriptors1 = descriptors[getRandomIndex(descriptors)]
  var newDescriptors2 = descriptors[getRandomIndex(descriptors)]
 coverTitle.innerText = newTitles
 coverImage.src = newCovers
 tagLine1.innerText = newDescriptors1
 tagLine2.innerText = newDescriptors2

}

function makeRandomCoversButton() {
  var newCovers = covers[getRandomIndex(covers)]; 
  coverImage.src = newCovers;
}

function makeNewCoverForm() {
  viewMakeYourOwnCoverForm.classList.remove("hidden");
  buttonHome.classList.remove("hidden");
  viewHome.classList.add("hidden");
  buttonRandomCover.classList.add("hidden");
  buttonViewSavedCover.classList.remove("hidden");
  buttonSaveCover.classList.add("hidden")
}

function viewSavedCovers() {
  viewHome.classList.add("hidden");
  viewMakeYourOwnCoverForm.classList.add("hidden");
  buttonRandomCover.classList.add("hidden");
  buttonSaveCover.classList.add("hidden")
  viewSavedCoversPage.classList.remove("hidden")
  buttonHome.classList.remove("hidden");
}

function viewHomePage() {
  viewHome.classList.add("hidden");
  viewMakeYourOwnCoverForm.classList.add("hidden");
  buttonHome.classList.add("hidden");
  buttonRandomCover.classList.remove("hidden");
  buttonSaveCover.classList.remove("hidden")
  viewSavedCoversPage.classList.remove("hidden")
  viewHome.classList.remove("hidden");
  buttonViewSavedCover.classList.remove("hidden");
}

function makeMyBook(event) {
  debugger
  event.preventDefault();
  inputCover = document.getElementById("cover").value;
  inputTitle = document.getElementById("title").value;
  inputFirstDescriptor = document.getElementById("descriptor1").value;
  inputSecondDescriptor = document.getElementById("descriptor2").value;
  covers.unshift(inputCover).value;
  titles.unshift(inputTitle).value;
  descriptors.unshift(inputDescriptors1).value;
  descriptors.unshift(inputDescriptors2).value;
  viewMakeYourOwnCoverForm.classList.remove("hidden");
}

