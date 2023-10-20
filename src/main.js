// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button')
var randomCoverBtn = document.querySelector('.random-cover-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var makeNewBtn = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var createNewCoverBtn = document.querySelector('.create-new-book-button');
var formInfromation = document.querySelector('form');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');
var savedViewCovers = document.querySelector('.saved-covers-section')

var savedCovers = [
  // createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")

];

var currentCover;
var imageSrc;
var title;
var descriptor1;
var descriptor2;

// Add your event listeners here 👇

randomCoverBtn.addEventListener('click', randomizeCover);
saveCoverBtn.addEventListener('click', saveCover);
homeButton.addEventListener('click', navToHomePage);
viewSavedBtn.addEventListener('click', navToSavedPage);
makeNewBtn.addEventListener('click', navToMakeNewPage);
createNewCoverBtn.addEventListener('click', createUserCover);
savedViewCovers.addEventListener('dblclick', (e) => {
  deleteSavedCover(e)
})

// Create your event handlers and other functions here 👇

function randomizeCover() {
  imageSrc = covers[getRandomIndex(covers)];
  coverImage.src = imageSrc;
  title = titles[getRandomIndex(titles)];
  coverTitle.innerText = title;
  descriptor1 = descriptors[getRandomIndex(descriptors)];
  tagline1.innerText = descriptor1;
  descriptor2 = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptor2;
  currentCover = createCover(imageSrc, title, descriptor1, descriptor2);
  return currentCover
}

function createUserCover() {
  event.preventDefault();
  imageSrc = userCover.value;
  covers.push(imageSrc);
  title = userTitle.value;
  titles.push(title);
  descriptor1 = userDesc1.value;
  descriptors.push(descriptor1);
  descriptor2 = userDesc2.value;
  descriptors.push(descriptor2);
  currentCover = createCover(imageSrc, title, descriptor1, descriptor2);
  renderUserCover();
  formInfromation.reset();
}

function renderUserCover() {
  navToHomePage()
  coverImage.src = currentCover.coverImg;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  return currentCover;
}

function saveCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === currentCover.id)
      return;
  }
  savedCovers.push(currentCover)
  savedViewCovers.appendChild(viewSavedCovers());
}

function viewSavedCovers() {
  var newSavedCoverImage = document.createElement('img');
  newSavedCoverImage.classList.add('mini-cover');
  newSavedCoverImage.src = currentCover.coverImg;

  var newSavedCoverTitle = document.createElement('h2');
  newSavedCoverTitle.classList.add('cover-title');
  newSavedCoverTitle.innerText = currentCover.title;

  var newSavedCoverTagline = document.createElement('h3');
  newSavedCoverTagline.classList.add('tagline');
  var newSavedCoverTagline1 = document.createElement('span');
  newSavedCoverTagline1.innerText = currentCover.tagline1;

  var newSavedCoverTagline2 = document.createElement('span');
  newSavedCoverTagline2.innerText = currentCover.tagline2;
  var newSavedCoverTaglineText = 
  document.createTextNode(`A tale of ${newSavedCoverTagline1.innerText} and ${newSavedCoverTagline2.innerText}`);
  newSavedCoverTagline.appendChild(newSavedCoverTaglineText);

  var newSavedCover = document.createElement('section');
  newSavedCover.classList.add('mini-cover');
  newSavedCover.setAttribute("id", currentCover.id);
  newSavedCover.append(newSavedCoverImage, newSavedCoverTitle, newSavedCoverTagline)
  return newSavedCover;
}

function deleteSavedCover(e){
  for (var i = 0; i < savedCovers.length; i++) {
    if (Number(e.target.parentElement.id) === Number(savedCovers[i].id)) {
      savedCovers.splice(i, 1);
      document.getElementById(e.target.parentElement.id).remove();
    }
  }
}

function navToSavedPage() {
  homeButton.classList.remove('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
}

function navToMakeNewPage() {
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function navToHomePage() {
  randomCoverBtn.classList.remove('hidden');
  homeButton.classList.add('hidden');
  saveCoverBtn.classList.remove('hidden');
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}