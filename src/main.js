// Create variables targeting the relevant DOM elements here 👇
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var coverImgSrc = covers[getRandomIndex(covers)]
var title = titles[getRandomIndex(titles)]
var descriptor1 = descriptors[getRandomIndex(descriptors)]
var descriptor2 = descriptors[getRandomIndex(descriptors)]

var currentCover = new Cover(coverImgSrc, title, descriptor1, descriptor2);

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');

coverImage.src = currentCover.cover;
coverTitle.innerText = currentCover.title;
firstDescriptor.innerText = currentCover.tagline1;
secondDescriptor.innerText = currentCover.tagline2;


// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
