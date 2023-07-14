// Create variables targeting the relevant DOM elements here 👇
//buttons:
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
//views:
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('#descriptor1');
var descriptor2 = document.querySelector('#descriptor2');



// We've provided a few variables below
var savedCovers = [
  createCover(
    'http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg',
    'Sunsets and Sorrows',
    'sunsets',
    'sorrows'
  ),
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', displayRandomCover);
randomCoverButton.addEventListener('click', displayRandomCover);
viewSavedCoversButton.addEventListener('click', toggleViewSaveCoverBtn);
makeNewCoverButton.addEventListener('click', toggleViewMakeCoverBtn);
homeButton.addEventListener('click', showHomeViewBtn)



// Create your event handlers and other functions here 👇

function displayRandomCover() {
  currentCover = getRandomCover();
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function getRandomCover() {
  var coverImageIndex = getRandomIndex(covers);
  var coverTitlesIndex = getRandomIndex(titles);
  var coverDesciptor1Index = getRandomIndex(descriptors);
  var coverDescriptors2Index = getRandomIndex(descriptors);

  var randomCover = createCover(
    covers[coverImageIndex],
    titles[coverTitlesIndex],
    descriptors[coverDesciptor1Index],
    descriptors[coverDescriptors2Index]
  );
  return randomCover;
}

function toggleViewSaveCoverBtn() {
  //show saved cover section hidden
  //home page hidden
  var hideHome = document.querySelector('.home-view');
  var viewSavedCovers = document.querySelector('.saved-view');
  var switchView = document.querySelector('.form-view');

  hideHome.classList.add('hidden');
  viewSavedCovers.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  switchView.classList.add('hidden')
}
//on the view saved cover button the form/view needs to be hidden 




function toggleViewMakeCoverBtn() {
  var switchView = document.querySelector('.form-view');
  var hideHome = document.querySelector('.home-view');

  hideHome.classList.toggle('hidden');
  switchView.classList.toggle('hidden');
  randomCoverButton.classList.toggle('hidden');
  saveCoverButton.classList.toggle('hidden');
  homeButton.classList.toggle('hidden');
}


function showHomeViewBtn () {
  var switchView = document.querySelector('.form-view');
  var hideHome = document.querySelector('.home-view');
  var viewSavedCovers = document.querySelector('.saved-view');

  hideHome.classList.remove('hidden');
  switchView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedCoversButton.classList.remove('hidden');
  viewSavedCovers.classList.add('hidden');
}

//on the view saved cover button the form/view needs to be hidden 


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2,
  };
  return cover;
}

//pseudocode - thought for later iteration:
//maybe not a push to savedCover array yet - this may come with a later iteration


////note the rubric states to not have redundant code so maybe we take Nats suggestion and create a way to condense all our hidden classes 

///BUG when in make your own cover and clicking the view saved covers section still only shows the form and not the saved covers page and vice versa


//