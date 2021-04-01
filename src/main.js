// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var firstTagline = document.querySelector(".tagline-1");
var secondTagline = document.querySelector(".tagline-2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage, coverTitle, firstTagline, secondTagline);

// Add your event listeners here 👇

window.addEventListener('load', getRandomCover);

// Create your event handlers and other functions here 👇


function getRandomCover() {
  changeCover();
  changeTitle();
  changeFirstDescriptor();
  changeSecondDescriptor();
}

function changeCover() {
  var index = getRandomIndex(covers);
  coverImage.src = covers[index];
  // console.log(covers[index]);
}

function changeTitle() {
  var index = getRandomIndex(titles);
  coverTitle.innerHTML = titles[index];
}

function changeFirstDescriptor() {
  var index = getRandomIndex(descriptors);
  firstTagline.innerHTML = descriptors[index];
}

function changeSecondDescriptor() {
  var index = getRandomIndex(descriptors);
  secondTagline.innerHTML = descriptors[index];
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
