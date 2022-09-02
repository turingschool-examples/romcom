// Create variables targetting the relevant DOM elements here 👇

//The variables for iteration 0
var randomCoverButton = document.querySelector('.random-cover-button');
var coverTitle = document.querySelector('.cover-title');
var imageCover = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var makeNewButton = document.querySelector('.make-new-button');
var makeMyBookFormButton = document.querySelector('.create-new-book-button')

//The variables for iteration 1
var homeButton = document.querySelector('.home-button');
var form = document.querySelector('.form-view');
var homeSection = document.querySelector('.home-view');
var saveButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button')
var savedCoversSection = document.querySelector('.saved-view');

//The variables for iteration 2
var coverInput = document.querySelector('.user-cover'); 
var titleInput = document.querySelector('.user-title');
var firstDescriptorInput = document.querySelector('.user-desc1');
var secondDescriptorInput = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// var currentCover;
// imageCover.src = covers[getRandomIndex(covers)];
// coverTitle.innerText = titles[getRandomIndex(titles)];
// tagline1.innerText = descriptors[getRandomIndex(descriptors)];
// tagline2.innerText = descriptors[getRandomIndex(descriptors)];


// Add your event listeners here 👇
randomCoverButton.addEventListener('click', getRandomCover);
makeNewButton.addEventListener('click', switchToMakeYourOwnCover);
viewSavedCoversButton.addEventListener('click', switchToSavedCovers);
homeButton.addEventListener('click', returnToHome);
makeMyBookFormButton.addEventListener('click', createNewBook)
window.addEventListener('load', getRandomCover)

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  imageCover.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(imageCover, coverTitle, tagline1, tagline2);
}

function switchToMakeYourOwnCover() {
  form.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeSection.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveButton.classList.add('hidden');
}

function switchToSavedCovers() {
  savedCoversSection.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeSection.classList.add('hidden');
  randomCoverButton.classList.add('hidden'); 
  saveButton.classList.add('hidden'); 
}

function returnToHome() {
  homeSection.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden'); 
  saveButton.classList.remove('hidden'); 
  homeButton.classList.add('hidden');
}
function createNewBook(event) {
  event.preventDefault();

  var newImageCover = coverInput.value; 
  var newTitle = titleInput.value;
  var newFirstDescriptor = firstDescriptorInput.value;
  var newSecondDescriptor = secondDescriptorInput.value;

  covers.push(newImageCover);  
  titles.push(newTitle);
  descriptors.push(newFirstDescriptor);
  descriptors.push(newSecondDescriptor);

  returnToHome();
  imageCover.src = coverInput.value;
  coverTitle.innerText = titleInput.value;
  tagline1.innerText = firstDescriptorInput.value; 
  tagline2.innerText = secondDescriptorInput.value;

  form.classList.add('hidden')

  currentCover = new Cover(newImageCover, newTitle, newFirstDescriptor, newSecondDescriptor);

}

