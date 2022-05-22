// Create variables targetting the relevant DOM elements here 👇
var coverPic = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagLine = document.querySelector('.tagline')
var priceTag = document.querySelector('.price-tag')
var overlayImg = document.querySelector('.overlay')
var randomBtn = document.querySelector('.random-cover-button')
var makeOwnBtn = document.querySelector('.make-new-button')
var makeOwnPage = document.querySelector('.form-view')
var viewSavedPage = document.querySelector('.saved-view')
var viewSaveBtn = document.querySelector('.view-saved-button')
var homePage = document.querySelector('.home-view')
var homeBtn = document.querySelector('.home-button')
var coverInput = document.querySelector('#cover')
var makeMyBookBtn = document.querySelector('.create-new-book-button')
var titleInput = document.querySelector('#title')
var tagInput1 = document.querySelector('#descriptor1')
var tagInput2 = document.querySelector('#descriptor2')
var saveCoverBtn = document.querySelector('.save-cover-button')
var navSavedCovers = document.querySelector('.saved-covers-section')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

overlayImg.classList.add("hidden");
var currentCover;
priceTag.classList.add("hidden");


// Add your event listeners here 👇
randomBtn.addEventListener('click', randomize)
makeOwnBtn.addEventListener('click', showMakeOwnPage)
viewSaveBtn.addEventListener('click', viewSaved)
homeBtn.addEventListener('click', goHome)
makeMyBookBtn.addEventListener('click', makeBook)
saveCoverBtn.addEventListener('click', addToSaved)

// Create your event handlers and other functions here 👇


// Should make a way to save random covers.


randomize();
function randomize() {
    var newCover = getRandomIndex(covers)
    var newTitle = getRandomIndex(titles)
    var newTag1 = getRandomIndex(descriptors)
    var newTag2 = getRandomIndex(descriptors)
    priceTag.classList.add("hidden")
    coverPic.src = covers[newCover]
    coverTitle.innerText = titles[newTitle]
    coverTagLine.innerText = `A tale of ${descriptors[newTag1]} and ${descriptors[newTag2]}`
    currentCover = new Cover(covers[newCover], titles[newTitle], descriptors[newTag1], descriptors[newTag2])
    return currentCover
}

function showMakeOwnPage() {
  makeOwnPage.classList.remove("hidden")
  homePage.classList.add("hidden")
  randomBtn.classList.add("hidden")
  saveCoverBtn.classList.add("hidden")
  homeBtn.classList.remove("hidden")
  viewSavedPage.classList.add("hidden")
  priceTag.classList.add("hidden")
}

function viewSaved() {
  viewSavedPage.classList.remove("hidden")
  homePage.classList.add("hidden")
  randomBtn.classList.add("hidden")
  saveCoverBtn.classList.add("hidden")
  homeBtn.classList.remove("hidden")
  makeOwnPage.classList.add("hidden")
  viewSaveBtn.classList.add("hidden")
  var displayCovers = document.querySelector('.saved-covers-section')
  var savedUserImg = ""
  for (var i = 0; i < savedCovers.length; i++) {
    savedUserImg  = savedUserImg  + `<section class="mini-cover">
    <img class="overlay" src="./assets/overlay.png">
    <img class="cover-image" src=${savedCovers[i].cover}>
     <h2 class="cover-title">${savedCovers[i].title}</h2>
     <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>

     </section>`
  }
  displayCovers.innerHTML = savedUserImg ;
}





function goHome() {
  overlayImg.classList.remove("hidden");
  homePage.classList.remove("hidden")
  makeOwnPage.classList.add("hidden")
  viewSavedPage.classList.add("hidden")
  homeBtn.classList.add("hidden")
  randomBtn.classList.remove("hidden")
  saveCoverBtn.classList.remove("hidden")
  viewSaveBtn.classList.remove("hidden")

}

function makeBook(){
  event.preventDefault()
  covers.push(coverInput.value)
  titles.push(titleInput.value)
  descriptors.push(tagInput1.value, tagInput2.value)
  goHome()
  coverPic.src = coverInput.value
  coverTitle.innerText = titleInput.value
  coverTagLine.innerText = `A tale of ${tagInput1.value} and ${tagInput2.value}`
  currentCover = new Cover(coverInput.value, titleInput.value, tagInput1.value, tagInput2.value)
}

function addToSaved() {
  if (!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover)}
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
