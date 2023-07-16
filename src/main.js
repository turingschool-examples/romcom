// Create variables targeting the relevant DOM elements here 👇
//buttons:
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var makeMyCoverButton = document.querySelector('.create-new-book-button');
//views:
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
//added
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

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
viewSavedCoversButton.addEventListener('click', showSavedCoversView);//
makeNewCoverButton.addEventListener('click', showFormView);//
homeButton.addEventListener('click', showHomeView);//
makeMyCoverButton.addEventListener('click', makeMyBookBtn);//

// Create your event handlers and other functions here 👇

function displayRandomCover() {
  currentCover = getRandomCover();
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function getRandomCover() {
  var coverImageIndex = getRandomIndex(covers);
  var coverTitlesIndex = getRandomIndex(titles);
  var coverTagline1Index = getRandomIndex(descriptors);
  var coverTagline2Index = getRandomIndex(descriptors);

  var randomCover = createCover(
    covers[coverImageIndex],
    titles[coverTitlesIndex],
    descriptors[coverTagline1Index],
    descriptors[coverTagline2Index]
  );
  return randomCover;
}

function showFormView() {
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedCoversButton.classList.add('hidden');
}

function showSavedCoversView() {
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedCoversButton.classList.add('hidden');
}

function showHomeView() {
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedCoversButton.classList.remove('hidden');
}

//function for the form:
function makeMyBookBtn(event) {
  event.preventDefault();
  // Variables that connect to the DOM elements and capture the user input values:
  var cover = document.querySelector('.user-cover').value;
  var title = document.querySelector('.user-title').value;
  var descriptor1 = document.querySelector('.user-desc1').value;
  var descriptor2 = document.querySelector('.user-desc2').value;

  //Use the newly created object to display the newly created cover
  // var coverImage = document.querySelector('.cover-image');
  // var coverTitle = document.querySelector('.cover-title');

  //Create new cover
  var currentCover = createCover(cover, title, descriptor1, descriptor2);

  //Now we "push" to each corresponding value

  covers.push(currentCover.coverImg);
  titles.push(currentCover.title);
  descriptors.push(currentCover.descriptors);
  descriptors.push(currentCover.descriptors);

  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;

    // Switch back to the main home view
  showHomeView();

  // Display the newly created cover on the DOM
  displayNewCover(newCover);

  // update the DOM elements with our user inputs

}

function displayNewCover(cover) {
  coverImage.src = cover.coverImg;
  coverTitle.innerText = cover.title;
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
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