// Create variables targeting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");
var showRandomButton = document.querySelector(".random-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeOwnCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var homePage = document.querySelector(".home-view");
var newCoverForm = document.querySelector(".form-view");
var saveCoverForm = document.querySelector(".saved-view");
var makeMyBookButton = document.querySelector(".create-new-book-button");
var userCoverInputBox = document.querySelector("#cover");
var userTitleInputBox = document.querySelector("#title");
var descriptor1InputBox = document.querySelector("#descriptor1");
var descriptor2InputBox = document.querySelector("#descriptor2");
var savedCoversGrid = document.querySelector(".saved-covers-section");

//*********************** COVER DOM ELEMENTS ***********************




// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇

window.addEventListener("load", pageLoadCover);
showRandomButton.addEventListener("click", pageLoadCover);
makeOwnCoverButton.addEventListener("click", makeNewForm);
viewSavedButton.addEventListener("click", loadSavedPage);
homeButton.addEventListener("click", loadHomePage);
makeMyBookButton.addEventListener("click", makeMyBook);
saveCoverButton.addEventListener("click", saveCurrentCover);
savedCoversGrid.addEventListener("dblclick", deleteSavedCover);


// Create your event handlers and other functions here 👇

function logDblClick(){
  console.log('CLICKED!!!!');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function random() {
  var cover = covers[getRandomIndex(covers)];
  var title = titles[getRandomIndex(titles)];
  var tagline1 = descriptors[getRandomIndex(descriptors)];
  var tagline2 = descriptors[getRandomIndex(descriptors)];
  return [cover, title, tagline1, tagline2];
};

function displayCover(bookCover1) {
  coverImage.src = bookCover1.cover;
  coverTitle.innerText = bookCover1.title;
  tagLine1.innerText = bookCover1.tagline1;
  tagLine2.innerText = bookCover1.tagline2;
};

function createCover(coverImg, title, desc1, desc2){
  return new Cover(coverImg, title, desc1, desc2);
};

function pageLoadCover() {
  var randomInfo = random();
  var randomCover = createCover(randomInfo[0], randomInfo[1], randomInfo[2], randomInfo[3]);
  coverImage.src = randomCover.cover;
  coverTitle.innerText = randomCover.title;
  tagLine1.innerText = randomCover.tagline1;
  tagLine2.innerText = randomCover.tagline2;
  currentCover = randomCover;
}

function makeNewForm() {
  homePage.classList.add('hidden');
  newCoverForm.classList.remove('hidden');
  showRandomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden')
  saveCoverForm.classList.add("hidden")
}

function loadSavedPage() {
  homePage.classList.add('hidden');
  saveCoverForm.classList.remove('hidden');
  showRandomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden')
  newCoverForm.classList.add('hidden')
  displaySaved();
}

function loadHomePage() {
  homePage.classList.remove('hidden');
  saveCoverForm.classList.add('hidden');
  showRandomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  newCoverForm.classList.add('hidden')
}

function makeMyBook(e) {
  e.preventDefault()
  var userCover = new Cover(userCoverInputBox.value, userTitleInputBox.value, descriptor1InputBox.value, descriptor2InputBox.value);
  currentCover = userCover
  displayCover(userCover)
  pushToSavedCovers()
  loadHomePage()
}

function pushToSavedCovers() {
  covers.push(userCoverInputBox.value);
  titles.push(userTitleInputBox.value);
  descriptors.push(descriptor1InputBox.value);
  descriptors.push(descriptor2InputBox.value);
}

function saveCurrentCover(){
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
}

function displaySaved() {
  savedCoversGrid.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversGrid.innerHTML += `
      <section class="mini-cover" id="${savedCovers[i].id}">
        <img id="${savedCovers[i].id}" class="cover-image" src="${savedCovers[i].cover}">
        <h2 id="${savedCovers[i].id}" class="cover-title">${savedCovers[i].title}</h2>
        <h3 id="${savedCovers[i].id}" class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img id="${savedCovers[i].id}" class="price-tag" src="./assets/price.png">
        <img id="${savedCovers[i].id}" class="overlay" src="./assets/overlay.png">
      </section>`;
  }
}

function deleteSavedCover(event) {
  console.log(event.target.id)
  for(var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == event.target.id) {
      console.log('I am running!')
      savedCovers.splice(i, 1);
    }
  }
  displaySaved();
}