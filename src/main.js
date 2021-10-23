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

var savedCovers = []

saveCoverButton.addEventListener('click', saveCover)

function saveCover() {
  var homeViewBook = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
}
//create savedCovers array
//event listener for Save cover homeButton
//function organize the home view elements into a class
//pushes the class to the saved covers array
//add if statement to function that checks if instance is included in array
//add display covers in the view saved covers covers event listener
