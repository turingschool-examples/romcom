// Create variables targetting the relevant DOM elements here 👇
const homeView = document.querySelector(".view");
const formView = document.querySelector(".form-view");
const savedCoversView = document.querySelector(".saved-view");
const savedCoversLayout = document.querySelector(".saved-covers-section");

const randomCoverButton = document.querySelector(".random-cover-button");
const makeCoverButton = document.querySelector(".make-new-button");
const saveCoverButton = document.querySelector(".save-cover-button");
const homeButton = document.querySelector(".home-button");
const savedCoversButton = document.querySelector(".view-saved-button");

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagline = document.querySelector(".tagline");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// We've provided a few variables below
var savedCovers = [
  createCover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
console.log(savedCovers);

var currentCover = coverImage;

var allCoversArr = createSavedCovers();
console.log(allCoversArr);
console.log(allCoversArr.length);

// ========= Add your event listeners here 👇 ==========
window.addEventListener("load", pageLoad);

randomCoverButton.addEventListener("click", showNewCover);

makeCoverButton.addEventListener("click", switchToForm);

savedCoversButton.addEventListener("click", viewSavedCovers);

// ========== Create your event handlers and other functions here 👇 ==========

function pageLoad() {
  // console.log("Your work is showing up in the browser!");
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTag1 = descriptors[getRandomIndex(descriptors)];
  var randomTag2 = descriptors[getRandomIndex(descriptors)];
  currentCover.src = randomCover;
  coverTitle.innerHTML = randomTitle;
  tagline1.innerHTML = randomTag1;
  tagline2.innerHTML = randomTag2;
}

function showNewCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTag1 = descriptors[getRandomIndex(descriptors)];
  var randomTag2 = descriptors[getRandomIndex(descriptors)];

  currentCover.src = randomCover;
  coverTitle.innerText = randomTitle;
  tagline1.innerText = randomTag1;
  tagline2.innerText = randomTag2;
}

function switchToForm() {
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.toggle("hidden");
  homeView.classList.toggle("hidden");
  savedCoversView.classList.toggle("hidden");
  formView.classList.toggle("hidden");
}

function viewSavedCovers() {
  // view saved covers page - querySel (page, button), eventList
  // hide homepage view - similar to form view
  // hide make your own and save
  // ***looks like we need to create all the covers and add them to the saved covers array***
  // Step 1. Create array with all info from data.js
  // Step 2. Iterate over covers array - pull out the info you need to build the HTML elements
  homeButton.classList.toggle("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeView.classList.toggle("hidden");
  savedCoversView.classList.toggle("hidden");
  // savedCoversLayout.innerHTML = `<img class="cover-image" src="./assets/prairie.jpg">`;
  // console.log(savedCovers[0].coverImg);
  var htmlSavedCoversString = "";
  for (let i = 0; i < allCoversArr.length; i++) {
    htmlSavedCoversString += `<section class="main-cover"> \
    <img class="cover-image" src=${allCoversArr[i].coverImg}> \
    <h2 class="cover-title">${allCoversArr[i].title}</h2> \
    <h3 class="tagline">A tale of <span class="tagline-1">${allCoversArr[i].tagline1}</span> and <span class="tagline-2">${allCoversArr[i].tagline2}</span></h3> \
    <img class="overlay" src="./assets/overlay.png"> \
    </section>`;
    // `<div>${i}</div>`;
  }
  console.log(htmlSavedCoversString);
  savedCoversLayout.innerHTML = htmlSavedCoversString;

  // TEST DISPLAY THE SAVED COVER IMAGE WITH THE GIVEN EXAMPLE
  // savedCoversLayout.innerHTML = `<section class="main-cover"> \
  // <img class="cover-image" src=${savedCovers[0].coverImg}> \
  // <h2 class="cover-title">${savedCovers[0].title}</h2> \
  // <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[0].tagline1}</span> and <span class="tagline-2">${savedCovers[0].tagline2}</span></h3> \
  // <img class="overlay" src="./assets/overlay.png"> \
  // </section>`;
}

function createSavedCovers() {
  var coversArr = [];
  for (let i = 0; i < covers.length; i++) {
    coversArr.push(
      createCover(
        covers[i],
        titles[i],
        descriptors[getRandomIndex(descriptors)],
        descriptors[getRandomIndex(descriptors)]
      )
    );
  }
  return coversArr;
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
    tagline2: descriptor2,
  };
  return cover;
}
