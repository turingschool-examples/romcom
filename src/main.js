 // open index.html

// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewOne = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var savedCoversButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeMyBookButton = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var tagline1Input = document.querySelector('.user-desc1');
var tagline2Input = document.querySelector('.user-desc2');
var savedCoversSection = document.querySelector('.saved-covers-section')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
   "Sunsets and Sorrows",
   "sunsets",
   "sorrows")
];

var currentCover = useRandomIndex();

// // Add your event listeners here 👇
window.addEventListener('onload', randomCover());
randomCoverButton.addEventListener('click', displayRandomCoverButton);
makeNewOne.addEventListener('click', makeNewCoverByUser);
savedCoversButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', viewHomeScreen);
makeMyBookButton.addEventListener('click', saveCoverMadeByUser);
saveCoverButton.addEventListener('click', saveCovers);
// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function useRandomIndex() {
  var newRandomCover = new Cover (
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)],
)
return newRandomCover;
// why do we need to return this??
};

function displayCover(bookObject) {
  coverImage.src = bookObject.cover;
  coverTitle.innerHTML = bookObject.title;
  tagline1.innerHTML = bookObject.tagline1;
  tagline2.innerHTML = bookObject.tagline2;
}

function displayRandomCoverButton() {
  var bookCover = useRandomIndex();
  currentCover = bookCover;
  displayCover(bookCover);
};

function randomCover() {
  displayRandomCoverButton();
};

function makeNewCoverByUser() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.add('hidden');
};

function viewSavedCovers() {
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');

  displaySavedCovers();
};

function viewHomeScreen() {
  homeView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
}

function saveCoverMadeByUser() {
  event.preventDefault()
  viewHomeScreen();
coverImage.src = coverInput.value;
coverTitle.innerHTML = titleInput.value;
tagline1.innerHTML = tagline1Input.value;
tagline2.innerHTML = tagline2Input.value;

addUserCovers()
};

function addInputToArray() {
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(tagline1Input.value);
  descriptors.push(tagline2Input.value);
};

 function addUserCovers() {
var coverByUser = new Cover(coverInput.value, titleInput.value, tagline1Input.value, tagline2Input.value);
console.log(coverByUser);
currentCover = coverByUser;
};

function saveCovers() {
if (!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover);
}
};

function displaySavedCovers() {
  var savedCoverData = '';
  for (var i = 0; i < savedCovers.length; i++) {
    var addData = `
      <div class="mini-cover">
        <img class="cover-image" src="${savedCovers[i].cover}"">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </div>
    `
  savedCoverData += addData;
 }
 savedCoversSection.innerHTML = savedCoverData;
};

// diable the button after one click
// savedCoversButton.diabled = true;
//
//
//
//

// ..
