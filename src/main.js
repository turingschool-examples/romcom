// Create variables targetting the relevant DOM elements here 👇
var grabTitle = document.querySelector('.cover-title')
var grabCover = document.querySelector('.cover-image')
var grabTagline1 = document.querySelector('.tagline-1')
var grabtagline2 = document.querySelector('.tagline-2')

grabTitle.innerText = titles[getRandomIndex(titles)];
grabCover.src = covers[getRandomIndex(covers)];
grabTagline1.innerText = descriptors[getRandomIndex(descriptors)];
grabtagline2.innerText = descriptors[getRandomIndex(descriptors)];


// We've provided a few variables below
var savedCovers = [];



// Add your event listeners here 👇
document.querySelector('.random-cover-button').onclick = function() {randomBook()};
document.querySelector('.view-saved-button').onclick = function() {
  hideEverything();
  viewSavedCovers()
};
document.querySelector('.make-new-button').onclick = function() {
  hideEverything();
  makeNewCoverForm()
};
document.querySelector('.home-button').onclick = function() {
  homeButton();
};
document.querySelector('.create-new-book-button').onclick = function() {
  makeMyBook();
};


// Create your event handlers and other functions here 👇
function randomBook() {
   var newRandomBook = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

   grabCover.src = newRandomBook.cover;
   grabTitle.innerText = newRandomBook.title;
   grabTagline1.innerText = newRandomBook.tagline1;
   grabtagline2.innerText = newRandomBook.tagline2;
}

function makeNewCoverForm() {
 document.querySelector('.form-view').classList.remove('hidden');
 document.querySelector('.home-button').classList.remove('hidden');
}

function hideEverything () {
  document.querySelector('.main-cover').hidden = true;
  document.querySelector('.random-cover-button').hidden = true;
  document.querySelector('.save-cover-button').hidden = true;
  document.querySelector('.form-view').classList.add('hidden');
}

function viewSavedCovers() {
  document.querySelector('.home-button').classList.remove('hidden');
  }

function homeButton() {
  document.querySelector('.form-view').classList.add('hidden')
  document.querySelector('.home-button').classList.add('hidden')
  document.querySelector('.save-cover-button').hidden = false
  document.querySelector('.main-cover').hidden = false
  document.querySelector('.random-cover-button').hidden = false;
  document.querySelector('.home-button').hidden = false;
};

function makeMyBook(){
  event.preventDefault()
  var userCover = document.querySelector('.user-cover').value;
  var userTitle = document.querySelector('.user-title').value;
  var userDescriptor1 = document.querySelector('.user-desc1').value;
  var userDescriptor2 = document.querySelector('.user-desc2').value;

  savedCovers.push(new Cover(userCover, userTitle, userDescriptor1, userDescriptor2));
  homeButton();
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
