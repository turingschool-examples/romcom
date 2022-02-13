//Status:
//currently doubleclick gives us the same

//Global Variables below

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var savedView = document.querySelector(".saved-view");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var viewSavedB = document.querySelector(".view-saved-button");
var homeB = document.querySelector(".home-button");
var randomCoverB = document.querySelector(".random-cover-button");
var makeNewB = document.querySelector(".make-new-button");
var saveCoverB = document.querySelector(".save-cover-button");
var createNewBookB = document.querySelector(".create-new-book-button");
var saveInputCover = document.querySelector(".user-cover");
var saveInputTitle = document.querySelector(".user-title");
var saveInputDesc1 = document.querySelector(".user-desc1");
var saveInputDesc2 = document.querySelector(".user-desc2");
var savedCoverSect = document.querySelector(".saved-covers-section");
var currentCover = new Cover();
var savedCoverClass = document.querySelector(".mini-cover");


var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];

// Add your event listeners here 👇
window.onload = makeRandomBook();
randomCoverB.addEventListener("click", makeRandomBook);
makeNewB.addEventListener("click", showFormView);
viewSavedB.addEventListener("click", showSavedView);
homeB.addEventListener("click", showHomeView);
createNewBookB.addEventListener("click", storeUserInput);
saveCoverB.addEventListener("click", saveCover);

//savedCoverSect.addEventListener("dblclick", deleteSavedCover);
//what element are our mini cover in
// If our 'html section/conatiner' that holds the cover the user is trying to delete
// we want to find the id of that .mini-cover instance and then
//   1. remove that 'html section/container'
//   2. delete from the array
//
// the id is the same for both the html that


/* what is the var*/
//on the double click, delete saved cover
//hover tip idea: ____.addEventListener('mouseover', deleteHint)

//Create your event handlers and other functions here 👇
function deleteSavedCover(id){
  // savedCovers = document.getElementById("this.id")
  // savedCovers.removeChild().childNode[0]
  console.log('I double clicked');
  displaySavedCovers()
  console.log(id)
  // console.log(savedCoverSect)
  // for (var i = 0; i < savedCovers.length; i++) {
  //   if (savedCoverClass.classList.includes(`${savedCovers[i].id}`) == savedCovers[i].id) {
  //     savedCovers.splice(i,1);
  //     //savedCoverSect.innerHTML -=
  //   }
  // }

};

// var parent = document.getElementsByClassName("mini-cover");
// console.log(parent);

// when the cover you're clicking on current, matches the id in the SavedCovers array, delete
// when the double click happens on an image


function displaySavedCovers() {
//duplicate ids being saved - debug tomorrow
  savedCoverSect.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoverSect.innerHTML += `
  <section class="mini-cover"  id="${savedCovers[i].id}"
   onDblClick="deleteSavedCover(this.id)">
    <img class="cover-image" src="${savedCovers[i].cover}" />
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">
      A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and
      <span class="tagline-2">${savedCovers[i].tagline2}</span>
    </h3>
    <img class="price-tag" src="./assets/price.png" />
    <img class="overlay" src="./assets/overlay.png" />
    <button></button>
  </section>
    `;
  }


}
//
// function deleteHint() {
//   //when a user hovers over a saved cover,
  //show}



function saveCover() {
  if (savedCovers[0] == currentCover) {
    //alert("You've already saved this cover darling.");
  } else {
    savedCovers.unshift(currentCover);
    //alert("This book has been saved darling.");
  }
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
}

function storeUserInput() {
  event.preventDefault();
  currentCover = new Cover(
    saveInputCover.value,
    saveInputTitle.value,
    saveInputDesc1.value,
    saveInputDesc2.value
  );
  dataArrays();
  showHomeView();
  displayCover();
}

function dataArrays() {
  covers.unshift(saveInputCover.value);
  titles.unshift(saveInputTitle.value);
  descriptors.unshift(saveInputDesc1.value);
  descriptors.unshift(saveInputDesc2.value);
}
var displayUserCover = document.querySelector(".main-cover");

function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function viewElement(classToEdit) {
  classToEdit.classList.remove("hidden");
}

function hideElement(classToEdit) {
  classToEdit.classList.add("hidden");
}

function showHomeView() {
  viewElement(homeView);
  viewElement(saveCoverB);
  viewElement(randomCoverB);
  hideElement(homeB);
  hideElement(formView);
  hideElement(savedView);
}
function showSavedView() {
  viewElement(savedView);
  viewElement(homeB);
  hideElement(homeView);
  hideElement(randomCoverB);
  hideElement(saveCoverB);
  hideElement(formView);
  displaySavedCovers();
}
function showFormView() {
  viewElement(formView);
  viewElement(homeB);
  hideElement(homeView);
  hideElement(randomCoverB);
  hideElement(saveCoverB);
  hideElement(savedView);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
