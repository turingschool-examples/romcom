// Create variables targetting the relevant DOM elements here 👇
var newRandomCoverButton = document.querySelector('.random-cover-button');
// var newRandomtitle = document.querySelector('.cover-title');
// var newRandomtagline = document.querySelector('.tagline');
var newRandomCover = document.querySelector('.cover-image');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
 //newRandomCoverButton.addEventListener('click', createRandomCover());
// newRandomTitle.addEventListener('click', createRandomCover());
// newRandomtagline.addEventListener('click', createRandomCover());
// newRandomCover.addEventListener('click', createRandomCover());

//document.querySelector('.cover-image').addEventListener('click', createRandomCover())
// Create your event handlers and other functions here 👇
//   currentCover = new Cover
  // currentCover.cover = getRandomIndex(covers.length);
  // currentCover.title = getRandomIndex(titles.length);
  // currentCover.tagline1 = getRandomIndex(descriptors.length);
  // currentCover.tagline2 = getRandomIndex(descriptors.length);
  // currentCover.cover = Math.floor(Math.random() * covers.length);
  //  return covers[currentCover.cover]
  // currentCover.title = Math.floor(Math.random() * titles.length);
  // currentCover.tagline1 = Math.floor(Math.random() * descriptors.length);
  // currentCover.tagline2 = Math.floor(Math.random() * descriptors.length);
//}
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//pseudocode: click button and cover changes randomly.
var newCover = getRandomIndex(covers);
newRandomCover.src = covers[newCover]
newRandomCover.src
