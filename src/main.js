var currentCover
var title = document.querySelector(".cover-title");
var cover = document.querySelector(".cover-image");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeYourOwnCover = document.querySelector(".make-new-button");
var viewForm = document.querySelector(".form-view");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var viewSaved = document.querySelector(".view-saved-button");
var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var savedCoverSection = document.querySelector(".saved-covers-section");
var newBookButton = document.querySelector(".create-new-book-button");
var savedCovers = [];

window.addEventListener("load", createBook);
randomCoverButton.addEventListener("click", createBook);
makeYourOwnCover.addEventListener("click", createForm);
viewSaved.addEventListener("click", displaySavedCovers);
homeButton.addEventListener("click", returnHome);
newBookButton.addEventListener('click', makeMyBook)
saveCoverButton.addEventListener('click', saveCover)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createBook() {
  title.innerText = titles[getRandomIndex(titles)];
  cover.src = covers[getRandomIndex(covers)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(cover.src, title.innerText, tagline1.innerText, tagline2.innerText);
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
  viewForm.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedView.classList.remove("hidden");
  // displaySavedCovers()
}

function returnHome() {
  homeView.classList.remove("hidden");
  saveCoverButton.classList.remove('hidden');
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
  tagline1.innerText = descriptor1Input;
  tagline2.innerText = descriptor2Input;
  savedCovers.push = new Cover(coverInput, titleInput, descriptor1Input, descriptor2Input)
  returnHome();
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
}

}  
function displaySavedCovers() {
  viewSavedCovers()
  var smallCover = ''
  savedCoverSection.innerHTML = ''
  for (var i = 0; i < savedCovers.length; i++) {
    smallCover = `
      <section class="main-cover"id=${savedCovers[i].id}>
      <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
        <img class="cover-image" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      </section>
    `
    savedCoverSection.innerHTML += smallCover
  }

  }


  


// 





