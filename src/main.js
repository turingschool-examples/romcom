// Create variables targetting the relevant DOM elements here 👇

//buttons
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');

//book cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline = document.querySelector('.tagline');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');

//view section
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

// view sub section
var mainCover = document.querySelector('.main-cover');
var savedCoversSection = document.querySelector('.saved-covers-section');
var customForm = document.querySelector('form');

//custom user section
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userTaglineOne = document.querySelector('.user-desc1');
var userTaglineTwo = document.querySelector('.user-desc2');

//custom user button
var userSubmitButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

window.onload = newRandomCover();
randomCoverButton.addEventListener("click", newRandomCover);
makeNewButton.addEventListener('click', toggleFormView);
viewSavedButton.addEventListener('click', toggleSavedView);
homeButton.addEventListener('click', toggleHomeView);
userSubmitButton.addEventListener('click', newUserCover);
saveCoverButton.addEventListener('click', saveCurrentCover);
savedCoversSection.addEventListener('dblclick', deleteSavedCover);

// Create your event handlers and other functions here 👇

function newRandomCover() {
  var coverImg = covers[getRandomIndex(covers)];
  var coverTitle = titles[getRandomIndex(titles)];
  var descOne = descriptors[getRandomIndex(descriptors)];
  var descTwo = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImg, coverTitle, descOne, descTwo);
  displayCover(currentCover);
}

function newUserCover() {
  event.preventDefault();
  if (!userCover.value || !userTitle.value || !userTaglineOne.value || !userTaglineTwo.value) {
    alert("Please fill out all of the input fields, otherwise we can't show you a steamy novel!");
  } else {
  coverImage.src = userCover.value;
  coverTitle.innerText = userTitle.value;
  taglineOne.innerText = userTaglineOne.value;
  taglineTwo.innerText = userTaglineTwo.value;
  currentCover = new Cover(coverImage.src, coverTitle.innerText, taglineOne.innerText, taglineTwo.innerText);
  storeUserSubmission();
  toggleHomeView();
  customForm.reset();
  }
}

function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}

function toggleFormView() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
}

function toggleSavedView() {
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  addToSavedView();
}

function toggleHomeView() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
}

function storeUserSubmission() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userTaglineOne.value);
  descriptors.push(userTaglineTwo.value);
}

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function addToSavedView() {
  savedCoversSection.innerHTML = ``;
  for(var i = 0; i < savedCovers.length; i++) {
  savedCoversSection.innerHTML += `
    <section class="mini-cover">
      <img class="cover-image" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h2>
    </section>`
  }
}

function deleteSavedCover() {
  for(var i = 0; i < savedCovers.length; i++) {
    if (event.target.id === `${savedCovers[i].id}`) {
      savedCovers.splice(i, 1);
    }
  }
  addToSavedView();
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
