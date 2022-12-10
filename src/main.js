// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');
var makeMyBookButton = document.querySelector('.create-new-book-button');
//Added type attribute to prevent make my book button from reloading the page
makeMyBookButton.type = "button";
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var descriptor1Input = document.querySelector('.user-desc1');
var descriptor2Input = document.querySelector('.user-desc2');
var savedCoversSection = document.querySelector('.saved-covers-section');
//Added left property set to 0 to align tattered cover with book so that it is visible
document.querySelector('.overlay').style.left = 0


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', handlePageLoad);
randomCoverButton.addEventListener('click', handleRandomCoverButton);
makeYourOwnCoverButton.addEventListener('click', handleMakeYourCoverButton);
viewSavedCoversButton.addEventListener('click', handleViewSavedCoversButton);
homeButton.addEventListener('click', handleHomeButton);
makeMyBookButton.addEventListener('click', handleMakeMyBookButton);
saveCoverButton.addEventListener('click', handleSaveCoverButton);
savedCoversSection.addEventListener('dblclick', deleteCover);

// Create your event handlers and other functions here 👇
function deleteCover(event) {
  if (event.target.parentElement.classList[0] === "mini-cover") {
    var idToDelete = event.target.parentElement.id;
    for (var i = 0; i < savedCovers.length; i++) {
      if (idToDelete === savedCovers[i].id.toString()) {
        savedCovers.splice(i, 1)
      } 
    }
    event.target.parentElement.remove();
  }
}

function handleSaveCoverButton() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
  displaySavedCovers();
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `<section class="mini-cover" id=${savedCovers[i].id}>
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png"< style="left: 0px">
  </section>`
  }
}

function handlePageLoad() {
  createRandomCover();
  displayCurrentCover();
  displaySavedCovers();
}

function handleRandomCoverButton() {
  createRandomCover();
  displayCurrentCover();
}

function handleMakeYourCoverButton() {
  hideElement(homeView);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
  showElement(formView);
  showElement(homeButton);
  hideElement(savedView);
}

function handleViewSavedCoversButton() {
  hideElement(homeView);
  hideElement(formView);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
  showElement(savedView);
  showElement(homeButton);
}

function handleHomeButton() {
  hideElement(homeButton);
  hideElement(formView);
  hideElement(savedView);
  showElement(saveCoverButton);
  showElement(randomCoverButton);
  showElement(homeView);
}

function handleMakeMyBookButton() {
  var currentCoverInput = coverInput.value;
  var currentTitleInput = titleInput.value;
  var currentDescriptor1Input = descriptor1Input.value;
  var currentDescriptor2Input = descriptor2Input.value;
  if (currentCoverInput && currentTitleInput && currentDescriptor1Input && currentDescriptor2Input) {
    covers.push(currentCoverInput);
    titles.push(currentTitleInput);
    descriptors.push(currentDescriptor1Input);
    descriptors.push(currentDescriptor2Input);

    currentCover = new Cover(currentCoverInput, currentTitleInput, currentDescriptor1Input, currentDescriptor2Input);
  
    displayCurrentCover();
    handleHomeButton();
  } else {
    alert('Alas there, lover! Your story must be complete before submission!')
  }
}

function createRandomCover(){
  var randomImgSrc = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(randomImgSrc, randomTitle, randomDescriptor1, randomDescriptor2);
}

function displayCurrentCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function showElement(elementToShow) {
  elementToShow.classList.remove('hidden');
}

function hideElement(elementToHide) {
  elementToHide.classList.add('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


