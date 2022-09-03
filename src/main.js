// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button')
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var createNewBookButton = document.querySelector('.create-new-book-button');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');
var savedSection = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇 (should go at the bottom)
window.addEventListener('load', newRandomCover);
randomButton.addEventListener('click', newRandomCover);
makeNewButton.addEventListener('click', makeYourOwn);
viewSavedButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', goHome);
createNewBookButton.addEventListener('click', getNewBookData);
saveCoverButton.addEventListener('click', addToSaved);
savedSection.addEventListener('dblclick', deleteMiniCover);

// Create your event handlers and other functions here 👇
function newRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
}

function makeYourOwn() {
  randomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function viewSavedCovers() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function goHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
}

function getNewBookData(event) {
  event.preventDefault();
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);

  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value, userDesc2.value);


  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;

  goHome();
}

function addToSaved() {
  var coverString = currentCover.cover + currentCover.title + currentCover.tagline1 + currentCover.tagline2;
  for (let i = 0; i < savedCovers.length; i++) {
    var savedString = savedCovers[i].cover + savedCovers[i].title + savedCovers[i].tagline1 + savedCovers[i].tagline2;
    if (savedString === coverString) {
      return
    }
  }
  savedCovers.push(currentCover);

  
  
  var savedCover = document.createElement('section');
  var coverImage = document.createElement('img');
  var title = document.createElement('h2')
  var descriptors = document.createElement('h3');
  var indexPosition = savedCovers.length - 1;


  coverImage.src = savedCovers[savedCovers.length - 1].cover;
  title.innerText = savedCovers[savedCovers.length - 1].title;
  descriptors.innerText = `A tale of ${savedCovers[savedCovers.length - 1].tagline1} and ${savedCovers[savedCovers.length - 1].tagline2}`;
 

  savedSection.appendChild(savedCover);
  savedCover.appendChild(coverImage);
  savedCover.appendChild(title);
  savedCover.appendChild(descriptors);

  savedCover.id = savedCovers[savedCovers.length - 1].id;
  savedCover.classList.add("mini-cover");
  coverImage.classList.add("mini-cover");
  title.classList.add("cover-title");
  descriptors.classList.add("tagline");

  //savedSection.innerHTML = '';
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function deleteMiniCover(event) {
  var miniCoverId = event.target.parentElement;
  var miniCoverSection = document.querySelector(miniCoverId);
  console.log(miniCoverId);
  miniCoverSection.innerHtml = '';
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === miniCoverId) {
      savedCovers.splice(i, 0);
    }
  }
}
