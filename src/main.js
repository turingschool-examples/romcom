// Create variables targeting the relevant DOM elements here 👇
// variables accessing book cover HTML elements
var coverOnLoad = document.querySelector('img');
var titleOnLoad = document.querySelector('h2');
var firstDescriptorOnLoad = document.querySelector('.tagline-1');
var secondDescriptorOnLoad = document.querySelector('.tagline-2');

// Button variables
var randomButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
// var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
var formView = document.querySelector('form');

var currentPage = 'home-view';
var currentCover;

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
document.addEventListener("DOMContentLoaded", randomizeCover);

randomButton.addEventListener("click", randomizeCover);

homeButton.addEventListener('click', function() {
  changePage('home-view', currentPage);
  changeButton2('random-cover-button', 'save-cover-button', 'home-button');
});

// saveCoverButton.addEventListener('click', saveCover);

viewSavedCoversButton.addEventListener('click', function() {
  changePage('saved-view', currentPage);
  changeButton1('home-button', 'save-cover-button', 'random-cover-button');
  formView.classList.add('hidden');
});

makeNewCoverButton.addEventListener('click', function() {
  changePage('form-view', currentPage);
  changeButton1('home-button', 'save-cover-button', 'random-cover-button');
  formView.classList.remove('hidden');
});



// Create your event handlers and other functions here 👇
function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverOnLoad.src = currentCover.cover;
  titleOnLoad.innerText = currentCover.title;
  firstDescriptorOnLoad.innerText = currentCover.tagline1;
  secondDescriptorOnLoad.innerText = currentCover.tagline2;
}

function changePage(newPage, currentPage) {
  var hidePage = document.querySelector(`.${currentPage}`);
  hidePage.classList.add('hidden');

  var showPage = document.querySelector(`.${newPage}`);
  showPage.classList.remove('hidden');

  currentPage = `${newPage}`;
}

function changeButton1(newButton, removeButton1, removeButton2) {
  var showButton = document.querySelector(`.${newButton}`);
  // showButton.classList.add('view');
  showButton.classList.remove('hidden');

  var hideButton1 = document.querySelector(`.${removeButton1}`);
  hideButton1.classList.add('hidden');
  //hidebutton1.classList.remove('view');

  var hideButton2 = document.querySelector(`.${removeButton2}`);
  hideButton2.classList.add('hidden');
  //hideButton2.classList.remove('view');
}

function changeButton2(newButton1, newButton2, removeButton) {
  var showButton1 = document.querySelector(`.${newButton1}`);
  // showButton1.classList.add('view');
  showButton1.classList.remove('hidden');

  var showButton2 = document.querySelector(`.${newButton2}`);
  // showButton2.classList.add('view');
  showButton2.classList.remove('hidden');

  var hideButton = document.querySelector(`.${removeButton}`);
  hideButton.classList.add('hidden');
  //hideButton.classList.remove('view');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var userCover = document.querySelector('#cover').value;
var userTitle = document.querySelector('#title').value;
var userDescriptor1 = document.querySelector('#descriptor1').value;
var userDescriptor2 = document.querySelector('#descriptor2').value;
var makeMyBookButton = document.querySelector('.create-new-book-button');

makeMyBookButton.addEventListener('click', createBook);

function createBook() {
  currentCover = new Cover(userCover, userTitle, userDescriptor1, userDescriptor2);
  coverOnLoad.src = currentCover.cover;
  titleOnLoad.innerText = currentCover.title;
  firstDescriptorOnLoad.innerText = currentCover.tagline1;
  secondDescriptorOnLoad.innerText = currentCover.tagline2;
}

// {
//   saveInputToArrays(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
//   userCreatedCover(covers[covers.length - 1], titles[titles.length - 1], descriptors[descriptors.length - 1], descriptors[descriptors.length - 1]);
// });

// function saveInputToArrays(userCover, userTitle, userDescriptor1, userDescriptor2) {
//   covers.push(userCover.value);
//   titles.push(userTitle.value);
//   descriptors.push(userDescriptor1.value);
//   descriptors.push(userDescriptor2.value);
//   userCreatedCover(covers[covers.length - 1], titles[titles.length - 1], descriptors[descriptors.length - 1], descriptors[descriptors.length - 1])
// }
//
// function userCreatedCover(userCover, userTitle, userDescriptor1, userDescriptor2) {
//   var userBook = new Cover(userCover, userTitle, userDescriptor1, userDescriptor2);
//   coverOnLoad.src = userCover;
//   titleOnLoad.innerText = userTitle;
//   firstDescriptorOnLoad.innerText = userDescriptor1;
//   secondDescriptorOnLoad.innerText = userDescriptor2;
// }
