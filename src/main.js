// Variables //
// Button Variables //
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
var goHomeButton = document.querySelector(".home-button");
var createBookButton = document.querySelector(".create-new-book-button");

// Page vars //
var viewForm = document.querySelector(".form-view");
var viewHome = document.querySelector(".home-view");
var viewSaved = document.querySelector(".saved-view");
var savedCoversSection = document.querySelector(".saved-covers-section");

// Cover Vars //
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// Form Vars //
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('.user-title');
var userDescriptor1 = document.querySelector('.user-desc1');
var userDescriptor2 = document.querySelector('.user-desc2');

// Vars for Cover Object and Array of Cover Objects //
var savedCovers = [];
var currentCover;

// Event Listeners //
// Loads New Random Cover and Page Loading //
onload = newRandomCover;

// Event Listeners For Button Functionality For Changing Views //
randomCoverButton.onclick = newRandomCover;
saveCoverButton.onclick = saveNewCover;
viewSavedButton.onclick = viewSavedCovers;
makeNewButton.onclick = makeNewBook;
goHomeButton.onclick = goHome;
// Event Listener For Making A Custom Book Button //
createBookButton.onclick = function(event) {
  event.preventDefault();
  goHome();
  createCustomBook();
  saveToArrays();
  setTimeout(clearInputs, 1000)  
}

// Event Listener for Double Clicking Saved Covers on Saved Covers Page //
savedCoversSection.ondblclick = function(event) {
  deleteCover(event)
}

// Event Handlers and Various Functions //
// Function For Creating Cover Object //
function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    cover: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }

  return cover
}

// Randomizer For a Number to Be Used For Index Positions in an Array //
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
// Function For Randomizing Front Page Cover Data Fields //
function newRandomCover() {
  currentCover = createCover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)],
  );

  displayCover()
}

// Functions for Readability of Button Handling //
function hide(element) {
  element.classList.add("hidden")
}

function show(element) {
  element.classList.remove("hidden")
}

// Button Functions for Button Handling //
function makeNewBook() {
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewForm);
  hide(viewHome)
}

function viewSavedCovers() {
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewSaved);
  hide(viewForm);
  hide(viewHome)
}

function goHome() {
  show(randomCoverButton);
  show(saveCoverButton);
  hide(goHomeButton);
  hide(viewSaved);
  hide(viewForm);
  show(viewHome)
}

// Function for Creating a Cover Object //
function createCustomBook() {  
  currentCover = createCover(
  userCover.value,
  userTitle.value,
  userDescriptor1.value,
  userDescriptor2.value,
  );

  displayCover(); 
}

// Function For Cover Preview //
function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2
}

// Functions for Saving to Data Arrays For Availability For Random Cover Handling //
function saveToArrays() {
  loadPictureIf();
  loadTitleIf();
  loadDescriptor1If();
  loadDescriptor2If()
}

function loadPictureIf() {
  if (covers.indexOf(userCover.cover) === -1) {
    covers.push(userCover.value)
  }
}

function loadTitleIf() {
  if (titles.indexOf(userTitle.value) === -1) {
    titles.push(userTitle.value)
  } 
}

function loadDescriptor1If() {
  if (descriptors.indexOf(userDescriptor1.value) === -1){
    descriptors.push(userDescriptor1.value)
  }
}

function loadDescriptor2If() {
  if (descriptors.indexOf(userDescriptor2.value) === -1) {
    descriptors.push(userDescriptor2.value)
  }
}

// Function for Clearing Data Fields of Make Your Own Cover //
function clearInputs() {
  userCover.value = "";
  userTitle.value = "";
  userDescriptor1.value = "";
  userDescriptor2.value = "";
}

// Function For Saving Custom Or Random Cover Objects To Saved Cover Arrays // 
function saveNewCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }

  displaySavedCovers();
}

// Function For Displaying Saved Cover Array Objects On Saved Covers Page in Miniature //
function displaySavedCovers() {
  savedCoversSection.innerHTML = '';
  for (i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
    `
    <section class ="mini-cover" id="${savedCovers[i].id}">
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>
    `
  }
}

// Function For Handling Deletion //
function deleteCover(event) { 
  for (i = 0; i < savedCovers.length; i++) {
    
    if(event.target.closest('section').id === savedCovers[i].id.toString()){
      savedCovers.splice(i, 1);    
    }
  }
  
  displaySavedCovers()
}