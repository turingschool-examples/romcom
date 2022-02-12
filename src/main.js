// Create variables targetting the relevant DOM elements here 👇
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var homeButton = document.querySelector('.home-button');
var makeNewButton = document.querySelector('.make-new-button');
var makeNewBookButton = document.querySelector('.create-new-book-button');
var saveCover = document.querySelector('.save-cover-button');
var savedCoversButton = document.querySelector('.view-saved-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
  "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
window.addEventListener("load", displayNewCover);
randomButton.addEventListener("click", displayNewCover);
makeNewButton.addEventListener('click', toggleMakeOwn);
homeButton.addEventListener('click', toggleHomeButton);
savedCoversButton.addEventListener('click', clickViewSave);
saveCover.addEventListener('click', saveCurrentCover);
makeNewBookButton.addEventListener('click', function() {
  event.preventDefault();
  makeNewBook();
  toggleHomeButton();
  displayNewCover(currentCover);
});

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayNewCover(newCover) {
  bookCover.src = newCover.cover || covers[getRandomIndex(covers)];
  bookTitle.innerText = newCover.title || titles[getRandomIndex(titles)];
  firstDescriptor.innerText = newCover.tagline1 || descriptors[getRandomIndex(descriptors)];
  secondDescriptor.innerText = newCover.tagline2 || descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(bookCover.src, bookTitle.innerText, firstDescriptor.innerText, secondDescriptor.innerText);
  }
  function removeHomeView() {
    document.querySelector('.home-view').classList.add('hidden');
  };
  function addHomeView() {
    document.querySelector('.home-view').classList.remove('hidden');
  };
  function removeHomeButton() {
    document.querySelector('.home-button').classList.add('hidden');
  };
  function addHomeButton() {
    document.querySelector('.home-button').classList.remove('hidden');
  };
  function removeRandomCover() {
    document.querySelector('.random-cover-button').classList.add('hidden');
  };
  function addRandomCover() {
    document.querySelector('.random-cover-button').classList.remove('hidden');
  };
  function removeSaveCover() {
    document.querySelector('.save-cover-button').classList.add('hidden');
  };
  function addSaveCover() {
    document.querySelector('.save-cover-button').classList.remove('hidden');
  };
  function removeFormView() {
    document.querySelector('.form-view').classList.add('hidden');
  };
  function addFormView() {
    document.querySelector('.form-view').classList.remove('hidden');
  };
  function removeSavedView() {
    document.querySelector('.saved-view').classList.add('hidden');
  };
  function addSavedView() {
    document.querySelector('.saved-view').classList.remove('hidden');
  };

  function toggleMakeOwn() {
    // document.querySelector('.home-view').classList.add('hidden');
    // document.querySelector('.random-cover-button').classList.add('hidden');
    // document.querySelector('.save-cover-button').classList.add('hidden');
    // document.querySelector('.form-view').classList.remove('hidden');
    // document.querySelector('.home-button').classList.remove('hidden');
    // document.querySelector('.saved-view').classList.add('hidden');
    removeHomeView();
    removeRandomCover();
    removeSaveCover();
    addFormView();
    addHomeButton();
    removeSavedView();
  }

  function toggleSavedCovers() {
    // document.querySelector('.form-view').classList.add('hidden');
    // document.querySelector('.home-view').classList.add('hidden');
    // document.querySelector('.random-cover-button').classList.add('hidden');
    // document.querySelector('.save-cover-button').classList.add('hidden');
    // document.querySelector('.home-button').classList.remove('hidden');
    // document.querySelector('.saved-view').classList.remove('hidden');
    removeHomeView();
    removeRandomCover();
    removeSaveCover();
    addHomeButton();
    removeFormView();
    addSavedView();
  }

  function toggleHomeButton() {
    // document.querySelector('.home-view').classList.remove('hidden');
    // document.querySelector('.form-view').classList.add('hidden');
    // document.querySelector('.saved-view').classList.add('hidden');
    // document.querySelector('.random-cover-button').classList.remove('hidden');
    // document.querySelector('.home-button').classList.add('hidden');
    // document.querySelector('.save-cover-button').classList.remove('hidden');
    removeSavedView();
    removeFormView();
    addRandomCover();
    addHomeView();
    removeHomeButton();
    addSaveCover();
  }

  function makeNewBook() {
    var coverInput = document.querySelector('.user-cover').value;
    var titleInput = document.querySelector('.user-title').value;
    var userDescriptor1 = document.querySelector('.user-desc1').value;
    var userDescriptor2 = document.querySelector('.user-desc2').value;
    addToArrays(coverInput, titleInput, userDescriptor1, userDescriptor2);
  }

  function addToArrays(coverInput, titleInput, userDescriptor1, userDescriptor2) {
    covers.unshift(coverInput);
    titles.unshift(titleInput);
    descriptors.unshift(userDescriptor1);
    descriptors.unshift(userDescriptor2);
    currentCover = new Cover(covers[0], titles[0], descriptors[1], descriptors[0]);
  }

  function clickViewSave() {
    toggleSavedCovers();
    displaySavedCovers();
  }

  function saveCurrentCover() {
    if(!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
    }
  }

  function displaySavedCovers() {
    var display = "";
    for(var i = 0; i < savedCovers.length; i++) {
      display +=
      `<section id='${savedCovers[i].id}' class='mini-cover' ondblclick='deleteCover(this.id)'> <img class='cover-image' src=${savedCovers[i].cover}>
      <h2 class='cover-title'>${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png"></section>`;
    }; savedCoversSection.innerHTML = display;
  }

  function deleteCover(id) {
    for(i=0; i <= savedCovers.length; i++) {
      if (savedCovers[i].id == id) {
        savedCovers.splice(i, 1);
        displaySavedCovers();
      }
    }
  };
