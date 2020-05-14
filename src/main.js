// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagLine = document.querySelector('.tagline')
var tagLineOne = document.querySelector('.tagline-1')
var tagLineTwo = document.querySelector('.tagline-2')
var randomizeButton = document.querySelector('.random-cover-button')
var savedCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var makeOwnCover = document.querySelector('.make-new-button')
var formSection = document.querySelector('.form-view')
var homeSection = document.querySelector('.home-view')
var savedSection = document.querySelector('.saved-view')
var hidden = document.querySelector('.hidden')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover)
randomizeButton.addEventListener('click', randomizeImageButton)
makeOwnCover.addEventListener('click', goToForm)



// Create your event handlers and other functions here 👇
function createRandomCover(){
  currentCover = new Cover(
   randomizeImage(),
   randomizeTitle(),
   randomizeTag1(),
   randomizeTag2()
  )
  return currentCover
}

function goToForm() {
  formSection.classList.remove('hidden')
  homeSection.classList.add('hidden')
  randomizeButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedCoverButton.classList.add('hidden')

  // once function is called,
  // get the hidden class, and remove it from form-view
  // then ADD hidden to home-view
  // locate random-cover-button, remove that button
  //  // we do this by 
  // locate save cover button, remove it 
  // add a home button/create home button variable
}

function randomizeImage() {
  coverImage.src = covers[getRandomIndex(covers)]
}

function randomizeTitle() {
  coverTitle.innerText = titles[getRandomIndex(titles)]
}

function randomizeTag1() {
  //var tag1 = descriptors[getRandomIndex(descriptors)]
  tagLineOne.innerText = descriptors[getRandomIndex(descriptors)]
}

function randomizeTag2() {
  //var tag2 = descriptors[getRandomIndex(descriptors)]
  tagLineTwo.innerText = descriptors[getRandomIndex(descriptors)]
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizeImageButton(){
createRandomCover()
//coverImage.src = newCover.cover;
}


/* when a user clicks on a show new random cover button, we want the screen
to give us a new title, a now image, and new taglines.
In order to do this, we need to use functions.
The hint was to maybe change the currentCover variable?
how can we use the currentCover variable in our current setup?
*/
