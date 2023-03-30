// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('h2');
var tagline = document.querySelector('h3');
var mainCover = document.querySelector('img');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view')
var savedView = document.querySelector('.saved-view')
var saveCoverButton = document.querySelector('.save-cover-button')
var homeButton = document.querySelector('.home-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeBookButton = document.querySelector('.create-new-book-button')
var coverInput = document.querySelector('#cover')
var titleInput = document.querySelector('#title')
var descriptor1Input = document.querySelector('#descriptor1')
var descriptor2Input = document.querySelector('#descriptor2')

// Add your event listeners here 
randomCoverButton.addEventListener('click', randomCover);
window.addEventListener('load', randomCover);
makeCoverButton.addEventListener('click', switchFormView)
viewSavedButton.addEventListener('click', switchSavedView)
homeButton.addEventListener('click', switchHomeView)
makeBookButton.addEventListener('click', makeBook)

// Create your event handlers and other functions here 👇
function getIndex() {
  var index = {
  titlesIndex: getRandomIndex(titles),
  taglineIndex: getRandomIndex(descriptors),
  taglineIndex2: getRandomIndex(descriptors),
  coverIndex: getRandomIndex(covers)
  }
return index;
}

function randomCover() {
 var index = getIndex();

  var currentCover = {
    id: Date.now(),
    coverImg: covers[index.coverIndex],
    title: titles[index.titlesIndex],
    tagline1: descriptors[index.taglineIndex],
    tagline2: descriptors[index.taglineIndex2]
  }

  title.innerHTML = currentCover.title;
  mainCover.src = currentCover.coverImg;
  tagline.innerHTML = `A tale of ${currentCover.tagline1} and ${currentCover.tagline2}`
  return currentCover
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



function switchFormView() {
  homeView.classList.add('hidden')
  formView.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}

function switchSavedView() {
  homeView.classList.add('hidden')
  formView.classList.add('hidden')
  savedView.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}

function switchHomeView() {
  homeView.classList.remove('hidden')
  formView.classList.add('hidden')
  savedView.classList.add('hidden')
  saveCoverButton.classList.remove('hidden')
  viewSavedButton.classList.remove('hidden')
  makeCoverButton.classList.remove('hidden')
  randomCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
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

function makeBook(event) {
  event.preventDefault()
  var newCover = createCover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value)
  covers.push(coverInput.value)
  titles.push(titleInput.value)
  descriptors.push(descriptor1Input.value, descriptor2Input.value)
  switchHomeView()
  title.innerHTML = newCover.title;
  mainCover.src = newCover.coverImg;
  tagline.innerHTML = `A tale of ${newCover.tagline1} and ${newCover.tagline2}`
  return newCover
}