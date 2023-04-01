// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var coverImg = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var makeCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var coverForm = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var saveView = document.querySelector('.saved-view');
var viewPages = document.querySelectorAll('.view');
var userCoverInput = document.querySelector('.user-cover');
var userTitleInput = document.querySelector('.user-title');
var userDesc1Input = document.querySelector('.user-desc1');
var userDesc2Input = document.querySelector('.user-desc2');
var makeBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover);
randomCoverButton.addEventListener('click', createRandomCover);

makeCoverButton.addEventListener('click', function() {
  togglePage(coverForm);
  showButtons();
});

viewSavedButton.addEventListener('click', function() {
  togglePage(saveView);
  displaySavedCovers();
  showButtons();
});

homeButton.addEventListener('click', function() {
  togglePage(homeView);
  showButtons();
});

makeBookButton.addEventListener('click', function(event) {
  event.preventDefault();
  createBook();
  displayBook();
  showButtons();
}); 

saveCoverButton.addEventListener('click', saveCover);

savedCoversSection.addEventListener('dblclick', deleteCover);

// Create your event handlers and other functions here 👇
function createRandomCover(event) {
  event.preventDefault();
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverImg.src = covers[getRandomIndex(covers)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = createCover(coverImg.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
 }

function togglePage(page) {
  for (var i = 0; i < viewPages.length; i++) {
    viewPages[i].classList.add('hidden');
  }
  page.classList.remove('hidden');
}

function showButtons() {
  if (!homeView.classList.contains('hidden')) {
    homeButton.classList.add('hidden');
    randomCoverButton.classList.remove('hidden');
    saveCoverButton.classList.remove('hidden');
    viewSavedButton.classList.remove('hidden');
    console.log('i am the homeview')
  } else if (!saveView.classList.contains('hidden')) {
    saveCoverButton.classList.add('hidden');
    randomCoverButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
    console.log('am am the save view')
  } else if (!coverForm.classList.contains('hidden')) {
    randomCoverButton.classList.add('hidden');
    homeButton.classList.remove('hidden');
    saveCoverButton.classList.add('hidden');
    console.log('i am the cover form')
  }
}



function createBook() {
  if (!userCoverInput.value || !userTitleInput.value || !userDesc1Input.value || !userDesc2Input.value) {
    return;
  }

  covers.push(userCoverInput.value);
  titles.push(userTitleInput.value);
  descriptors.push(userDesc1Input.value);
  descriptors.push(userDesc2Input.value);

  homeView.classList.remove('hidden');
  coverForm.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');

currentCover = createCover(userCoverInput.value, userTitleInput.value, userDesc1Input.value, userDesc2Input.value);
}

function displayBook() {
  coverTitle.innerText = userTitleInput.value;
  coverImg.src = userCoverInput.value;
  tagline1.innerText = userDesc1Input.value;
  tagline2.innerText = userDesc2Input.value;
}

function saveCover() {
  
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function displaySavedCovers() {
  savedCoversSection.innerHTML = '';

  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += 
    `<section class="mini-cover" id="${savedCovers[i].id}">
    <img class="cover-image" src=${savedCovers[i].coverImg}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`
  }
}

function deleteCover(event) {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === Number(event.target.parentNode.id)) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
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
    tagline1: descriptor1,
    tagline2: descriptor2
  };
  return cover;
}
