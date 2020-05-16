// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine = document.querySelector('.tagline')
var tagLineOne = document.querySelector('.tagline-1')
var tagLineTwo = document.querySelector('.tagline-2')
var randomizeButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var makeOwnCover = document.querySelector('.make-new-button')
var formSection = document.querySelector('.form-view')
var homeSection = document.querySelector('.home-view')
var savedSection = document.querySelector('.saved-view')
var hidden = document.querySelector('.hidden')
var makeNewCover = document.querySelector('.create-new-book-button')
var userCoverInput = document.querySelector('.user-cover')
var userTitleInput = document.querySelector('.user-title')
var userDesc1 = document.querySelector('.user-desc1')
var userDesc2 = document.querySelector('.user-desc2')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover)
randomizeButton.addEventListener('click', randomizeImageButton)
makeOwnCover.addEventListener('click', goToForm)
viewSavedButton.addEventListener('click', goToSaved)
homeButton.addEventListener('click', goToHome)
makeNewCover.addEventListener('click', makeFormCover)


// Create your event handlers and other functions here 👇
function createRandomCover() {
  currentCover = new Cover(
   randomizeImage(),
   randomizeTitle(),
   randomizeTag1(),
   randomizeTag2()
  )
  return currentCover
}

function makeFormCover () {
  makeNewCover.type = "button"
  showHomeSect();
  hideFormSect();
  pushInputs();
  displayInputs();
  makeUserCoverObj()
}

function displayInputs() {
  displayMyCover();
  displayMyTitle();
  displayMyDesc1();
  displayMyDesc2();
}

function pushInputs() {
  pushCoverArray();
  pushTitleArray();
  pushDesc1();
  pushDesc2();
}

function makeUserCoverObj() {
  currentCover = new Cover(
    displayMyCover(),
    displayMyTitle(),
    displayMyDesc1(),
    displayMyDesc2()
  )
  return currentCover
}


function goToForm() {
  showFormSect();
  showHomeButton();
  hideSavedSect();
  hideRandomizeButton();
  hideHomeSect();
  hideSaveCoverButton();
}

function goToSaved() {
  showSavedSect()
  hideFormSect();
  hideHomeSect();
  showHomeButton();
  hideRandomizeButton();
  hideSaveCoverButton();
}

function goToHome() {
  hideFormSect();
  hideSavedSect();
  showHomeSect();
  hideHomeButton();
  showRandomizeButton();
  showSavedButton();
}

function hideSaveCoverButton() {
  saveCoverButton.classList.add('hidden')
}

function showSavedSect() {
  savedSection.classList.remove('hidden')
}

function showSavedButton() {
  savedButton.classList.remove('hidden')
}

function showRandomizeButton() {
  randomizeButton.classList.remove('hidden')
}

function showHomeButton() {
  homeButton.classList.remove('hidden')
}

function hideHomeButton() {
  homeButton.classList.add('hidden')
}

function hideRandomizeButton() {
  randomizeButton.classList.add('hidden')
}

function hideHomeSect() {
  homeSection.classList.add('hidden')
}

function hideFormSect() {
  formSection.classList.add('hidden')
}

function showHomeSect() {
  homeSection.classList.remove('hidden')
}

function showFormSect() {
  formSection.classList.remove('hidden')
}

function hideSavedSect() {
  savedSection.classList.add('hidden')
}

function displayMyCover() {
  coverImage.src = userCoverInput.value
}

function displayMyTitle() {
  coverTitle.innerText = userTitleInput.value
}

function displayMyDesc1() {
  tagLineOne.innerText = userDesc1.value
}

function displayMyDesc2() {
  tagLineTwo.innerText = userDesc2.value
}

function randomizeImage() {
  coverImage.src = covers[getRandomIndex(covers)]
  return coverImage.src
}

function randomizeTitle() {
  coverTitle.innerText = titles[getRandomIndex(titles)]
  return coverTitle.innerText
}

function randomizeTag1() {
  tagLineOne.innerText = descriptors[getRandomIndex(descriptors)]
  return tagLineOne.innerText
}

function randomizeTag2() {
  tagLineTwo.innerText = descriptors[getRandomIndex(descriptors)]
  return tagLineTwo.innerText
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizeImageButton() {
createRandomCover()
//coverImage.src = newCover.cover;
}

function pushCoverArray() {
  covers.push(userCoverInput.value)
  console.log(covers)
}

function pushTitleArray() {
  titles.push(userTitleInput.value)
}

function pushDesc1() {
  descriptors.push(userDesc1.value)
}

function pushDesc2() {
  descriptors.push(userDesc2.value)
}


//ITERATION 3
//when a user clicks the make my book button,
////these things will happen:
////the cover input will push the value into the covers array
////the title input will push the value into the titles array
////the first descriptor and second descriptor will push into the descriptors array (this will be two functions)
//these values will be used to reassign currentCover using our Cover class constructor;
//then we can this variable will be displayed on the home page
// the makeMyCover button will also hide the form Section and show the home Section

/* when a user clicks on a show new random cover button, we want the screen
to give us a new title, a now image, and new taglines.
In order to do this, we need to use functions.
The hint was to maybe change the currentCover variable?
how can we use the currentCover variable in our current setup?
*/
