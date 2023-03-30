// Create variables targetting the relevant DOM elements here 👇
var fullCover = document.querySelector(".main-cover");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverDescriptor1 = document.querySelector(".tagline-1");
var coverDescriptor2 = document.querySelector(".tagline-2");
var homeButton = document.querySelector('.home-button');
var showNewRandomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');

var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
showNewRandomCoverButton.addEventListener('click', getRandomCover);
viewSavedCoversButton.addEventListener('click', function () {
  currentView = homeView;
  switchToViewSavedCovers(currentView);
});

makeNewButton.addEventListener('click', makeCoverButton);

window.onload = (event) => {
  currentCover = createCover(
    getRandomImage(),
    getRandomTitle(),
    getRandomDesc(),
    getRandomDesc()
  );

  coverImage.src = currentCover.coverImg; 
  coverTitle.innerHTML = currentCover.title;
  coverDescriptor1.innerHTML = currentCover.tagline1;
  coverDescriptor2.innerHTML = currentCover.tagline2;
};

// Create your event handlers and other functions here 👇


function makeCoverButton() {
  makeNewButton.classList.add('hidden');
  homeView.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  showNewRandomCoverButton.classList.add('hidden');

  formView.classList.remove('hidden')
  homeButton.classList.remove('hidden');
}

function getRandomImage() {
  var randomIndex = getRandomIndex(covers);
  return covers[randomIndex];
}

function getRandomTitle() {
  var randomIndex = getRandomIndex(titles);
  return titles[randomIndex];
}

function getRandomDesc() {
  var randomIndex = getRandomIndex(descriptors);
  return descriptors[randomIndex];
}

function getRandomCover() {
  var randomCover = createCover(
    getRandomImage(), 
    getRandomTitle(), 
    getRandomDesc(), 
    getRandomDesc()
    );
  fullCover.innerHTML = `<img class="cover-image" src="${randomCover.coverImg}">
    <h2 class="cover-title">${randomCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${randomCover.tagline1}</span> and <span class="tagline-2">${randomCover.tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">`
  return randomCover;
}

function switchToViewSavedCovers(currentView) {
  showNewRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  currentView.classList.add("hidden");
  
  homeButton.classList.remove("hidden");
  savedView.classList.remove("hidden");
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
  }
  return cover
}
