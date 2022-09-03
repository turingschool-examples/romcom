// Create variables targetting the relevant DOM elements here 👇

var homePage = document.querySelector('.home-view')
var formPage = document.querySelector('.form-view')
var savedCoversPage = document.querySelector('.saved-view')
var controls = document.querySelector('.controls')
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine1 = document.querySelector('.tagline-1')
var tagLine2 = document.querySelector('.tagline-2')
var homeButton = document.querySelector('.home-button')
var randomCoverButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedCoversButton = document.querySelector('.view-saved-button')
var makeYourOwnCoverButton = document.querySelector('.make-new-button')
var formInputCover = document.querySelector('.user-cover')
var formInputTitle = document.querySelector('.user-title')
var formInputTag1 = document.querySelector('.user-desc1')
var formInputTag2 = document.querySelector('.user-desc2')
var makeMyBookButton = document.querySelector('.create-new-book-button')


// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover

// Add your event listeners here 👇

randomCoverButton.addEventListener('click', getRandomCover)
makeYourOwnCoverButton.addEventListener(`click`, viewForm)
homeButton.addEventListener(`click`, viewHome)
viewSavedCoversButton.addEventListener(`click`, viewSavedCovers)
makeMyBookButton.addEventListener('click', makeBookCover)
saveCoverButton.addEventListener('click', saveCover)

// Create your event handlers and other functions here 👇


function getRandomCover() {
  currentCover = new Cover (
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  )
  displayCover()
}


function displayCover() {
  coverImage.setAttribute('src', currentCover.cover);
  coverTitle.innerText = currentCover.title
  tagLine1.innerText = currentCover.tagline1
  tagLine2.innerText = currentCover.tagline2
}

function viewForm() {
  homePage.style.display = "none";
  formPage.style.display = "block";
  homeButton.style.display = "block";
  randomCoverButton.style.display = "none";
  saveCoverButton.style.display = "none";
  viewSavedCoversButton.style.display = "block";
  makeYourOwnCoverButton.style.display = "block";
}

function viewHome() {
  homePage.style.display = "block";
  formPage.style.display = "none";
  homeButton.style.display = "none";
  randomCoverButton.style.display = "block";
  saveCoverButton.style.display = "block";
  viewSavedCoversButton.style.display = "block";
  makeYourOwnCoverButton.style.display = "block";
}

function viewSavedCovers() {
  homePage.style.display = "none";
  formPage.style.display = "none";
  savedCoversPage.style.display = "block";
  randomCoverButton.style.display = "block";
  viewSavedCoversButton.style.display = "none";
  homeButton.style.display = "block";
  document.querySelector(".saved-covers-section").innerHTML= "";
  for(var i = 0; i < savedCovers.length; i++) {
     document.querySelector(".saved-covers-section").innerHTML += `
<span class = "mini-cover" id = "${savedCovers[i].id}">
<img class = "cover-image" src = ${savedCovers[i].cover}>
<h2 class = "cover-title">${savedCovers[i].title}</h2>
<h3 class = "tagline"> A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
<img class="price-tag" src="./assets/price.png">
<img class="overlay" src="./assets/overlay.png">
</span>
     `
   }

}

function makeBookCover(event) {
event.preventDefault()

  currentCover = new Cover (
    formInputCover.value,
    formInputTitle.value,
    formInputTag1.value,
    formInputTag2.value
  )

  covers.push(currentCover.cover)
  titles.push(currentCover.title)
  descriptors.push(currentCover.tagline1)
  descriptors.push(currentCover.tagline2)

  displayCover()

  homePage.setAttribute('style', 'display: ')
  formPage.className = 'view form-view hidden'
}


function saveCover(event) {
  event.preventDefault()
  if (!savedCovers.includes(currentCover)) {
console.log(currentCover)
console.log(savedCovers)
    savedCovers.push(currentCover);
  }

}
function displaySavedCovers() {

}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
