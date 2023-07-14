// Create variables targeting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('#descriptor1');
var descriptor2 = document.querySelector('#descriptor2');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button')



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
makeNewCoverButton.addEventListener('click', toggleView)

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
//may rename function

function toggleView() {
  var switchView = document.querySelector('.form-view')
  var hideHome = document.querySelector('.home-view')
  hideHome.classList.toggle('hidden')
  switchView.classList.toggle('hidden')
}











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

