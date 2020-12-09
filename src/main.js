// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
var title = document.getElementsByClassName('cover-title')[0];
var image = document.getElementsByClassName('cover-image')[0];
// Add your event listeners here 👇
window.addEventListener('load', getRandomTitle);
window.addEventListener('load', getRandomImage);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomTitle() {
  var index = getRandomIndex(titles);
  this.title.innerText = titles[index];
}

function getRandomImage() {
  var index = getRandomIndex(covers);
  console.log(this.image)
  this.image.src = covers[index];
}
