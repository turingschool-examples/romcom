// Declared variables
var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var savedPage = document.querySelector('.saved-view');
var coverButton = document.querySelector('.random-cover-button');
var createCoverButton = document.querySelector('.create-new-book-button')
var coverFormButton = document.querySelector('.make-new-button');
var saveButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var cover = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedCovers = [];
var newCover = new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")

//Event handlers
coverFormButton.addEventListener('click', openForm);
coverButton.addEventListener('click', changeCovers);
viewSavedButton.addEventListener('click', openSavedCovers);
homeButton.addEventListener('click', openHomePage);
createCoverButton.addEventListener('click', createNewBook);
saveButton.addEventListener('click', copyHomePage);

// Navigation functions
function openForm() {
  homePage.classList.add('hidden');
  coverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formPage.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function copyHomePage() {
  if (!savedCovers.includes(newCover)) {
    savedCovers.push(newCover)
    updateViewSavedCover(newCover)
  }
}

function createNewBook() {
  event.preventDefault();
  var userCover = document.querySelector('.user-cover')
  var userTitle = document.querySelector('.user-title')
  var userDesc1 = document.querySelector('.user-desc1')
  var userDesc2 = document.querySelector('.user-desc2')

  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value)
  descriptors.push(userDesc2.value)

  newCover = makeCoverInstance(userCover.value, userTitle.value, userDesc1.value, userDesc2.value)

  displayCover(newCover)
  openHomePage()
}

function displayCover(coverInstance) {
  cover.src = coverInstance.cover
  title.innerText = coverInstance.title
  descriptor1.innerText = coverInstance.tagline1
  descriptor2.innerText = coverInstance.tagline2
}

function openSavedCovers() {
  homePage.classList.add('hidden');
  saveButton.classList.add('hidden');
  coverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedPage.classList.remove('hidden');
}

function openHomePage() {
  savedPage.classList.add('hidden');
  homeButton.classList.add('hidden');
  formPage.classList.add('hidden');
  saveButton.classList.remove('hidden');
  coverButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  coverFormButton.classList.remove('hidden');
  homePage.classList.remove('hidden');
}

function changeCovers() {
  newCover = makeCoverInstance(selectRandomCover(), selectRandomTitle(), selectRandomDescriptor(), selectRandomDescriptor())
  displayCover(newCover)
}

function selectRandomCover() {
  return covers[getRandomIndex(covers)]
}
function selectRandomTitle() {
  return titles[getRandomIndex(titles)]
}
function selectRandomDescriptor() {
  return descriptors[getRandomIndex(descriptors)]
}

function makeCoverInstance(cover, title, desc1, desc2) {
  return new Cover(cover, title, desc1, desc2);
}

function addElement() {
  const newImg = document.createElement('img')
  newImg.classList.add("cover-image")
  newImg.createAttribute("src")
}

function updateViewSavedCover(newCover) {
  var newCoverStructure = `<section id="${newCover.id}" class="mini-cover">
  <img class="mini-cover" src="${newCover.cover}" ondblclick="deleteCover(parentNode.id)">
  <h2 class="cover-title">${newCover.title}</h2>
  <h3 class="tagline">A tale of ${newCover.tagline1} and ${newCover.tagline2}</span></h3>
  </section>`

  savedCoversSection.innerHTML = savedCoversSection.innerHTML + newCoverStructure
}

function deleteCover(id) {
  var instanceId = parseInt(id, 10)
  var coverToDelete = document.getElementById(instanceId)
  coverToDelete.innerHTML = ''
  coverToDelete.remove()
  for (i = 0; i < savedCovers.length; i++) {
    if (instanceId === savedCovers[i].id) {
      savedCovers.splice(i, 1)
    }
  }
}
