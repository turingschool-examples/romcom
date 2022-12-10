var currentCover;

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];




// Create variables targetting the relevant DOM elements here 👇
var coverLocation = document.querySelector('.cover-image')
var titleLocation = document.querySelector('.cover-title')
var taglineOneLocation = document.querySelector('.tagline-1')
var taglineTwoLocation = document.querySelector('.tagline-2')
var priceTagLocation = document.querySelector('.price-tag')
var showFormView = document.querySelector('.form-view')
var showHomeView = document.querySelector('.home-view')
var showMainCover = document.querySelector('.main-cover')

var showHomeButton = document.querySelector('.home-button')
var randomButtonCover = document.querySelector('.random-cover-button')
var saveButtonCover = document.querySelector('.save-cover-button')
var viewSavedCoverButton = document.querySelector('.view-saved-button')
var makeNewCover = document.querySelector('.make-new-button')
var viewSavedCover = document.querySelector('.saved-view')

var userCoverForm = document.querySelector('.user-cover')
var userTitleForm = document.querySelector('.user-title')
var userFirstDescriptorForm = document.querySelector('.user-desc1')
var userSecondDescriptorForm = document.querySelector('.user-desc2')
var makeMyBookButton = document.querySelector('.create-new-book-button')
var displaySavedCover = document.querySelector('.saved-covers-section')


// We've provided a few variables below



// Add your event listeners here 👇

window.addEventListener("load", generateRandomBook)
randomButtonCover.addEventListener("click", generateRandomBook)
makeNewCover.addEventListener("click", makeOwnCover)
viewSavedCoverButton.addEventListener("click", showSavedCovers)
showHomeButton.addEventListener("click", showMainPage)
makeMyBookButton.addEventListener('click', submitForm)
saveButtonCover.addEventListener('click', storeSavedCovers)
// Create your event handlers and other functions here 👇






// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function generateRandomBook() { 
  var randomTitleCover = titles[getRandomIndex(titles)]
  var randomCoverPicture = covers[getRandomIndex(covers)]
  var randomCoverDescriptorOne = descriptors[getRandomIndex(descriptors)]
  var randomCoverDescriptorTwo = descriptors[getRandomIndex(descriptors)]

  currentCover = new Cover (randomCoverPicture, randomTitleCover, randomCoverDescriptorOne, randomCoverDescriptorTwo)
  loadCurrentCover()
}

function loadCurrentCover() {
  coverLocation.src = currentCover.cover
  titleLocation.innerText = currentCover.title
  taglineOneLocation.innerText = currentCover.tagline1 
  taglineTwoLocation.innerText = currentCover.tagline2
}

function makeOwnCover() {
  showFormView.classList.remove("hidden")
  showHomeView.classList.add("hidden")
  randomButtonCover.classList.add("hidden")
  saveButtonCover.classList.add("hidden")
  showHomeButton.classList.remove("hidden")
  viewSavedCover.classList.add("hidden")
}

function showSavedCovers() {
  showMainCover.classList.add("hidden")
  showFormView.classList.add("hidden")
  showHomeButton.classList.remove("hidden")
  viewSavedCover.classList.remove("hidden")
  randomButtonCover.classList.add("hidden")
  saveButtonCover.classList.add("hidden")

  for (var i = 0; i < savedCovers.length; i++) {
    displaySavedCover.innerHTML += `
        <section class="mini-cover">
        <img class="mini-cover" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of ${savedCovers[i].descriptor1} and ${savedCovers[i].descriptor2}</h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png"></img>
        </section>`
  }
}

function showMainPage() {
  showHomeView.classList.remove("hidden")
  showFormView.classList.add("hidden")
  showHomeButton.classList.add("hidden")
  viewSavedCover.classList.add("hidden")
  randomButtonCover.classList.remove("hidden")
  saveButtonCover.classList.remove("hidden")
  showMainCover.classList.remove("hidden")
}


function submitForm(event) {
  event.preventDefault()
  covers.push(userCoverForm.value)
  titles.push(userTitleForm.value)
  descriptors.push(userFirstDescriptorForm.value)
  descriptors.push(userSecondDescriptorForm.value)

  coverLocation.src = userCoverForm.value
  titleLocation.innerText = userTitleForm.value
  taglineOneLocation.innerText = userFirstDescriptorForm.value
  taglineTwoLocation.innerText = userSecondDescriptorForm.value

  showHomeView.classList.remove("hidden")
}

var savedCovers = []

function storeSavedCovers() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  } 
}





// function makeOwnBook(){
// }


// function createBook(){
//   currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText)
// }



