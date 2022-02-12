// Create variables targetting the relevant DOM elements here 👇
var grabTitle = document.querySelector('.cover-title')
var grabCover = document.querySelector('.cover-image')
var grabTagline1 = document.querySelector('.tagline-1')
var grabTagline2 = document.querySelector('.tagline-2')




// grabTitle.innerText = titles[getRandomIndex(titles)];
// grabCover.src = covers[getRandomIndex(covers)];
// grabTagline1.innerText = descriptors[getRandomIndex(descriptors)];
// grabTagline2.innerText = descriptors[getRandomIndex(descriptors)];


// We've provided a few variables below
var savedCovers = [];
var currentCover = [];



// Add your event listeners here 👇
document.querySelector('.random-cover-button').onclick = function() {randomBook()};
document.querySelector('.view-saved-button').onclick = function() {
  hideEverything();
  viewSavedCovers();
  addClassToArray();
};
document.querySelector('.make-new-button').onclick = function() {
  hideEverything();
  makeNewCoverForm();
};
document.querySelector('.home-button').onclick = function() {
  homeButton();
};
document.querySelector('.create-new-book-button').onclick = function() {
  makeMyBook();
};
document.querySelector('.save-cover-button').onclick = function() {
  saveCurrentCover();
};


// Create your event handlers and other functions here 👇
randomBook();

function randomBook() {
   var newRandomBook = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
   console.log(newRandomBook, 'book that is random on home page');
   currentCover.push(newRandomBook);
   if (currentCover.length > 1) { currentCover.shift(); }

   grabCover.src = newRandomBook.cover;
   grabTitle.innerText = newRandomBook.title;
   grabTagline1.innerText = newRandomBook.tagline1;
   grabTagline2.innerText = newRandomBook.tagline2;
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

  currentCover.push(new Cover(userCover, userTitle, userDescriptor1, userDescriptor2));
  displayUserBook();
  homeButton();
}

function displayUserBook() {
  grabTitle.innerText = currentCover[0].title;
  grabCover.src = currentCover[0].cover;
  grabTagline1.innerText = currentCover[0].tagline1;
  grabTagline2.innerText = currentCover[0].tagline2;
}
function saveCurrentCover (){
  savedCovers.push(currentCover[0]);
  currentCover.shift()
  console.log(savedCovers, 'savedCovers');
  console.log(currentCover, `currentCover`);
}

function addClassToArray() {
  document.querySelector('.saved-view').classList.remove('hidden');
  var section = document.querySelector(".saved-covers-section")

 section.innerHTML +=`
<section class="main-cover">
 <img class="cover-image" src="./assets/prairie.jpg">
 <h2 class="cover-title">Windswept Hearts</h2>
 <h3 class="tagline">A tale of <span class="tagline-1">passion</span> and <span class="tagline-2">woe</span></h3>
 <img class="price-tag" src="./assets/price.png">
 <img class="overlay" src="./assets/overlay.png">
 `
}

console.log(currentCover, 'currentCover')
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
