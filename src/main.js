// ***Variables*** //
// ***Button Vars*** //
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var goHomeButton = document.querySelector('.home-button');
var makeBookButton = document.querySelector('.create-new-book-button');
// ** Page vars ** //
var viewForm = document.querySelector('.form-view');
var viewHome = document.querySelector('.home-view');
var viewSaved = document.querySelector('.saved-view');
var saveCover = document.querySelector(".saved-covers-section");
// ** Cover Vars ** //
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
// ** Form Vars ** //
var customCover = document.querySelector('.user-cover');
var customTitle = document.querySelector('.user-title');
var customDescriptor1 = document.querySelector('.user-desc1');
var customDescriptor2 = document.querySelector('.user-desc2');
// ** Project Vars ** //
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// ***Event Listeners*** //
// ***Refreshing the Page*** //
onload = handleRandomCoverButtonClicked
// ***Click Input Event Listeners*** //
randomCoverButton.onclick = handleRandomCoverButtonClicked;
saveCoverButton.onclick = handleSaveCoverButtonClicked;
viewSavedButton.onclick = handleViewSavedButtonClicked;
makeNewButton.onclick = handleNewButtonClicked;
goHomeButton.onclick = handleHomeButtonClicked;

makeBookButton.onclick = (function(event) {
  event.preventDefault();
  generateCover();
  loadPicture();
  loadTitle();
  loadDescriptor1();
  loadDescriptor2();
  setTimeout(clearForm, 1000)
})

// ***Event Handlers and Functions*** //
// ***Functions To Ease Readability Of Code*** //

function hide(element) {
  element.classList.add("hidden")
}

function show(element) {
  element.classList.remove("hidden")
}

function handleRandomCoverButtonClicked() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)]  
}


function handleHomeButtonClicked(){
  show(makeNewButton);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  hide(viewForm);
  show(viewHome);
  hide(saveCover)
};



function handleSaveCoverButtonClicked(){
  show(makeNewButton);
  show(randomCoverButton);
  show(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  hide(viewForm);
  hide(viewHome);
  show(saveCover)
};

function handleNewButtonClicked() {
  show(makeNewButton);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  show(viewForm);
  hide(viewHome);
  hide(saveCover)
}

function handleViewSavedButtonClicked() {
  show(makeNewButton);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  show(viewSaved);
  hide(viewForm);
  hide(viewHome);
  hide(saveCover)
} 
  


function generateCover() {
  coverImage.src = customCover.value;
  coverTitle.innerText = customTitle.value;
  tagline1.innerText = customDescriptor1.value;
  tagline2.innerText = customDescriptor2.value;
  handleHomeButtonClicked();
}

function loadPicture() {
  if (covers.indexOf(customCover.value) === -1) {
   return covers.push(customCover.value)
  }
}

function loadTitle() {
  if (titles.indexOf(customTitle.value) === -1) {
   return titles.push(customTitle.value)
  } 
}

function loadDescriptor1() {
  if (descriptors.indexOf(customDescriptor1.value) === -1){
   return descriptors.push(customDescriptor1.value)
  }
}

function loadDescriptor2() {
  if (descriptors.indexOf(customDescriptor2.value) === -1) {
   return descriptors.push(customDescriptor2.value)
  }
}


function clearForm() {
  customCover.value = "";
  customTitle.value = "";
  customDescriptor1.value = "";
  customDescriptor2.value = "";
}




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}
