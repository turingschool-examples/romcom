// Create variables targetting the relevant DOM elements here 👇

var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button")
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");

var homeView = document.querySelector(".home-view");
var savedCoversView = document.querySelector(".saved-view");
var viewForm = document.querySelector(".form-view");
var savedCoverSection = document.querySelector(".saved-covers-section");

var formCover = document.querySelector(".user-cover");
var formTitle = document.querySelector(".user-title");
var formDescriptor1 = document.querySelector(".user-desc1");
var formDescriptor2 = document.querySelector(".user-desc2");

var makeMyBook = document.querySelector(".create-new-book-button");

var currentImage = document.querySelector(".cover-image");
var currentTitle = document.querySelector(".cover-title");
var currentTag1 = document.querySelector(".tagline-1");
var currentTag2 = document.querySelector(".tagline-2");



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;


// Add your event listeners here 👇
window.addEventListener("load", createRandomCover);

randomCoverButton.addEventListener("click", createRandomCover);

makeNewButton.addEventListener("click", viewCoverForm);

viewSavedButton.addEventListener("click", viewSavedPage);

homeButton.addEventListener("click", viewHomePage);

makeMyBook.addEventListener("click", pushMyBook);

saveCoverButton.addEventListener("click", saveCover);

removeSavedCover.addEventListener("dblclick", removeCover)

// Create your event handlers and other functions here 👇
function displayNewCover(coverValue, titleValue, descriptor1Value, descriptor2Value) {

currentCover = new Cover(coverValue, titleValue, descriptor1Value, descriptor2Value);

currentImage.src = currentCover.cover;
currentTitle.innerText = currentCover.title;
currentTag1.innerText = currentCover.tagline1;
currentTag2.innerText = currentCover.tagline2;
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover() {
  var newCover = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newTagline1 = descriptors[getRandomIndex(descriptors)];
  var newTagline2 = descriptors[getRandomIndex(descriptors)];

  displayNewCover(newCover, newTitle, newTagline1, newTagline2);
}

function viewHomePage() {
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  homeView.classList.remove("hidden");
  viewForm.classList.add("hidden");
  savedCoversView.classList.add("hidden");
}

function viewSavedPage() {
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  homeView.classList.add("hidden");
  viewForm.classList.add("hidden");
  savedCoversView.classList.remove("hidden");

  showSaved();
}

function viewCoverForm() {
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  homeView.classList.add("hidden");
  viewForm.classList.remove("hidden");
  savedCoversView.classList.add("hidden");
}

function pushMyBook(event) {
  event.preventDefault();
  var formCoverValue = formCover.value;
  var formTitleValue = formTitle.value;
  var formDescriptor1Value = formDescriptor1.value;
  var formDescriptor2Value = formDescriptor2.value;

  covers.push(formCoverValue);
  titles.push(formTitleValue);
  descriptors.push(formDescriptor1Value);
  descriptors.push(formDescriptor2Value);

  viewHomePage();

  displayNewCover(formCoverValue, formTitleValue, formDescriptor1Value, formDescriptor2Value);
};


function showSaved() {
  savedCoverSection.innerHTML = ``
  for(var i = 0; i < savedCovers.length; i++) {
    savedCoverSection.innerHTML += `
      <section id="${savedCovers[i].id}" class="mini-cover">
      <img class="cover-image" src="${savedCovers[i].cover}">
      <h2 class="cover-title"> ${savedCovers[i].title}</h2>
      <h3 class="tagline">A Tale of <span class="tagline-1"> ${savedCovers[i].tagline1}</span> and <span class="tagline-2"> ${savedCovers[i].tagline2}</span></h3>
      </section>`;
   }
};

function saveCover() {
  if(!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

function removeCover() {

};
