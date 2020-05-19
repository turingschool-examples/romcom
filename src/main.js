// buttons
var homeButton = document.querySelector('.home-button');
var newRandomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var customBookButton = document.querySelector('.make-new-button')
var makeMyBook = document.querySelector('.create-new-book-button');
// cover elements
var coverImg = document.querySelector('img');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
// page view sections
var mainCoverSection = document.querySelector('.main-cover')
var formSection = document.querySelector('.form-view');
var savedCoversPage = document.querySelector('.saved-view');
var savedCoversGallery = document.querySelector('.saved-covers-section');
// data
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover ;
// Add your event listeners
homeButton.addEventListener('click', goHome);
newRandomButton.addEventListener('click', randomizeCover);
saveCoverButton.addEventListener('click', saveUserFavorite);
viewSavedButton.addEventListener('click', viewSavedPage);
customBookButton.addEventListener('click', viewFormPage);
makeMyBook.addEventListener('click', seeUserBook);
// event handlers and other functions
window.onload = randomizeCover;    //window onload
// page views
function injectCoverData(){
  coverImg.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function goHome() {
  mainCoverSection.classList.remove('hidden');
  savedCoversPage.classList.add('hidden');
  newRandomButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  formSection.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  savedCoversGallery.classList.add('hidden');
};

function viewFormPage() {
  savedCoversGallery.innerHTML = `<br />`;
  mainCoverSection.classList.add('hidden');
  formSection.classList.remove('hidden');
  newRandomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedCoversGallery.classList.add('hidden');
}

function viewSavedPage() {
  mainCoverSection.classList.add('hidden');
  savedCoversPage.classList.remove('hidden');
  newRandomButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formSection.classList.add('hidden');
  savedCoversGallery.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  injectCoverGallery();
}

function injectCoverGallery() {
  savedCoversGallery.innerHTML = `<br />`;
for (i = 0; i < savedCovers.length; i++){
  savedCoversGallery.innerHTML += `<div class="mini-cover"><img class="mini-cover" src="${savedCovers[i].cover}">
  <p class="cover-title">${savedCovers[i].title}</p>
  <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3></div>`;
  }
}
//cover creators
function randomizeCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

  injectCoverData()
}

function createUserCover() {
  currentCover = new Cover(covers[0], titles[0], descriptors[1], descriptors[0]);

}

function seeUserBook(event) {
  event.preventDefault();
  saveUserInput ();
  createUserCover();
  injectCoverData();
  goHome();
}
//data
function saveUserInput() {
  covers.unshift(document.getElementById('cover').value);
  titles.unshift(document.getElementById('title').value);
  descriptors.unshift(document.getElementById('descriptor1').value);
  descriptors.unshift(document.getElementById('descriptor2').value);

}

function saveUserFavorite(){
if (savedCovers.includes(currentCover)){
  } else {
    savedCovers.push(currentCover)
  }
  console.log(savedCovers)
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
