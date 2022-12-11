
// Create variables targetting the relevant DOM elements here 👇


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

//var cover above tests branch

var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagline = document.querySelector('.tagline')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var priceTag = document.querySelector('.price-tag')


var mainCover = document.querySelector('.main-cover')
var viewForm = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section')

var randomCoverButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var makeBookButton = document.querySelector('.create-new-book-button')

// Add your event listeners here 👇


window.addEventListener('load', displayRandomCover);

randomCoverButton.addEventListener('click', displayRandomCover)

makeNewButton.addEventListener('click', openCoverForm)

viewSavedButton.addEventListener('click', showSavedCoversPage)

homeButton.addEventListener('click', displayHomepage)

makeBookButton.addEventListener('click', showNewCover)

saveCoverButton.addEventListener('click', saveCover)

//Create your event handlers and other functions here 👇



// We've provided one function to get you started


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandomCover() {
  makeCover();
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;

}

function makeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
}

function openCoverForm() {
  viewForm.classList.remove('hidden');
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  makeBookButton.classList.remove('hidden')
}

function showSavedCoversPage() {
  displaySavedCovers()
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  viewForm.classList.add('hidden');

}

function displayHomepage() {
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewForm.classList.add('hidden');
  makeBookButton.classList.add('hidden');
}

function makeBook() {
  
  var coverInput = document.getElementById('cover').value; 
  var titleInput = document.getElementById('title').value;
  var descriptor1Input = document.getElementById('descriptor1').value;
  var descriptor2Input = document.getElementById('descriptor2').value;
  covers.push(coverInput);
  titles.push(titleInput);
  descriptors.push(descriptor1Input);
  descriptors.push(descriptor2Input);
  currentCover = new Cover (coverInput, titleInput, descriptor1Input, descriptor2Input);

}

function showNewCover(event) {
  event.preventDefault();
  makeBook();
  displayHomepage();
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;

}
// Joe Exotic data insert.

function saveCover() {
  if (savedCovers.includes(currentCover) === false) 
  savedCovers.push(currentCover);

}

function displaySavedCovers() {
  savedCoversSection.innerHTML = ''; 
  for (var i = 0; i < savedCovers.length; i++) {
  savedCoversSection.innerHTML +=
 `<section class= "mini-cover">
    <img class= "cover-image" src= "${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> 
    and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  </section>`
  }
}


