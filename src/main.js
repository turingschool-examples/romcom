// Create variables targetting the relevant DOM elements here

//This variable instantiates a new book from the Cover class
var currentCover;

// Variables & querySelector paths
var cover = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var formPage = document.querySelector(".form-view");
var homePage = document.querySelector(".home-view");
var savedPage = document.querySelector(".saved-view");

// Variables for button query paths:
var homeButton = document.querySelector(".home-button");
var coverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoverButton = document.querySelector(".view-saved-button");
var makeYourOwnCoverButton =document.querySelector(".make-new-button");
var createCustomButton = document.querySelector(".create-new-book-button");

// Query paths for make your own book form page:
var userCoverInput = document.querySelector("#cover");
var userTitleInput = document.querySelector("#title");
var userDescInput1 = document.querySelector("#descriptor1");
var userDescInput2 = document.querySelector("#descriptor2");

// Button event listeners here:
window.addEventListener('load', randomRomCover);
homeButton.addEventListener('click', homePageTab);
coverButton.addEventListener('click', randomRomCover);
saveCoverButton.addEventListener('click', saveCover);
viewSavedCoverButton.addEventListener('click', savedRomCoversTab);
makeYourOwnCoverButton.addEventListener('click', makeOwnCoverDisplayForm);
createCustomButton.addEventListener('click', savedRomCovers);


//Make Your Own Cover Fxn's Tab

function savedRomCovers() {
event.preventDefault();
covers.push(userCoverInput.value);
titles.push(userTitleInput.value);
descriptors.push(userDescInput1.value);
descriptors.push(userDescInput2.value);

currentCover = new Cover(userCoverInput.value, userTitleInput.value, userDescInput1.value, userDescInput2.value);

cover.src = currentCover.cover;
title.innerText = currentCover.title;
tagline1.innerText = currentCover.tagline1;
tagline2.innerText = currentCover.tagline2;

homePageTab();
}

// Random Cover Fxn's Section:

function randomRomCover() {
currentCover = new Cover(getRandomCover(covers), getRandomTitle(titles), getRandomDescriptor(descriptors), getRandomDescriptor(descriptors));
cover.src = currentCover.cover;
title.innerText = currentCover.title;
tagline1.innerText = currentCover.tagline1;
tagline2.innerText = currentCover.tagline2;

}

// Master Make Random Book Cover function composed into random cover, title & descriptors:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Get 1 random cover image(jpg, png) string:

function getRandomCover(covers) {
  return covers[getRandomIndex(covers)];
}

//Get a random title:

function getRandomTitle(titles) {
  return titles[getRandomIndex(titles)];
}
//Get a random 1st & 2nd tagline:

function getRandomDescriptor(descriptors) {
  return descriptors[getRandomIndex(descriptors)];
}

//Displays the "make your own cover" page

function makeOwnCoverDisplayForm() {
  formPage.classList.remove("hidden");
  homePage.classList.add("hidden");
  coverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedPage.classList.add("hidden");
}

function savedRomCoversTab () {
  formPage.classList.add("hidden");
  coverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  cover.classList.add("hidden");
  homePage.classList.add("hidden");
  savedPage.classList.remove("hidden");

savedCoversPage();
}

function homePageTab() {
  homePage.classList.remove("hidden");
  cover.classList.remove("hidden");
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
  coverButton.classList.remove("hidden");

}

//Iteration 3
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

var coversSection = document.querySelector(".saved-covers-section");

function savedCoversPage() {
coversSection.innerHTML = '';
for (var i = 0; i < savedCovers.length; i++) {
coversSection.innerHTML+=
`<section class='mini-cover'>
<img class="cover-image" id="${savedCovers[i].id}" src=${savedCovers[i].cover}>
<h2 class="cover-title">${savedCovers[i].title}</h2>
<h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>`
  }
}
