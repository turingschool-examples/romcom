// ========== VARIABLES TARGETING DOM ELEMENTS ==========

// LAYOUT VARIABLES:

const homeView = document.querySelector(".view");
const formView = document.querySelector(".form-view");
const savedCoversView = document.querySelector(".saved-view");
const savedCoversLayout = document.querySelector(".saved-covers-section");

// BUTTON VARIABLES:

const controls = document.querySelectorAll("section.controls > button");
const randomCoverButton = document.querySelector(".random-cover-button");
const makeCoverButton = document.querySelector(".make-new-button");
const saveCoverButton = document.querySelector(".save-cover-button");
const homeButton = document.querySelector(".home-button");
const viewCoversButton = document.querySelector(".view-saved-button");
const createNewBookButton = document.querySelector(".create-new-book-button");

// INPUT VARIABLES:

var coverInput = document.querySelector(".user-cover");
var titleInput = document.querySelector(".user-title");
var desc1Input = document.querySelector(".user-desc1");
var desc2Input = document.querySelector(".user-desc2");

// COVER VARIABLES:

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagline = document.querySelector(".tagline");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

const coverObject = document.querySelectorAll(".main-cover");




// ========== VARIABLES GIVEN TO START WITH ==========

var savedCovers = [
  createCover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];

var currentCover;




// ========= EVENT LISTENERS ==========

window.onload = pageLoad;

randomCoverButton.addEventListener("click", randomizeCover);

makeCoverButton.addEventListener("click", switchToForm);

viewCoversButton.addEventListener("click", viewSavedCovers);

homeButton.addEventListener("click", viewHomePage);

createNewBookButton.addEventListener("click", createNewBook);

saveCoverButton.addEventListener("click", saveCover);

savedCoversLayout.addEventListener("dblclick", deleteCover);




// ========== EVENT HANDLERS/OTHER FUNCTIONS ==========


// RANDOM COVER AND PAGE RELOAD: 

function pageLoad() {

  randomizeCover();
  
 for (var i = 0; i < controls.length; i++) {
  controls[i].classList.add("hidden");
  controls[i].classList.toggle("hidden");
 }

  homeButton.classList.toggle("hidden", true);
  savedCoversView.classList.add("hidden");
  formView.classList.add("hidden");
}



function randomizeCover() {
  
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTag1 = descriptors[getRandomIndex(descriptors)];
  var randomTag2 = descriptors[getRandomIndex(descriptors)];

  currentCover = createCover(randomCover, randomTitle, randomTag1, randomTag2);

  displayCurrentCover(currentCover);
}



// FORM VIEW:

function switchToForm() {
  
  randomCoverButton.classList.toggle("hidden", true);
  saveCoverButton.classList.toggle("hidden", true);
  homeButton.classList.toggle("hidden", false);
  homeView.classList.toggle("hidden", true);
  savedCoversView.classList.toggle("hidden", true);
  formView.classList.toggle("hidden", false);
}




// BOOK CREATE FORM:

function createNewBook(event) {

  event.preventDefault();
  currentCover = createCover(
    coverInput.value,
    titleInput.value,
    desc1Input.value,
    desc2Input.value
  );
  
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(desc1Input.value);
  descriptors.push(desc2Input.value);
  viewHomePage();
  displayCurrentCover(currentCover);
}




// ================== SAVED COVERS FUNCTIONS ===============

function viewSavedCovers() {

  homeButton.classList.toggle("hidden", false);
  randomCoverButton.classList.toggle("hidden", true);
  saveCoverButton.classList.toggle("hidden", true);
  viewCoversButton.classList.toggle("hidden", false);
  homeView.classList.toggle("hidden", true);
  savedCoversView.classList.toggle("hidden", false);
  makeCoverButton.classList.toggle("hidden", false);
  formView.classList.toggle("hidden", true);
  
  var savedCoversHTML = buildSavedCoversString();
  savedCoversLayout.innerHTML = savedCoversHTML;
}


function buildSavedCoversString() {

  var htmlSavedCoversString = "";
  for (let i = 0; i < savedCovers.length; i++) {
    htmlSavedCoversString += 
    `<section class="mini-cover" id="${savedCovers[i].id}"> \
    <img class="cover-image" src=${savedCovers[i].coverImg}> \
    <h2 class="cover-title">${savedCovers[i].title}</h2> \
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3> \
    <img class="overlay" src="./assets/overlay.png"> \
    </section>`;
  }
  return htmlSavedCoversString;
}


function checkCover() {

  var coverCheck = savedCovers.includes(currentCover);
  return coverCheck;
}


function saveCover() {

  var saveCoverCheck = checkCover();
  if (saveCoverCheck === false) {
    savedCovers.push(currentCover);
  } else {
    window.alert("That cover already exists");
  }
}





// ================ HOME VIEW ==================

function displayCurrentCover(currentCover) {
 
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}



function viewHomePage() {

  randomCoverButton.classList.toggle("hidden", false);
  saveCoverButton.classList.toggle("hidden", false);
  homeButton.classList.toggle("hidden", true);
  makeCoverButton.classList.toggle("hidden", false);
  viewCoversButton.classList.toggle("hidden", false);
  homeView.classList.toggle("hidden", false);
  savedCoversView.classList.toggle("hidden", true);
  formView.classList.toggle("hidden", true);
}



function deleteCover(event) {

  var targetCover = event.target.parentNode;
  for (i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id.toString() === targetCover.id) {
      var index = i;
    }
  }
  savedCovers.splice(index, 1);  
  viewSavedCovers();
}





// ========== FUNCTIONS GIVEN TO START WITH ==========

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
