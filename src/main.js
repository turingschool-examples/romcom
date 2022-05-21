// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');

var imageArray = document.querySelector('.cover-image');

var taglineArrayOne = document.querySelector('.tagline-1');

var taglineArrayTwo = document.querySelector('.tagline-2');

var getRandomButton = document.querySelector('.random-cover-button');

var makeYourOwnButton = document.querySelector('.make-new-button');

var saveCoverButton = document.querySelector('.save-cover-button');

var viewSaveCoverButton = document.querySelector('.view-saved-button');

var homeButton = document.querySelector('.home-button');

var viewFormView = document.querySelector('.form-view');

var viewHomeView = document.querySelector('.home-view');

var viewSavedView = document.querySelector('.saved-view');

var userCover = document.querySelector('.user-cover');

var userTitle = document.querySelector('.user-title');

var userDesc1 = document.querySelector('.user-desc1');

var userDesc2 = document.querySelector('.user-desc2');

var formCover = document.querySelector('#cover');

var formTitle = document.querySelector('#title');

var formDescriptor1 = document.querySelector('#descriptor1')

var formDescriptor2 = document.querySelector('#descriptor2')

var createNewBookButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;
// Add your event listeners here 👇
getRandomButton.addEventListener('click', getRandomCover)

makeYourOwnButton.addEventListener('click', makeNewPage)

viewSaveCoverButton.addEventListener('click', savedView)

homeButton.addEventListener('click', viewHome)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeNewPage() {
viewFormView.classList.remove('hidden');
viewHomeView.classList.add('hidden');
getRandomButton.classList.add('hidden');
saveCoverButton.classList.add('hidden');
homeButton.classList.remove('hidden');
viewSavedView.classList.add('hidden')
}

function savedView() {
viewHomeView.classList.add('hidden');
getRandomButton.classList.add('hidden');
saveCoverButton.classList.add('hidden');
homeButton.classList.remove('hidden');
viewSavedView.classList.remove('hidden');
viewFormView.classList.add('hidden');
}

function viewHome() {
viewHomeView.classList.remove('hidden');
viewSavedView.classList.add('hidden');
viewFormView.classList.add('hidden');
homeButton.classList.add('hidden');
getRandomButton.classList.remove('hidden');
saveCoverButton.classList.remove('hidden');
}


function getRandomCover() {
currentCover = new Cover(imageArray, coverTitle, taglineArrayOne, taglineArrayTwo);
imageArray.src = covers[getRandomIndex(covers)];
coverTitle.innerText = titles[getRandomIndex(titles)];
taglineArrayOne.innerText = descriptors[getRandomIndex(descriptors)];
taglineArrayTwo.innerText = descriptors[getRandomIndex(descriptors)];
}

function makeOwnCover(event) {
  event.preventDefault();
  var coverNew = formCover.value;
  userCover.innerText = coverNew

  var titleNew = formTitle.value;
  userTitle.innerText = titleNew

  var descriptor1New = formDescriptor1.value;
  userDesc1.innerText = descriptor1New

  var descriptor2New = formDescriptor2.value;
  userDesc2.innerText = descriptor2New
}

getRandomCover()
