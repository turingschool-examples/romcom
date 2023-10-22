var coverImages = document.querySelector('.cover-image'); 
var coverTitle = document.querySelector('.cover-title'); 
var tagline1 = document.querySelector('.tagline-1'); 
var tagline2 = document.querySelector('.tagline-2'); 
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var goHomeButton = document.querySelector('.home-button');
var viewSavedCovers = document.querySelector('.saved-view')
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var userCoverInput = document.querySelector('.user-cover');
var userTitleInput = document.querySelector('.user-title');
var userDesc1Input = document.querySelector('.user-desc1');
var userDesc2Input = document.querySelector('.user-desc2');
var createNewBookButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [ 
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// // Add your event listeners here 👇

randomCoverButton.addEventListener('click', displayRandomCover);
makeOwnCoverButton.addEventListener('click', newPageForm); 
viewSavedCoversButton.addEventListener('click', savedCoversPage);
goHomeButton.addEventListener('click', goToHomePage);
createNewBookButton.addEventListener('click', createCustomCover);
saveCoverButton.addEventListener('click', saveCurrentCover);
viewSavedCoversButton.addEventListener('click', showSavedCovers);
savedCoversSection.addEventListener('dblclick', deleteSavedCover);

// // Create your event handlers and other functions here 👇
// // We've provided two functions to get you started
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

function newPageForm() {
  homeView.classList.add('hidden') 
  formView.classList.remove('hidden'); 
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  goHomeButton.classList.remove('hidden');
}

function goToHomePage() {
  homeView.classList.remove('hidden'); 
  formView.classList.add('hidden');
  viewSavedCovers.classList.add('hidden'); 
  goHomeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function savedCoversPage() { 
  homeView.classList.add('hidden');
  viewSavedCovers.classList.remove('hidden'); 
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  goHomeButton.classList.remove('hidden');

  renderSavedCovers(); 
}

function renderSavedCovers() { 
  savedCoversSection.innerHTML = ''; 
  for (let cover of savedCovers) { 
    savedCoversSection.innerHTML += ` 
      <div class="mini-cover" id="${cover.id}">
        <img class="cover-image" src="${cover.coverImg}">
        <h2 class="cover-title">${cover.title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
      </div>`;
  }
}

function createCustomCover(event) {
  event.preventDefault(); 
  var userCover = userCoverInput.value; 
  var userTitle = userTitleInput.value;
  var userDesc1 = userDesc1Input.value;
  var userDesc2 = userDesc2Input.value;

  covers.push(userCoverInput.value); 
  titles.push(userTitleInput.value);   
  descriptors.push(userDesc1Input.value, userDesc2Input.value); 

  var customCover = createCover(userCover, userTitle, userDesc1, userDesc2); 
  savedCovers.push(customCover); 
  displayCustomCover(customCover); 
  switchToHomeView(); 
  console.log(customCover);
}
function displayCustomCover(cover) { 
  coverImages.src = cover.coverImg; 
  coverTitle.innerText = cover.title; 
  tagline1.innerText = cover.tagline1;
  tagline2.innerText = cover.tagline2;
}
function switchToHomeView() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  goHomeButton.classList.add('hidden');
}

function saveCurrentCover() { 
  var isDuplicate = false;
  for (let i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id === currentCover.id) {
          isDuplicate = true;
          break;
      }
  }
  if (!isDuplicate) { 
      savedCovers.push(currentCover);
  }
}
function showSavedCovers() {
  renderSavedCovers(); 
  savedCoversSection.classList.remove('view'); 
}
function displayRandomCover() { 
  var randomCoverImage = covers[getRandomIndex(covers)]; 
  var randomTitle = titles[getRandomIndex(titles)]; 
  var randomTagline1 = descriptors[getRandomIndex(descriptors)]; 
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];
  coverImages.src = randomCoverImage;
  coverTitle.innerText = randomTitle;
  tagline1.innerText = randomTagline1;
  tagline2.innerText = randomTagline2;
  currentCover = createCover(randomCoverImage, randomTitle, randomTagline1, randomTagline2);
}

function deleteSavedCover(event) {
  let clickedCover = event.target.closest('.mini-cover'); 
  if (clickedCover) {
      let coverId = parseInt(clickedCover.id); 
      savedCovers = savedCovers.filter(cover => cover.id !== coverId); 
      clickedCover.remove(); 
  }
}

