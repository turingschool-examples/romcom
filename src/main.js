// Create variables targetting the relevant DOM elements here 👇
var coverChange = document.querySelector('.cover-image');
var titleChange = document.querySelector('.cover-title');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = generateRandomCover

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function generateRandomCover() {
  var coverNumber = getRandomIndex(covers);
  var randomImage = covers[coverNumber];
  var titleNumber = getRandomIndex(titles);
  var randomTitle = titles[titleNumber];
  
  
  
  
  coverChange.setAttribute("src" , randomImage);
  titleChange.innerText = randomTitle;
  surpriseCover = new Cover(randomImage, randomTitle, "", "")
}


