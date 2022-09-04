// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image")
var coverTitle = document.querySelector(".cover-title")
var tagLine1 = document.querySelector(".tagline-1")
var tagLine2 = document.querySelector(".tagline-2")
var randomButton = document.querySelector(".random-cover-button")
var makeNewButton = document.querySelector(".make-new-button")
var formView = document.querySelector(".form-view")
var homeView = document.querySelector(".home-view")
var savedView = document.querySelector(".saved-view")
var saveCoverButton = document.querySelector(".save-cover-button")
var homeButton = document.querySelector(".home-button")
var savedCoversButton = document.querySelector(".view-saved-button")
var userCover = document.querySelector(".user-cover")
var userTitle = document.querySelector(".user-title")
var userDescriptor = document.querySelector(".user-desc1")
var userDescriptor2 = document.querySelector(".user-desc2")
var makeBookButton = document.querySelector(".create-new-book-button")
var savedCoversSection = document.querySelector(".saved-covers-section")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', displayRandomCover)
randomButton.addEventListener('click', displayRandomCover)
makeNewButton.addEventListener('click',displayFormView)
savedCoversButton.addEventListener('click', displaySavedView)
homeButton.addEventListener('click', displayHomeView)
makeBookButton.addEventListener('click', createCustomCover)
saveCoverButton.addEventListener('click', saveCover)
savedCoversSection.addEventListener('dblclick', deleteCover)

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
    coverImg.src = currentCover.cover
    coverTitle.innerText = currentCover.title
    tagLine1.innerText = currentCover.tagline1
    tagLine2.innerText = currentCover.tagline2
  return currentCover
}

function displayFormView() {
  homeView.classList.add("hidden")
  formView.classList.remove("hidden")
  randomButton.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
}

function displaySavedView() {
  savedView.classList.remove("hidden")
  homeView.classList.add("hidden")
  formView.classList.add("hidden")
  saveCoverButton.classList.add("hidden")
  randomButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  var savedCoverHTML = ""
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoverHTML +=
    `<section class="mini-cover" id=${savedCovers[i].id}>
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`
  }
  savedCoversSection.innerHTML = savedCoverHTML
}

function displayHomeView() {
  homeView.classList.remove("hidden")
  formView.classList.add("hidden")
  savedView.classList.add("hidden")
  homeButton.classList.add("hidden")
  randomButton.classList.remove("hidden")
  saveCoverButton.classList.remove("hidden")
}

function createCustomCover() {
  event.preventDefault()
  covers.push(userCover.value)
  titles.push(userTitle.value)
  descriptors.push(userDescriptor.value, userDescriptor2.value)
  currentCover = new Cover(userCover.value, userTitle.value,
  userDescriptor.value, userDescriptor2.value)
    coverImg.src = currentCover.cover
    coverTitle.innerText = currentCover.title
    tagLine1.innerText = currentCover.tagline1
    tagLine2.innerText = currentCover.tagline2
  displayHomeView()
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
}

function deleteCover() {
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id === Number(event.target.parentNode.id)) {
        savedCovers.splice(i, 1)
      }
    }
  displaySavedView()
}
