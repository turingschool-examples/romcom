
// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')
// --views
var home = document.querySelector('.home-view')
var form = document.querySelector('.form-view')
var savedCoverSection = document.querySelector('.saved-covers-section')
var savedForm = document.querySelector('.saved-view')
// --buttons
var randomCoverButton = document.querySelector('.random-cover-button')
var formButton = document.querySelector('.make-new-button')
var saveButton = document.querySelector('.save-cover-button')
var homeButton = document.querySelector('.home-button')
var savedCoverButton = document.querySelector('.view-saved-button')
var createNewBookButton = document.querySelector('.create-new-book-button')
// --user input
var imgSrc = document.querySelector('.user-cover')
var title = document.querySelector('.user-title')
var descriptor1 = document.querySelector('.user-desc1')
var descriptor2 = document.querySelector('.user-desc2')

// We've provided a few variables below
var savedCovers = [
  // createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', newCover)
window.addEventListener("load", newCover);
window.addEventListener("load", randomTitle);
window.addEventListener("load", randomDescriptors);
formButton.addEventListener('click', changeView)
savedCoverButton.addEventListener('click', savedCover)
homeButton.addEventListener('click', homeView)
createNewBookButton.addEventListener('click', makeBook)
saveButton.addEventListener('click', saveCover)
savedCoverSection.addEventListener('dblclick', deleteCover)


// Create your event handlers and other functions here 👇
function newCover() {
  var randomNumber = Math.floor(Math.random()*covers.length)
  coverImage.src = covers[randomNumber]
}

function randomTitle() {
  var randomNumber = Math.floor(Math.random()*titles.length)
  coverTitle.textContent = titles[randomNumber]
}

function randomDescriptors() {
  var randomNumber = Math.floor(Math.random()*descriptors.length)
  var randomNumber1 = Math.floor(Math.random()*descriptors.length)
  tagline1.textContent = descriptors[randomNumber]
  tagline2.textContent = descriptors[randomNumber1]
  }

function changeView() {
  home.classList.add('hidden')
  form.classList.remove('hidden')
  saveButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  savedForm.classList.add('hidden')
}

function savedCover() {
  home.classList.add('hidden')
  savedForm.classList.remove('hidden')
  saveButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  form.classList.add('hidden')
}

function homeView() {
  home.classList.remove('hidden')
  savedForm.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
  form.classList.add('hidden')
  saveButton.classList.remove('hidden')
}

function makeBook(event) {
  event.preventDefault()
  coverTitle.textContent = title.value;
  tagline1.innerText = descriptor1.value;
  tagline2.innerText = descriptor2.value;
  coverImage.src = imgSrc.value
   homeView()
}

function pushCover() {
  covers.push(imgSrc.value)
  titles.push(title.value)
  descriptors.push(descriptor1.value)
  descriptors.push(descriptor2.value)
}


function saveCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover === savedCovers[i]) {
      return null
     }
   }
  savedCovers.unshift(currentCover)
  savedCoverSection.innerHTML += 
  `<section class="mini-cover" id=${savedCovers[0].id}>
        <img class="cover-image" src=${savedCovers[0].coverImg}>
        <h2 class="cover-title">${savedCovers[0].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[0].tagline1}</span> and <span class="tagline-2">${savedCovers[0].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png"></img>`
  }

function deleteCover() {
  var miniCoverId = document.getElementById('#mini-cover')
  miniCoverId.classList.add('hidden');
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === miniCoverId) {
      savedCovers.splice(i, 1);
    }
  }
  return savedCovers;
}


// We've provided two functions to get you started
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
