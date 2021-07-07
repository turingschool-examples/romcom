// Create variables targetting the relevant DOM elements here 👇
var coverHtmlElement = document.querySelector('.cover-image');
var titleHtmlElement = document.querySelector('.cover-title');
var tagline1HtmlElement = document.querySelector('.tagline-1');
var tagline2HtmlElement = document.querySelector('.tagline-2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = handleOnLoad;

// Create your event handlers and other functions here 👇
function handleOnLoad() {
  var newCover = generateRandomCover();
  displayNewCover(newCover);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function generateRandomCover() {
  var coverNumber = getRandomIndex(covers);
  var randomImage = covers[coverNumber];
  var titleNumber = getRandomIndex(titles);
  var randomTitle = titles[titleNumber];
  
  var descriptorNumberOne = getRandomIndex(descriptors);
  var descriptorNumberTwo;
  do {
    descriptorNumberTwo = getRandomIndex(descriptors)
  } while (descriptorNumberOne === descriptorNumberTwo);
  var randomDescriptorOne = descriptors[descriptorNumberOne];
  var randomDescriptorTwo = descriptors[descriptorNumberTwo];

  return new Cover(randomImage, randomTitle, randomDescriptorOne, randomDescriptorTwo);
}

function displayNewCover(newCover) {
  coverHtmlElement.setAttribute("src" , newCover.cover);
  titleHtmlElement.innerText = newCover.title;
  tagline1HtmlElement.innerText = newCover.tagline1;
  tagline2HtmlElement.innerText = newCover.tagline2;
}
