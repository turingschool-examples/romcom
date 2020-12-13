var mainPage = document.querySelector('.main-cover');
var coverForm = document.querySelector('.form-view');
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');

var form = document.querySelector('form');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDescriptor1 = document.querySelector('#descriptor1');
var userDescriptor2 = document.querySelector('#descriptor2');
var createNewBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var viewSavedSection = document.querySelector('.saved-view');
var homeView = document.querySelector('.home-view');

window.onload = getRandomCover();
randomCoverButton.addEventListener('click', getRandomCover);
makeOwnCoverButton.addEventListener('click', showMakeOwnCover);
homeButton.addEventListener('click', goHome);
viewSavedCoversButton.addEventListener('click', viewSavedCovers);
createNewBookButton.addEventListener('click', saveMakeOwnCover);
saveCoverButton.addEventListener('click', saveCover);

var savedCovers = [];
var currentCover;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];;;
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);

mainPage.innerHTML = `
  <section class="main-cover">
    <img class="cover-image" src="${currentCover.cover}">
    <h2 class="cover-title">${currentCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
    <img class="price-tag" src="">
    <img class="overlay" src="./assets/overlay.png">
  </section>
  `;
};

function saveMakeOwnCover() {
  event.preventDefault()
  currentCover = new Cover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value)

  mainPage.innerHTML = `
    <section class="main-cover">
      <img class="cover-image" src="${currentCover.cover}">
      <h2 class="cover-title">${currentCover.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
      <img class="price-tag" src="">
      <img class="overlay" src="./assets/overlay.png">
    </section>
    `
    form.classList.add('hidden');
    homeButton.classList.add('hidden');
    mainPage.classList.remove('hidden');
    saveCoverButton.classList.remove('hidden');
    randomCoverButton.classList.remove('hidden');
    fixBrokenCover();
};

function showMakeOwnCover() {
  mainPage.classList.add('hidden');
  coverForm.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

function goHome() {
  mainPage.classList.remove('hidden');
  coverForm.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedSection.classList.add('hidden');
  homeView.classList.remove('hidden');
  getRandomCover();
};

function viewSavedCovers() {
  mainPage.classList.add('hidden');
  coverForm.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedCoversButton.classList.remove('hidden');
  displayAllSavedCovers();

  if (savedCovers.length === 0 ){
    alert("You haven't save any covers yet!")
    window.location.reload();
  }
};

function saveCover(){
    if (!savedCovers.includes(currentCover)){
      savedCovers.push(currentCover);
  }
};

function displayAllSavedCovers() {
  viewSavedSection.classList.remove('hidden');
  homeView.classList.add('hidden');

  for (var i = 0; i < savedCovers.length; i++){
    savedCoversSection.innerHTML += `
      <section class="main-cover">
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="">
        <img class="overlay" src="./assets/overlay.png">
      </section>
      `
  }
};

function fixBrokenCover() {
  if (userCover.value === "" && userTitle.value === "" && userDescriptor1.value === "" && userDescriptor2.value === ""){
  alert("Can't create new cover without all values in each field. Try again!")
  window.location.reload();
  }
};
