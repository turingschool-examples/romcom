// Create variables targetting the relevant DOM elements here 👇

// iteration 0 variables

var mainCover = document.querySelector('.main-cover');
var coverImage = document.querySelector('.cover-image');
var imageTitle = document.querySelector('.poster-title');
var coverTitle = document.querySelector('.cover-title');
var tag1 = document.querySelector('.tagline-1');
var tag2 = document.querySelector('.tagline-2');

//iteration 1 variables 

var coverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');

var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');

//iteration 2 variables 

var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var descriptor1Input = document.querySelector('.user-desc1');
var descriptor2Input = document.querySelector('.user-desc2');
var makeMyBookButton = document.querySelector('.create-new-book-button');



// We've provided a few variables below
var savedCovers = [];
  
var currentCover;

// Add your event listeners here 👇

//iteration 0 event listener

coverButton.addEventListener('click', createRandomCover);

// iteration 1 event listeners

makeNewButton.addEventListener('click', reactMakeNew);
homeButton.addEventListener('click', reactHomeButton);


//iteration 2 event listeners

makeMyBookButton.addEventListener('click', createNewBook);

// iteration 3 event listeners

saveCoverButton.addEventListener('click', saveCurrentCover);
viewSavedButton.addEventListener('click', viewSavedCovers);

// iteration 4 event listeners in iteration 3 function 

// Create your event handlers and other functions here 👇

// iteration 0 functions

function createRandomCover() {
  var randomCoverIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var randomTags1Index = getRandomIndex(descriptors);
  var randomTags2Index = getRandomIndex(descriptors);
  
  var chosenRandomCoverPath = covers[randomCoverIndex];
  var chosenRandomTitle = titles[randomTitleIndex];
  var chosenRandomTag1 = descriptors[randomTags1Index];
  var chosenRandomTag2 = descriptors[randomTags2Index];

  coverImage.src = chosenRandomCoverPath;
  coverTitle.innerText = chosenRandomTitle;
  tag1.innerText = chosenRandomTag1;
  tag2.innerText = chosenRandomTag2;

  currentCover = createCover(chosenRandomCoverPath, chosenRandomTitle, chosenRandomTag1, chosenRandomTag2);
}

//iteration 1 functions 

function reactMakeNew(){
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  coverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function reactHomeButton(){
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  coverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
  savedView.classList.add('hidden');
}


//iteration 2 functions 

function createNewBook(event) {
  coverImage.src = coverInput.value;
  coverTitle.innerText = titleInput.value;
  tag1.innerText = descriptor1Input.value;
  tag2.innerText = descriptor2Input.value;

  currentCover = createCover(coverInput.value, titleInput.value, descriptor1Input.value, descriptor2Input.value);
  
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptor1Input.value, descriptor2Input.value);
  
  reactHomeButton();
  event.preventDefault();
}

//iteration 3 functions 

function viewSavedCovers(){
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  coverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
  savedView.classList.remove('hidden');

  savedView.innerHTML = '';

  for (var i = 0; i < savedCovers.length; i++) {
    var cover = savedCovers[i];
    var coverElement = document.createElement('div');
    coverElement.classList.add('mini-cover');
    
    var img = document.createElement('img');
    img.classList.add('mini-cover');
    img.src = cover.coverImg; 
    img.addEventListener('dblclick', function () { 
      deleteSavedCover(cover.id) 
    });
    coverElement.appendChild(img);
    
    var title = document.createElement('h2');
    title.classList.add('cover-title');
    title.innerText = cover.title;
    coverElement.appendChild(title);
    
    var tagline = document.createElement('h3');
    tagline.classList.add('tagline');
    tagline.innerText = `A tale of ${cover.tagline1} and ${cover.tagline2}`;
    coverElement.appendChild(tagline);
    
    var tagline1 = document.createElement('h3');
    tagline1.classList.add('tagline-1');
    tagline1.innerText = cover.tagline1;
   
    var tagline2 = document.createElement('h3');
    tagline2.classList.add('tagline-2');
    tagline2.innerText = cover.tagline2;

    savedView.appendChild(coverElement);
  }
}

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

// iteration 4 functions

function deleteSavedCover(coverId) {
    var coverToDelete = savedCovers.findIndex(function (cover) {
      return cover.id === coverId
    });
    if (coverToDelete !== -1) {
      savedCovers.splice(coverToDelete, 1);
      viewSavedCovers();
    }
  }

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

