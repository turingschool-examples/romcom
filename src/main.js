// Create variables targetting the relevant DOM elements here 👇
var randomButton = document.querySelector(".random-cover-button");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var makeCoverButton = document.querySelector(".make-new-button");
var homeCover = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSaveButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');
var makeBookButton = document.querySelector('.create-new-book-button');

var coverInput = document.querySelector('.user-cover')
var titleInput = document.querySelector('.user-title')
var desc1Input = document.querySelector('.user-desc1')
var desc2Input = document.querySelector('.user-desc2')
// We've provided a few variables below
//var savedCovers = [
  //new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
//];
//var randomCover = new Cover(covers[coversIndex], titles[titlesIndex], descriptors[descriptorsIndex], descriptors[descriptorsIndex]);
function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}

randomButton.addEventListener("click", createRandomCover)

function createRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}
createRandomCover();


// Add your event listeners here 👇

makeCoverButton.addEventListener('click', showForm)

function showForm() {
  homeCover.classList.add('hidden')
  form.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  makeBookButton.disabled = true

}

document.addEventListener('keyup', enableMakeBookButton)

function enableMakeBookButton() {
  if(coverInput.value && titleInput.value && desc1Input.value && desc2Input.value) {
    makeBookButton.disabled = false
  }
}


viewSaveButton.addEventListener('click', showSavedCovers)

function showSavedCovers() {
  homeCover.classList.add('hidden')
  form.classList.add('hidden')
  savedView.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}

homeButton.addEventListener('click', goHome)

function goHome() {
  homeCover.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}

//queryselect make my book button
//make eventlistener for make my book button
//create a function
  //get input from each of the form fields
  //change our imagecover.src
  //change our innerText taglines and titles.
  //disable make my book button until form is filled homeButton
//then hide homeview, so that new book will show
//hide formview too.

// add listener for makemybookbutton
//input.value of all 4 lines are entered, push that info into respective arrays
// take those values and create a new instance of a cover
//in eventlistener, show homeview and hide form view
//display new instance of cover.

makeBookButton.addEventListener('click', makeNewBook, saveNewBookData)

function saveNewBookData() {
  event.preventDefault()
  covers.push(coverInput.value)
  titles.push(titleInput.value)
  descriptors.push(desc1Input.value)
  descriptors.push(desc2Input.value)
}
function makeNewBook() {
  event.preventDefault()
  var newBook = new Cover(coverInput.value, titleInput.value, desc1Input.value, desc2Input.value)
  goHome()
  form.classList.add('hidden')
  coverImage.src = newBook.cover
  coverTitle.innerText = newBook.title
  tagline1.innerText = newBook.tagline1
  tagline2.innerText = newBook.tagline2
}


//add comment to test commit
//? will this randomizer function work if I insert the variable covers from data.js
//need access the make cover button .querySelector
//need to access the form
//create event listener for the make cover button
//when event listener is clicked, change to form



// Create your event handlers and other functions here 👇


// We've provided one function to get you started
