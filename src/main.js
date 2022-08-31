// Create variables targetting the relevant DOM elements here 👇
//TO DO:
// - Make the 'make your own cover button', get rid of the 'hidden' class when
// clicked.
// - Hide "Show new random cover" and "Saved covers" buttons at top
// - When we deleted "hidden" from form class and placed "hidden" on home page,
// the website changed to new page view of a form

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var coverImage = document.querySelector('.cover-image');
var randomButton = document.querySelector('.random-cover-button');
var title = document.querySelector('.cover-title');
var subtitle = document.querySelector('.tagline');

// Add your event listeners here 👇
randomButton.addEventListener('click', changeImage);
randomButton.addEventListener('click', changeTitle);
randomButton.addEventListener('click', changeSubtitle);


// Create your event handlers and other functions here 👇
function changeImage() {
  coverImage.src=covers[getRandomIndex(covers)];
}

function changeTitle(){
  title.innerText = titles[getRandomIndex(titles)];
}

function changeSubtitle(){
  subtitle.innerText = descriptors[getRandomIndex(descriptors)];
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
