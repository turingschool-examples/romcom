// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector('.cover-title');

var imageArray = document.querySelector('.cover-image');

var taglineArrayOne = document.querySelector('.tagline-1');

var taglineArrayTwo = document.querySelector('.tagline-2');

var getRandomButton = document.querySelector('.random-cover-button');

var makeYourOwnButton = document.querySelector('.make-new-button');

var saveCoverButton = document.querySelector('.save-cover-button');

var homeButton = document.querySelector('.home-button');

var viewFormView = document.querySelector('.form-view');

var viewHomeView = document.querySelector('.home-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;
// Add your event listeners here 👇
getRandomButton.addEventListener('click', getRandomCover)

makeYourOwnButton.addEventListener('click', makeNewPage)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeNewPage() {

viewFormView.classList.remove('hidden');
viewHomeView.classList.add('hidden');
getRandomButton.classList.add('hidden');
saveCoverButton.classList.add('hidden');
homeButton.classList.remove('hidden');

}


function getRandomCover() {
  currentCover = new Cover(imageArray, coverTitle, taglineArrayOne, taglineArrayTwo);
  imageArray.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  taglineArrayOne.innerText = descriptors[getRandomIndex(descriptors)];
  taglineArrayTwo.innerText = descriptors[getRandomIndex(descriptors)];
}

getRandomCover()
