// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

coverImage.src = covers[getRandomIndex(covers)];

title.innerText = titles[getRandomIndex(titles)];

descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
descriptor2.innerText = descriptors[getRandomIndex(descriptors)];


// Add your event listeners here 👇

randomCoverButton.addEventListener('click', function() {
  // coverImage.src = covers[getRandomIndex(covers)];
  // title.innerText = titles[getRandomIndex(titles)];
  // descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  // descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  savedCovers.unshift(currentCover);
  coverImage.src = currentCover.cover;
  title.innerText = currentCover.title;
  descriptor1.innerText = currentCover.tagline1;
  descriptor2.innerText = currentCover.tagline2;
});


makeCoverButton.addEventListener('click', changeView);

// Create your event handlers and other functions here 👇
function changeView() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
