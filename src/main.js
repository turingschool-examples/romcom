// Create variables targetting the relevant DOM elements here 👇
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var savedCoversSection = document.querySelector('.saved-covers-section');
var userForm = document.querySelector('form');
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userTaglineOne = document.querySelector('.user-desc1');
var userTaglineTwo = document.querySelector('.user-desc2');
var userSubmitButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', newRandomCover);
randomCoverButton.addEventListener('click', newRandomCover);
makeNewButton.addEventListener('click', toggleFormView);
viewSavedButton.addEventListener('click', toggleSavedView);
homeButton.addEventListener('click', toggleHomeView);
userSubmitButton.addEventListener('click', newUserCover);
saveCoverButton.addEventListener('click', saveCurrentCover);
savedCoversSection.addEventListener('dblclick', deleteSavedCover);

// Create your event handlers and other functions here 👇
function newRandomCover() {
	currentCover = new Cover(covers[getRandomIndex(covers)], 
	titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
	displayCover(currentCover);
}

function newUserCover(event) {
  event.preventDefault();
  if (!userCover.value || !userTitle.value || !userTaglineOne.value || !userTaglineTwo.value) {
    alert("Please fill out all of the input fields, otherwise we can't show you a steamy novel!");
  } else {
    currentCover = new Cover(userCover.value, userTitle.value, userTaglineOne.value, userTaglineTwo.value);
    displayCover(currentCover);
    storeUserSubmission();
    toggleHomeView();
    userForm.reset();
  }
}

function displayCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}

function show(element) {
	element.classList.remove('hidden')
}

function hide(element) {
	element.classList.add('hidden')
}

function toggleFormView() {
	show(formView)
	show(homeButton)
	hide(homeView)
	hide(savedView)
	hide(saveCoverButton)
	hide(randomCoverButton)
}

function toggleSavedView() {
	show(savedView)
	show(homeButton)
	hide(homeView)
	hide(formView)
	hide(randomCoverButton)
	hide(saveCoverButton)
  displaySavedCovers();
}

function toggleHomeView() {
	show(homeView)
	show(randomCoverButton)
	show(saveCoverButton)
	hide(formView)
	hide(savedView)
	hide(homeButton)
}

function storeUserSubmission() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userTaglineOne.value);
  descriptors.push(userTaglineTwo.value);
}

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function displaySavedCovers() {
	savedCoversSection.innerHTML = ``;
	savedCovers.forEach((item, i) => {
		savedCoversSection.innerHTML += `
    <section class="mini-cover">
      <img class="cover-image" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h2>
    </section>`
	});
}

function deleteSavedCover(event) {
	savedCovers.forEach((item, i) => {
		if (event.target.id === `${savedCovers[i].id}`) {
			savedCovers.splice(i, 1);
		}
		displaySavedCovers();
  })
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
