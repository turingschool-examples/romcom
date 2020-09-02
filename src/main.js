// Create variables targetting the relevant DOM elements here 👇
var coverHtmlElement = document.querySelector(".cover-image");
var titleHtmlElement = document.querySelector(".cover-title");
var tagline1HtmlElement = document.querySelector(".tagline-1");
var tagline2HtmlElement = document.querySelector(".tagline-2");

var makeOwnCoverButtonHtmlElement = document.querySelector(".make-new-button");
var saveCoverButtonHtmlElement = document.querySelector(".save-cover-button");
var randomCoverButtonHtmlElement = document.querySelector(
  ".random-cover-button"
);
var homeButtonHtmlElement = document.querySelector(".home-button");
var homeViewDisplayHtmlElement = document.querySelector(".home-view");
var formViewDisplayHtmlElement = document.querySelector(".form-view");
var viewSavedButonHtmlElement = document.querySelector(".view-saved-button");
var savedCoversDisplayHtmlElement = document.querySelector(".saved-view");
var createNewBookButtonHtmlElement = document.querySelector(
  ".create-new-book-button");
var savedCoversSectionHtmlElement = document.querySelector(".saved-covers-section");


// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇

window.onload = handleOnLoad;

makeOwnCoverButtonHtmlElement.addEventListener(
  "click",
  displayMakeYourOwnCoverForm
);

homeButtonHtmlElement.addEventListener("click", displayHomePage);

randomCoverButtonHtmlElement.addEventListener(
  "click",
  handleOnShowNewRandomCoverClick
);

viewSavedButonHtmlElement.addEventListener("click", displaySavedCovers);

createNewBookButtonHtmlElement.addEventListener("click", developOwnCover);

saveCoverButtonHtmlElement.addEventListener("click", addSavedCoverToSave);

savedCoversSectionHtmlElement.addEventListener("dblclick", deleteSavedCover);
// Create your event handlers and other functions here 👇

function handleOnLoad() {
  currentCover = generateRandomCover();
  displayNewCover(currentCover);
}

function handleOnShowNewRandomCoverClick() {
  currentCover = generateRandomCover();
  displayNewCover(currentCover);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function generateRandomCover() {
  var coverNumber = getRandomIndex(covers);
  var randomImage = covers[coverNumber];
  var titleNumber = getRandomIndex(titles);
  var randomTitle = titles[titleNumber];
  var descriptorNumberOne = getRandomIndex(descriptors);
  var descriptorNumberTwo;
  do {
    descriptorNumberTwo = getRandomIndex(descriptors);
  } while (descriptorNumberOne === descriptorNumberTwo);
  var randomDescriptorOne = descriptors[descriptorNumberOne];
  var randomDescriptorTwo = descriptors[descriptorNumberTwo];

  return new Cover(
    randomImage,
    randomTitle,
    randomDescriptorOne,
    randomDescriptorTwo
  );
}

function displayNewCover(newCover) {
  coverHtmlElement.setAttribute("src", newCover.cover);
  titleHtmlElement.innerText = newCover.title;
  tagline1HtmlElement.innerText = newCover.tagline1;
  tagline2HtmlElement.innerText = newCover.tagline2;
}

function displayMakeYourOwnCoverForm() {
  saveCoverButtonHtmlElement.classList.add("hidden");
  randomCoverButtonHtmlElement.classList.add("hidden");
  homeButtonHtmlElement.classList.remove("hidden");
  formViewDisplayHtmlElement.classList.remove("hidden");
  homeViewDisplayHtmlElement.classList.add("hidden");
  savedCoversDisplayHtmlElement.classList.add("hidden");

}

function displayHomePage() {
  saveCoverButtonHtmlElement.classList.remove("hidden");
  randomCoverButtonHtmlElement.classList.remove("hidden");
  homeButtonHtmlElement.classList.add("hidden");
  formViewDisplayHtmlElement.classList.add("hidden");
  homeViewDisplayHtmlElement.classList.remove("hidden");
  savedCoversDisplayHtmlElement.classList.add("hidden");
}

function displaySavedCovers() {
  saveCoverButtonHtmlElement.classList.add("hidden");
  randomCoverButtonHtmlElement.classList.add("hidden");
  homeButtonHtmlElement.classList.remove("hidden");
  formViewDisplayHtmlElement.classList.add("hidden");
  homeViewDisplayHtmlElement.classList.add("hidden");
  savedCoversDisplayHtmlElement.classList.remove("hidden");
}

function developOwnCover(event) {
  event.preventDefault();
  var userImageInputValue = document.getElementById("cover").value;
  var userTitleInputValue = document.getElementById("title").value;
  var userDescriptor1InputValue = document.getElementById("descriptor1").value;
  var userDescriptor2InputValue = document.getElementById("descriptor2").value;
  currentCover = new Cover(
    userImageInputValue,
    userTitleInputValue,
    userDescriptor1InputValue,
    userDescriptor2InputValue
  );
  covers.push(userImageInputValue);
  titles.push(userTitleInputValue);
  descriptors.push(userDescriptor1InputValue);
  descriptors.push(userDescriptor2InputValue);
  displayNewCover(currentCover);
  displayHomePage();
}
function addSavedCoverToSave() {
  if (!savedCovers.includes(currentCover.id)){
  savedCovers.push(currentCover);
  createSavedCovers();
  }
}

function createSavedCovers() {
  var coverInnerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    var miniCover = `<div class="mini-cover" id="${savedCovers[i].id}">
      <id class="hidden">${savedCovers[i].id}</id>
      <img class="mini-cover" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
      <h2 class="cover-title" id="${savedCovers[i].id}" "first-letter">${savedCovers[i].title}</h2>
      <h3 class="tagline" id="${savedCovers[i].id}">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
      </div>`;
      coverInnerHTML += miniCover
    savedCoversSectionHtmlElement.innerHTML = coverInnerHTML;
  }
}
function deleteSavedCover() {
  var deleteID = event.target.id;
  // var savedCoverArrayHtmlElement = document.querySelectorAll(".saved-covers-section")
  for (var i = 0; i < savedCovers.length; i++) {
    if (deleteID === `${savedCovers[i].id}`) {
      savedCovers.splice(i,1)
    }
  } 
  createSavedCovers();
}
// function handleOnSaveCoverClick() {
  // function compareCovers() {
  //   return (
  //     currentCover.title !== savedCovers.title &&
  //     currentCover.tagline1 !== savedCovers.tagline1 &&
  //     currentCover.tagline2 !== savedCovers.tagline2
  //   );
  // }
  // var isUnique = savedCovers.every(compareCovers);
  // if (isUnique) {
  //   savedCovers.push(currentCover);
  // }
// } 

//look at saved covers array. look at id of that cover using a querySelector()