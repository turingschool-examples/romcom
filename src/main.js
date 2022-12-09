// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTag1 = document.querySelector('.tagline-1');
var coverTag2 = document.querySelector('.tagline-2');
var makeYourOwnPage = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var savedSection = document.querySelector('.saved-covers-section');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');


// Button variables 👇
var randomCoverBtn = document.querySelector('.random-cover-button');
var makeYourBtn = document.querySelector('.make-new-button');
var homePageBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var savedViewBtn = document.querySelector('.view-saved-button');
var createBookBtn = document.querySelector('.create-new-book-button');



// We've provided a few variables below 👇
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click', function() {
  generateRandomCover();
  pushRandomCover();
});

document.addEventListener('DOMContentLoaded', function() {
  generateRandomCover();
  pushRandomCover();
});

makeYourBtn.addEventListener('click', switchToMakeYourOwn);
savedViewBtn.addEventListener('click', switchToSavedView);
homePageBtn.addEventListener('click', switchToHome);
createBookBtn.addEventListener('click', createUserBook);
saveCoverBtn.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇

function generateRandomCover() {
  var randomImageIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var randomTag1Index = getRandomIndex(descriptors);
  var randomTag2Index = getRandomIndex(descriptors);
  currentCover = new Cover(covers[randomImageIndex], titles[randomTitleIndex], descriptors[randomTag1Index], descriptors[randomTag2Index]);
};

function pushRandomCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverTag1.innerText = currentCover.tagline1;
  coverTag2.innerText = currentCover.tagline2;
};

function switchToMakeYourOwn() {
  homeView.classList.add('hidden');
  makeYourOwnPage.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homePageBtn.classList.remove('hidden');
  savedView.classList.add('hidden')
};

function switchToSavedView() {
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homePageBtn.classList.remove('hidden');
  makeYourOwnPage.classList.add('hidden');
};

function switchToHome() {
  homeView.classList.remove('hidden');
  homePageBtn.classList.add('hidden');
  randomCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
};

function createUserBook(event) {
  event.preventDefault();
  covers.unshift(userCover.value);
  titles.unshift(userTitle.value);
  descriptors.unshift(userDesc1.value);
  descriptors.unshift(userDesc2.value);
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  switchToHome();
  makeYourOwnPage.classList.add('hidden');
  pushRandomCover();
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
      savedSection.innerHTML += `
        <section class="mini-cover">
          <img class="mini-cover" src=${currentCover.cover}></img>
          <h2 class="cover-title"> ${currentCover.title}</h2>
          <h3 class="tagline">A tale of <span> ${currentCover.tagline1}</span> and <span> ${currentCover.tagline2}</span></h3>
        </section>`
  };
};

// We've provided one function to get you started 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};