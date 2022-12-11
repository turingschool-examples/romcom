var currentCover = createBook()
var title = document.querySelector(".cover-title");
var cover = document.querySelector(".cover-image");
var taglineOne = document.querySelector(".tagline-1");
var taglineTwo = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeYourOwnCover = document.querySelector(".make-new-button");
var viewForm = document.querySelector(".form-view");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var viewSaved = document.querySelector(".view-saved-button");
var homeButton = document.querySelector(".home-button");
var saveCoversButton = document.querySelector(".save-cover-button");
var savedCoverSection = document.querySelector(".saved-covers-section");
var newBookButton = document.querySelector(".create-new-book-button");
var savedCovers = [
  new Cover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];

window.addEventListener("load", createBook);
randomCoverButton.addEventListener("click", createBook);
makeYourOwnCover.addEventListener("click", createForm);
viewSaved.addEventListener("click", viewSavedCovers);
homeButton.addEventListener("click", returnHome);
newBookButton.addEventListener('click', makeMyBook)
saveCoverButton.addEventListener('click', saveCover)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createBook() {
  title.innerText = titles[getRandomIndex(titles)];
  cover.src = covers[getRandomIndex(covers)];
  taglineOne.innerText = descriptors[getRandomIndex(descriptors)];
  taglineTwo.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText);
}

function createForm() {
  viewForm.classList.remove("hidden");
  homeView.classList.add("hidden");
  savedView.classList.add("hidden");
  viewSaved.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  savedCoverSection.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoversButton.classList.add("hidden");
}

function viewSavedCovers() {
  homeView.classList.add("hidden");
  homeButton.classList.remove("hidden");
  viewForm.classList.add("hidden");
  savedView.classList.remove("hidden");
}

function returnHome() {
  homeView.classList.remove("hidden");
  saveCoversButton.classList.remove('hidden');
  randomCoverButton.classList.remove("hidden");
  viewForm.classList.add("hidden");
  homeButton.classList.add("hidden");
  savedView.classList.remove("hidden");
}

function makeMyBook(event) {
  event.preventDefault();
  var coverInput = document.getElementById('cover').value;
  var titleInput = document.getElementById('title').value;
  var descriptor1Input = document.getElementById('descriptor1').value;
  var descriptor2Input = document.getElementById('descriptor2').value;
  covers.unshift(coverInput);
  titles.unshift(titleInput);
  descriptors.unshift(descriptor1Input); 
  descriptors.unshift(descriptor2Input);
  title.innerText = titleInput;
  cover.src = coverInput;
  taglineOne.innerText = descriptor1Input;
  taglineTwo.innerText = descriptor2Input;
  savedCovers.push = new Cover(coverInput, titleInput, descriptor1Input, descriptor2Input)
  returnHome();
}

function saveCover() {
  savedCovers.push(currentCover)
}












