// Variables targetting the relevant DOM elements 👇
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
var makeOwnBtn = document.querySelector('.make-new-button');
var homePageBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var savedViewBtn = document.querySelector('.view-saved-button');
var creatCoverBtn = document.querySelector('.create-new-book-button');

// Global variables 👇
var currentCover;
var savedCovers = [];
var miniCovers = [];

// Event listeners 👇
randomCoverBtn.addEventListener('click', function() {
  generateRandomCover();
  pushRandomCover();
});

document.addEventListener('DOMContentLoaded', function() {
  generateRandomCover();
  pushRandomCover();
});

makeOwnBtn.addEventListener('click', switchToMakeYourOwn);
savedViewBtn.addEventListener('click', switchToSavedView);
homePageBtn.addEventListener('click', switchToHome);
creatCoverBtn.addEventListener('click', createUserCover);
saveCoverBtn.addEventListener('click', saveCover);

// Event handlers and other functions👇
function generateRandomCover() {
  var indices = getRandomIndices();
  currentCover = new Cover(covers[indices[0]], titles[indices[1]], descriptors[indices[2]], descriptors[indices[3]]);
};

function getRandomIndices() {
  var randomImageIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var randomTag1Index = getRandomIndex(descriptors);
  var randomTag2Index = getRandomIndex(descriptors);
    return [randomImageIndex, randomTitleIndex, randomTag1Index, randomTag2Index];
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
  savedView.classList.add('hidden');
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
  savedView.classList.add('hidden');
  randomCoverBtn.classList.remove('hidden');
  saveCoverBtn.classList.remove('hidden');
  makeYourOwnPage.classList.add('hidden');
};

function createUserCover(event) {  
  event.preventDefault();
  pushUserInputs();
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  switchToHome();
  pushRandomCover();
  makeYourOwnPage.classList.add('hidden');
};

function pushUserInputs() {
  covers.unshift(userCover.value);
  titles.unshift(userTitle.value);
  descriptors.unshift(userDesc1.value);
  descriptors.unshift(userDesc2.value);
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    savedSection.innerHTML += `
      <section class="mini-cover">
        <img class="mini-cover" src=${currentCover.cover}></img>
        <h2 class="cover-title">${currentCover.title}</h2>
        <h3 class="tagline">A tale of <span>${currentCover.tagline1}</span> and <span>${currentCover.tagline2}</span></h3>
      </section>`;
    enableDblClick();
  };
};

function enableDblClick() {
  miniCovers = savedSection.children;
  for (var i = 0; i < miniCovers.length; i++) {
    miniCovers[i].addEventListener('dblclick', removeCover);
  };
};

function removeCover(e) {
  var parent = e.currentTarget.parentElement;
  var target = e.currentTarget;
  parent.removeChild(target);
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].cover === target.querySelector('img').getAttribute('src') && savedCovers[i].title === target.querySelector('.cover-title').innerText && `A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}` === target.querySelector('.tagline').innerText) {
    return savedCovers.splice(i, 1);
    };
  };
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};