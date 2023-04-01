

// Create variables targetting the relevant DOM elements here 👇
// ** Button Vars** //

var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
var goHomeButton = document.querySelector(".home-button");
var createBookButton = document.querySelector(".create-new-book-button")
// ** Page vars ** //

var viewForm = document.querySelector(".form-view");
var viewHome = document.querySelector(".home-view");
var viewSaved = document.querySelector(".saved-view");
var savedCoversSection = document.querySelector(".saved-covers-section");

// ** Cover Vars ** //
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// ** Form Vars ** //
var userCover = document.querySelector('#cover')
var userTitle = document.querySelector('.user-title')
var userDescriptor1 = document.querySelector('.user-desc1')
var userDescriptor2 = document.querySelector('.user-desc2')

// ** We've provided a few variables below ** //
// ** Prospective vars ** //
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
// ** Event Listeners ** //
onload = newRandomCover

randomCoverButton.onclick = newRandomCover;
saveCoverButton.onclick = saveNewCover;
viewSavedButton.onclick = viewSavedCovers;
makeNewButton.onclick = makeNewBook;
goHomeButton.onclick = goHome;
createBookButton.onclick = createCustomBook;


// Create your event handlers and other functions here 👇
function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    cover: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

function newRandomCover() {
  currentCover = createCover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)],
  )
  displayCover()
}

function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2
}
// Hide and Show functions //

function hide(element) {
  element.classList.add("hidden")
}

function show(element) {
  element.classList.remove("hidden")
}


// ** Button functions for navigating site ** //
function makeNewBook(){
  show(makeNewButton);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  show(viewForm);
  hide(viewHome);
  hide(savedCoversSection)
};

function viewSavedCovers(){
  show(makeNewButton);
  hide(randomCoverButton);
  hide(saveCoverButton);
  show(goHomeButton);
  show(viewSavedButton);
  show(viewSaved);
  hide(viewForm);
  hide(viewHome);
};

function goHome(){
  show(makeNewButton);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(goHomeButton);
  show(viewSavedButton);
  hide(viewSaved);
  hide(viewForm);
  show(viewHome);
};



//*** Randomizer of array retrieval function ***//
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// ** Iteration 2 ** //
function createCustomBook() {
  event.preventDefault()
  currentCover = createCover(
  userCover.value,
  userTitle.value,
  userDescriptor1.value,
  userDescriptor2.value,
  );
  
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1, currentCover.tagline2);

  goHome();
  clearInputs();
  displayCover();
}

function clearInputs() {
  userCover.value = "";
  userTitle.value = "";
  userDescriptor1.value = "";
  userDescriptor2.value = "";
}



//** Iteration 3 **//

function saveNewCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    }
    displaySavedCovers();
  }

function displaySavedCovers() {
  savedCoversSection.innerHTML = '';

  for (i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
    `
    <section class ="mini-cover" id="${savedCovers[i].id}">
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>
    `
  }
}

//** Iteration 4 **//
// Will need to reference ID on dblclick 
// to see where the dblclick is happening
// loop through savedCovers array to splice that index from array.
// savedCovers.splice(ID, 1)

savedCoversSection.ondblclick = function(event) {
  deleteCover(event)
};

function deleteCover(event) {
  for (i = 0; i < savedCovers.length; i++) {
    if(event.target.closest('section').id === savedCovers[i].id.toString()){
      savedCovers.splice(i, 1);
    console.log(savedCovers)
    }
  }
  displaySavedCovers()
}