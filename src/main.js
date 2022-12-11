// Create variables targetting the relevant DOM elements here 👇

var coverTitle = document.querySelector('.cover-title');
var coverImage = document.querySelector('.cover-image');
var tagLine1 = document.querySelector('.tagline-1');
var tagLine2 = document.querySelector('.tagline-2');

var buttonViewSavedCover = document.querySelector('.view-saved-button');
var buttonRandomCover = document.querySelector('.random-cover-button');
var buttonMakeYourOwnCover = document.querySelector('.make-new-button');
var buttonHome = document.querySelector('.home-button');
var buttonSaveCover = document.querySelector('.save-cover-button');
var buttonMakeMyBook = document.querySelector('.create-new-book-button');

var viewMakeYourOwnCoverForm = document.querySelector('.form-view');
var viewHome = document.querySelector('.home-view');
var viewSavedCoversPage = document.querySelector(".saved-view");
var viewSavedCoversGallery= document.querySelector(".saved-covers-section")

var inputCover = document.querySelector('.user-cover');
var inputTitle = document.querySelector('.user-title');
var inputFirstDescriptor = document.querySelector('.user-desc1');
var inputSecondDescriptor = document.querySelector('.user-desc2');
//query select saved cover button- 


// We've provided a few variables below
var savedCovers = [];
  //new Cover(
    //"http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
   // "Sunsets and Sorrows",
   // "sunsets",
   // "sorrows"
  //),
var currentCover;


// Add your event listeners here 👇

window.addEventListener('load', makeRandomCover);
buttonRandomCover.addEventListener('click', makeRandomCover);
buttonMakeYourOwnCover.addEventListener('click', makeNewCoverForm);
buttonViewSavedCover.addEventListener('click', viewSavedCovers);
buttonHome.addEventListener('click', viewHomePage);
buttonMakeMyBook.addEventListener('click', makeMyBook, false); 
buttonSaveCover.addEventListener('click', saveCover);
buttonViewSavedCover.addEventListener('click', displaySavedCoversGallery)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  var newCovers = covers[getRandomIndex(covers)]  
  var newTitles = titles[getRandomIndex(titles)]
  var newDescriptors1 = descriptors[getRandomIndex(descriptors)]
  var newDescriptors2 = descriptors[getRandomIndex(descriptors)]
 coverTitle.innerText = newTitles
 coverImage.src = newCovers
 tagLine1.innerText = newDescriptors1
 tagLine2.innerText = newDescriptors2
 currentCover = new Cover (coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
}

function makeNewCoverForm() {
  viewMakeYourOwnCoverForm.classList.remove("hidden");
  buttonHome.classList.remove("hidden");
  viewHome.classList.add("hidden");
  buttonRandomCover.classList.add("hidden");
  buttonViewSavedCover.classList.remove("hidden");
  buttonSaveCover.classList.add("hidden")
}

function viewSavedCovers() {
  viewHome.classList.add("hidden");
  viewMakeYourOwnCoverForm.classList.add("hidden");
  buttonRandomCover.classList.add("hidden");
  buttonSaveCover.classList.add("hidden")
  viewSavedCoversPage.classList.remove("hidden")
  buttonHome.classList.remove("hidden");
}

function viewHomePage() {
  viewHome.classList.add("hidden");
  viewMakeYourOwnCoverForm.classList.add("hidden");
  buttonHome.classList.add("hidden");
  buttonRandomCover.classList.remove("hidden");
  buttonSaveCover.classList.remove("hidden")
  viewSavedCoversPage.classList.remove("hidden")
  viewHome.classList.remove("hidden");
  buttonViewSavedCover.classList.remove("hidden");
}

function makeMyBook() {
  event.preventDefault();
  coverImage.src = inputCover.value
  coverTitle.innerText = inputTitle.value
  tagLine1.innerText = inputFirstDescriptor.value
  tagLine2.innerText = inputSecondDescriptor.value
  covers.unshift(inputCover.value);
  titles.unshift(inputTitle.value);
  descriptors.unshift(inputFirstDescriptor.value);
  descriptors.unshift(inputSecondDescriptor.value);
  currentCover = new Cover (coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
  viewHomePage();
}


function saveCover() {
    if (!savedCovers.includes(currentCover)) {
     savedCovers.push(currentCover)
   }
} 


function displaySavedCoversGallery() {
  viewSavedCoversGallery.innerHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
    viewSavedCoversGallery.innerHTML += `
    <section class="saved-covers-section">
      <section class="mini-cover">
        <img class="cover-image" src=${savedCovers[i].cover}>
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
      </section>  
    </section>`;
  }
}
// Goal: saved covers view -double click a saved poster = deleted