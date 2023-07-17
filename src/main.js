// Create variables targetting the relevant DOM elements here 👇
//pe
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
//var tagLine = document.querySelector('.tagline');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');
var image = document.querySelector('.price-tag');
var imageOverLay = document.querySelector('.overlay');
var showRandomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var homePage = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedBookPage = document.querySelector('.saved-view')
var form = document.querySelector('form');
var makeMyBookButton = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var descriptor1Input = document.querySelector('#descriptor1');
var descriptor2Input = document.querySelector('#descriptor2');
var mainCover = document.querySelector('.main-cover');
// queries over all dom elements(?) we need to change

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇



window.addEventListener('load', function(){
  makeRandomCover();
  renderRandomCover();
});

showRandomCoverButton.addEventListener('click', function() {
 makeRandomCover();
 renderRandomCover();
});

makeOwnCoverButton.addEventListener('click', makeYourOwnCover) //dom page switching to the form

viewSavedCoversButton.addEventListener('click', function() {
showSavedCovers() //DOM showing saved covers based on the data model of savedCovers array
viewSavedCoversPage() //DOM showing page
});

function showSavedCovers() {
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <section id="${savedCovers[i].id}" class="mini-cover saved-view">
        <section class="mini-cover">
          <img class="mini-cover cover-image" src="${savedCovers[i].coverImg}">
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="min-cover tagline">A tale of <span class="tagline-1">${savedCovers[i].theTagLine1}</span> and <span class="mini-cover tagline-2">${savedCovers[i].theTagLine2}</span></h3>
        </section>
      </section>
    `;
  }

}

// ${savedCovers[i].coverImg}
// ${savedCovers[i].tagLine1}
// ${savedCovers[i].tagLine2}

homeButton.addEventListener('click', viewHomePage)

form.addEventListener('submit', function(event) {
  event.preventDefault()
  createBook() //data model
  saveFormInputValues() // data model
  homePageAfterFormSubmission() // DOM
  showCoverCreatedInForm() // DOM
});

saveCoverButton.addEventListener('click', function() {
  saveCover() //data model
});

var savedCoversElements = document.querySelectorAll('.saved-view');
savedCoversElements.forEach(function (coverElement) {
  coverElement.addEventListener('dblclick', function (event) {
    deleteSavedCover(event);
  });
});



// Create your event handlers and other functions here 👇

function deleteSavedCover(event) {
  var coverId = parseInt(event.target.closest('.saved-view').id);
  savedCovers = savedCovers.filter(function (cover) {
    return cover.id !== coverId;
  });
  showSavedCovers();
}



function saveCover() {
  for ( var i = 0; i < savedCovers.length; i++) {
    if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover)
    }
  }
  console.log(savedCovers)
 }

function showCoverCreatedInForm() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText = currentCover.theTagLine1;
  tagLine2.innerText = currentCover.theTagLine2;  
}

function homePageAfterFormSubmission() { 
  formView.classList.add('hidden');
  homePage.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  showRandomCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
}

function saveFormInputValues() {
  covers.push(currentCover.coverImg);
  titles.push(currentCover.title);
  descriptors.push(currentCover.theTagLine1, currentCover.theTagLine2)
}

 function createBook() {
  currentCover = createCover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value)
 }

function makeYourOwnCover () {
  homePage.classList.add('hidden')
  saveCoverButton.classList.add('hidden') 
  showRandomCoverButton.classList.add('hidden') 
  formView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  savedCoversSection.classList.add('hidden')
  savedBookPage.classList.add('hidden')
}
function viewSavedCoversPage() {
  homePage.classList.add('hidden')
  saveCoverButton.classList.add('hidden') 
  showRandomCoverButton.classList.add('hidden')
  formView.classList.add('hidden')
  savedBookPage.classList.remove('hidden')
  homeButton.classList.remove('hidden')
}

function viewHomePage() {
  homePage.classList.remove('hidden')
  homeButton.classList.add('hidden')
  showRandomCoverButton.classList.remove('hidden') 
  saveCoverButton.classList.remove('hidden')
}

function renderRandomCover() {
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText = currentCover.theTagLine1;
  tagLine2.innerText = currentCover.theTagLine2;
}

function makeRandomCover() { // Updating the Data Model (currentCover)
  currentCover =  createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
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
    theTagLine1: descriptor1,
    theTagLine2: descriptor2
  }
  return cover
}

// savedCovers[i].coverImg === currentCover.coverImg &&
// savedCovers[i].title === currentCover.theTagLine1 &&
// savedCovers[i].theTagLine1 === currentCover.theTagLine1 &&
// savedCovers[i].theTagLine2 === currentCover.theTagLine2