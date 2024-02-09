// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTag1 = document.querySelector('.tagline-1')
var coverTag2 = document.querySelector('.tagline-2')
var randCoverButton = document.querySelector('.random-cover-button')
var makeCoverButton = document.querySelector('.make-new-button')
var viewSavedCovers = document.querySelector('.view-saved-button')
var homeButton = document.querySelector('.home-button')
var saveCoversButton = document.querySelector('.saved-cover-button')
var coverUrl = document.querySelector('.user-cover')
var titleInputBox = document.querySelector('.user-title')
var descriptorInputBox1 = document.querySelector('.user-desc1')
var descriptorInputBox2 = document.querySelector('.user-desc2')
var formView = document.querySelector('.form-view');
var newBookButton = document.querySelector('.create-new-book-button')

// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', getRandomNovel);
randCoverButton.addEventListener('click', getRandomNovel);
makeCoverButton.addEventListener('click', makeCover)
viewSavedCovers.addEventListener('click', showSavedCovers)
homeButton.addEventListener('click', goHome)
newBookButton.addEventListener('click',makeANovel)

// Create your event handlers and other functions here 👇
function makeCover(){
  document.querySelector('.form-view').classList.remove('hidden')
  document.querySelector('.home-view').classList.add('hidden')
  document.querySelector('.random-cover-button').classList.add('hidden')
  document.querySelector('.save-cover-button').classList.add('hidden')
  document.querySelector('.home-button').classList.remove('hidden')
  document.querySelector('.make-new-button').classList.remove('hidden')
  document.querySelector('.view-saved-button').classList.remove('hidden')
}

function showSavedCovers() {
  document.querySelector('.saved-view').classList.remove('hidden')
  document.querySelector('.random-cover-button').classList.add('hidden')
  document.querySelector('.home-button').classList.remove('hidden')
  document.querySelector('.home-view').classList.add('hidden')
  document.querySelector('.save-cover-button').classList.add('hidden')
  document.querySelector('.view-saved-button').classList.remove('hidden')
  document.querySelector('.form-view').classList.add('hidden')
}

function goHome() {
  document.querySelector('.home-view').classList.remove('hidden')
  document.querySelector('.form-view').classList.add('hidden')
  document.querySelector('.home-button').classList.add('hidden')
  document.querySelector('.save-cover-button').classList.remove('hidden')
  document.querySelector('.random-cover-button').classList.remove('hidden')
  document.querySelector('.view-saved-button').classList.remove('hidden')
  document.querySelector('.make-new-button').classList.remove('hidden')
}
function changeFormView() {
  document.querySelector('.form-view').classList.toggle('hidden');
  document.querySelector('.home-view').classList.toggle('hidden');
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



function getRandomNovel() {
  var randomCoverIndex = getRandomIndex(covers);
  var randomTitleIndex = getRandomIndex(titles);
  var randomDescriptorIndex = getRandomIndex(descriptors);
  var randomDescriptorIndex2 = getRandomIndex(descriptors);

  var newNovel = createCover(
    covers[randomCoverIndex],
    titles[randomTitleIndex],
    descriptors[randomDescriptorIndex],
    descriptors[randomDescriptorIndex2]
  );

  currentCover = newNovel;

  coverTitle.innerText = newNovel.title;
  coverTag1.innerText = newNovel.tagline1;
  coverTag2.innerText = newNovel.tagline2;
  coverImage.setAttribute("src", newNovel.coverImg);

  return currentCover;
}

function makeANovel (event){
  if (event) event.preventDefault()
  var userNovelDesign = createCover(coverUrl, title, descriptor1, descriptor2);
    coverImage.setAttribute('src', userNovelDesign.coverImg.value);
    coverTitle.innerText = userNovelDesign.title.value;
    coverTag1.innerText = userNovelDesign.tagline1.value;
    coverTag2.innerText = userNovelDesign.tagline2.value;
    covers.push(userNovelDesign.coverImg);
    titles.push(userNovelDesign.title);
    descriptors.push([userNovelDesign.tagline1, userNovelDesign.tagline2]);
    changeFormView()
}

